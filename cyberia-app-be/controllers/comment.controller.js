const Comment = require('../repositories/comment.repository');
const Banned  = require('../repositories/banned.repository');
const User = require('../repositories/user.repository');

exports.create = (req, res) =>{

    if(!req){
        return res.status(400).send('Request cannot be empty');
    }

    Banned.findByIp(req.ip, (err, data) => {

        if(err){
            return res.status(500).send(err);
        }
        else if(data == false){

            User.findByIp(req.ip, (err, data) =>{

                if(err){
                    return res.status(500).send(err);
                }
                else if(data == false){

                    user = new User(req.ip);

                    User.create(user, (err , data) =>{

                        if(err){
                            return res.status(500).send(err);
                        }

                        comment = new Comment(
                            req.body.comment,
                            data.id,
                            req.body.post_id
                        );

                        Comment.create(comment, (err, data) =>{
    
                            if(err){
                                return res.status(500).send(err);
                            }
                    
                            return res.status(201).send(data);
                        });
                    });

                }
                else{

                    comment = new Comment(
                        req.body.comment,
                        data.id,
                        req.body.post_id
                    );
    
    
                    Comment.create(comment, (err, data) =>{
    
                        if(err){
                            return res.status(500).send(err);
                        }
                
                        return res.status(201).send(data);
                    });
                }
            });

        }else{

        return res.status(401).send('You are banned! Cannot comment');
        }
    });    
}



exports.findById = (req, res) =>{

    if(!req){
        res.status(400).send('Request cannot be empty');
    }

    Comment.findById(req.params.id, (err, data) =>{

        if(err){
            res.status(500).send(err);
        }

        res.status(200).send(data);
    });
}


exports.getAll = (req, res) =>{

    if(!req){
        res.status(400).send('Request cannot be empty');
    }

    Comment.getAll((err, data) =>{

        if(err){
            res.status(500).send(err);
        }

        res.status(200).send(data);
    });
}


exports.update = (req, res) =>{

    if(!req){
        res.status(400).send('Request cannot be empty');
    }

    comment = new Comment(
        req.body.id,
        req.body.comment,
        req.body.user_id,
        req.body.post_id
    )

    Comment.update(comment, (err, data) =>{

        if(err){
            res.status(500).send(err);
        }

        res.status(200).send(data);
    });
}


exports.removeById = (req, res) =>{

    if(!req){
        res.status(400).send('Request cannot be empty');
    }

    Comment.removeById(req.params.id, (err, data) =>{

        if(err){
            res.status(500).send(err);
        }

        res.status(200).send(data);
    });
}


exports.remove = (req, res) =>{

    if(!req){
        res.statu(400).send('Request cannot be empty');
    }

    Comment.remove((err, data) =>{

        if(err){
            res.status(500).send(err);
        }

        res.status(200).send(data);
    });
}