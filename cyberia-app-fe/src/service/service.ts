import { Observable } from "rxjs";

export interface Service<DTO>{

    create(dto: DTO): Observable<any>;
    read(id: number): Observable<DTO>;
    update(dto: DTO): Observable<any>;
    delete(id: number): Observable<any>;
    getAll(): Observable<DTO[]>;

}