import { ApplicationRef, Component } from '@angular/core';
import { Model } from "./repository.model";
import { NgForm } from "@angular/forms";
import { Product } from "./product.model";
import { ProductFormGroup } from "./form.model";
@Component({
  selector: 'app-saymon',
  templateUrl: './saymon.component.html',
  styleUrls: ['./saymon.component.css']
})
export class SaymonComponent {
 
showTable: boolean = true;
		constructor(ref: ApplicationRef) {
				(<any>window).appRef = ref;
				(<any>window).model = this.model;
				}
		 
		 model: Model = new Model();
		 form: ProductFormGroup = new ProductFormGroup();


		getProduct(key: number): Product {
			return this.model.getProduct(key);
		}
		getProducts(): Product[] {
			return this.model.getProducts();
		}

		selectedProduct: string;
	
		getSelected(product: Product): boolean {
			return product.name == this.selectedProduct;
		}



		newProduct: Product = new Product();

		get jsonProduct() {
			return JSON.stringify(this.newProduct);
			}
			
		addProduct(p: Product) {
			 this.model.saveProduct(p);
			console.log("New Product: " + this.jsonProduct);
			}

			deleteProduct(key: number) {
				this.model.deleteProduct(key);
			}


			getValidationMessages(state: any, thingName?: string) {
				let thing: string = state.path || thingName;
				let messages: string[] = [];
				if (state.errors) {
					for (let errorName in state.errors) {
							switch (errorName) {
								case "required":
									messages.push(`You must enter a ${thing}`);
									break;
								case "minlength":
									messages.push(`A ${thing} must be at least	${state.errors['minlength'].requiredLength} characters`);
									break;
								case "pattern":
									messages.push(`The ${thing} contains
									illegal characters`);
									break;
							}
					}
				}
			return messages;
			}



			formSubmitted: boolean = false;

			submitForm(form: NgForm) {
			 
					this.formSubmitted = true;
					if (form.valid) {

							this.addProduct(this.newProduct);
							this.newProduct = new Product();
							form.reset();
							this.formSubmitted = false;
					}
			}


			getFormValidationMessages(form: NgForm): string[] {
					let messages: string[] = [];
					Object.keys(form.controls).forEach(k => {
						this.getValidationMessages(form.controls[k], k).forEach(m => messages.push(m));
					});
					return messages;
		    }

}
