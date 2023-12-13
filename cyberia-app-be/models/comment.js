class Comment{

    constructor(comment, user_id, post_id){
        this.commento = comment;
        this.created_at = Date.now();
        this.user_id = user_id;
        this.post_id = post_id;
    }
}


module.exports = Comment;