class Post{

    constructor(subject, description, ip_address){
        this.subject = subject;
        this.description = description;
        this.created_at = Date.now();
        this.ip_address = ip_address;
    }
}


module.exports = Post;