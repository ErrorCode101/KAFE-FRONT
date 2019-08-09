import { Injectable } from "@angular/core";

@Injectable()
export class CommonService{

    private coreServiceUrl: string = "https://qriomatrix-kafe.herokuapp.com/";

    constructor(){}

    public GetCoreServiceUrl(): string {

        return this.coreServiceUrl;
    }

}