/* CommentDTO stesso del backend */

export class CommentDTO{

    id: number;
    content: string;
    created_at: string;
    post_id: number;
    ip_address: number;

    constructor(id: number, content: string, created_at: string, post_id: number, ip_address: number){
        this.id = id;
        this.content = content;
        this.created_at = created_at;
        this.post_id = post_id;
        this.ip_address = ip_address;
    }
}