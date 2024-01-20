export class IpaddressDTO{

    id: number;
    ip_address: string;

    constructor(id: number, ip_address: string){
        this.id = id;
        this.ip_address = ip_address;
    }
}