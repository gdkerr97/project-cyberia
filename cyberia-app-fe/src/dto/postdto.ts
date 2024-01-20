/* PostDTO stesso del backend */
export class PostDTO{
    id: number;
    subject: string;
    description: string;
    created_at: string;
    ip_address: number;

    constructor(id: number, subject: string, description: string, created_at: string, ip_address: number){
        this.id = id;
        this.subject = subject;
        this.description = description;
        this.created_at = created_at;
        this.ip_address = ip_address;
    }
}