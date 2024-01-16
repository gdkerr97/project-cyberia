const Post = require('../repositories/post.repository');
const Banned = require('../repositories/banned.repository');
const User = require('../repositories/user.repository');

exports.create = (req, res) =>{

    if(!req){
        res.status(400).send('Request cannot be empty!');
    }


    Banned.findByIp(req.ip, (err, data) =>{

        if(err){
            return res.status(500).send(err);
        }
        else if(data == false){

            User.findByIp(req.ip, (err, data) =>{

                if(err){
                    return res.status(500).send(err);
                }

                if(data == false){

                    user = new User(
                        req.ip
                    );

                    User.create(user, (err, data) =>{

                        if(err){
                            return res.status(500).send(err);
                        }

                        post = new Post(
                            req.body.subject,
                            req.body.description,
                            data.id
                        );

                        Post.create(post, (err, data) =>{

                            if(err) return res.status(500).send(err);
                    
                            else{
                                console.log(data);
                                return res.status(201).send(data);
                            } 
                    
                        });

                    })
                }else{

                    post = new Post(
                        req.body.subject,
                        req.body.description,
                        data.id
                    );

                    Post.create(post, (err, data) =>{

                        if(err) return res.status(500).send(err);
                
                        else{
                            console.log(data);
                            return res.status(201).send(data);
                        } 
                
                    });
                }
            })
        }else{
 
        return res.status(401).send('You are banned! Cannot post');
    }
    })
}


exports.getAll = (req, res) =>{

    if(!req){
        res.status(400).send('Request cannot be empty!');
    }

    Post.getAll((err, data) =>{
        if(err) res.status(500).send(err);

        else{
            console.log(data);
            res.status(200).send(data);
        }
    })
}


exports.findById = (req, res) =>{

    if(!req){
        res.status(400).send('Request cannot be empty');
    }


    Post.findById(req.params.id, (err, data) =>{


        if(err) res.status(500).send(err);

        else{
            res.status(200).send(data);
        }

    });
}


exports.update = (req, res) =>{

    if(!req){
        res.status(400).send('Request cannot be empty');
    }

    post = new Post(
        req.body.id,
        req.body.subject,
        req.body.description
    );


    Post.update(post, (err, data) =>{

        if(err) res.status(500).send(err);

        else{
            console.log(data);
            res.status(200).send(data);
        }
    });

}


exports.remove = (req, res) =>{

    if(!req){
        res.status(400).send('Request cannot be empty');
    }

    Post.remove(req.params.id, (err, data) =>{

        if(err) res.status(500).send(err);

        else{
            console.log(data);
            res.status(200).send(data);
        }
    });
}


exports.removeAll = (req, res) =>{

    if(!req){
        res.status(400).send('Request cannot be empty');
    }


    Post.removeAll((err, data) =>{

        if(err) res.status(500).send(err);


        else{
            console.log(data);
            res.status(200).send(data);
        }
    })



}