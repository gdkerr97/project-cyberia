class User{

    constructor(username, email, session_id){
        this.username = username;
        this.email = email;
        this.session_id = session_id;
        this.created_at = Date.now();
    }
}


module.exports = User;