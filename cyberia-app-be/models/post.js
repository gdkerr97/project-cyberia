class Post{

    constructor(subject, description, user_id){
        this.subject = subject;
        this.description = description;
        this.created_at = Date.now();
        this.user_id = user_id;
    }
}


module.exports = Post;