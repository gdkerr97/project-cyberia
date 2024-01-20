import { Observable } from "rxjs";
import { Service } from "./service";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";

export abstract class AbstractService<DTO> implements Service<DTO>{

    type: string;

    constructor(type: string, protected http: HttpClient){
        this.type = type;
    }

    create(dto: DTO): Observable<any> {
        return this.http.post(environment.APIEndpoint + this.type + '/create', dto)
    }
    read(id: number): Observable<DTO> {
        return this.http.get<DTO>(environment.APIEndpoint + this.type + '/findById/' + id);
    }
    update(dto: DTO): Observable<any> {
        return this.http.put(environment.APIEndpoint + this.type + '/update', dto);
    }
    delete(id: number): Observable<any> {
        return this.http.delete(environment.APIEndpoint + this.type + '/delete/' + id);
    }
    getAll(): Observable<DTO[]> {
       return this.http.get<DTO[]>(environment.APIEndpoint + this.type + '/getAll');
    }

}