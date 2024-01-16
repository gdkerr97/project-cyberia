class Comment{

    constructor(content, ip_address, post_id){
        this.content = content;
        this.created_at = Date.now();
        this.ip_address = ip_address;
        this.post_id = post_id;
    }
}


module.exports = Comment;