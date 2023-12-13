/* POSTDTO stesso del backend */
export class PostDTO{
    postId: number;
    category: string;
    username: string;
    email: string;
    subject: string;
    description: string;
    url: string;

    constructor(postId: number, category: string, username: string, email: string, subject: string,  description: string, url: string){
        this.postId = postId;
        this.category = category;
        this.subject = subject;
        this.username = username;
        this.email = email;
        this.description = description;
        this.url = url;
    }
}