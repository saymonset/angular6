import { Component, Inject } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Product } from "../model/product.model";
import { Model } from "../model/repository.model"
import { MODES, SharedState, SHARED_STATE } from "./sharedState.model";
import { Observable } from "rxjs";
import { filter, map } from "rxjs/operators";

@Component({
	selector: "paForm",
	templateUrl: "form.component.html",
	styleUrls: ["form.component.css"]
})

export class FormComponent {
	

	product: Product = new Product();
	
	constructor(private model: Model,@Inject(SHARED_STATE) private stateEvents: Observable<SharedState>) {

	stateEvents
//	.pipe(map(state => new SharedState(state.mode, state.id == 5
//		? 1 : state.id)))
	//.pipe(filter(state => state.id != 3))
	.subscribe((update) => {
		this.product = new Product();
			if (update.id != undefined) {
				Object.assign(this.product, this.model.getProduct(update.id));
			}
		this.editing = update.mode == MODES.EDIT;
		});
	}
	editing: boolean = false;
		
	
	submitForm(form: NgForm) {
		if (form.valid) {
			this.model.saveProduct(this.product);
			this.product = new Product();
			form.reset();
		}
	}
	
	resetForm() {
		this.product = new Product();
	}
}