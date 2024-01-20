export class BannedDTO{

    id: number;
    ip_address: string;
    reason: string;
    banned_at: string;

    constructor(id: number, ip_address: string, reason: string, banned_at: string){
        this.id = id;
        this.ip_address = ip_address;
        this.reason = reason;
        this.banned_at = banned_at;
    }

}