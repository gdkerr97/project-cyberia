import { Injectable } from "@angular/core";
import { AbstractService } from "./abstractservice";
import { IpaddressDTO } from "src/dto/ipaddressdto";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class UserService extends AbstractService<IpaddressDTO>{

    user: IpaddressDTO = new IpaddressDTO();

    constructor(http: HttpClient){
        super('user', http);
    }

    getUser(): IpaddressDTO{
        return this.user;
    }

    setUser(user: IpaddressDTO){
        this.user = user;
    }


}