const Post = require('../repositories/post.repository');

exports.create = (req, res) =>{

    if(!req){
        res.status(400).send('Request cannot be empty!');
    }

    post = new Post(
        req.body.subject,
        req.body.description
    );

    Post.create(post, (err, data) =>{

        if(err) res.status(500).send(err);

        else{
            console.log(data);
            res.status(201).send(data);
        } 

    });
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
            console.log(data);
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