import { Injectable } from "@angular/core";

@Injectable()
export class CommonService{

    private coreServiceUrl: string = "http://localhost:8080/";

    constructor(){}

    public GetCoreServiceUrl(): string {

        return this.coreServiceUrl;
    }

}