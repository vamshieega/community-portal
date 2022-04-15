import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { StorageService } from "src/app/core/services/storage.service";
import { environment } from "src/environments/environment";

@Injectable({
	providedIn: "root",
})
export class AppData {
	static baseUrl = environment.baseUrl;



	constructor() {

	}


}
