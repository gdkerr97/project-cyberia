const Banned = require('../repositories/banned.repository');

exports.create = (req, res) =>{

    if(!req){
        res.status(400).send('Request cannot be empty!');
    }

    banned = new Banned(
        req.body.ip_address,
        req.body.reason
    );

    Banned.create(banned, (err, data) =>{

        if(err){
            res.status(500).send(err);
        }

        res.statu(201).send(data);
    });
}


exports.findById = (req, res) =>{

    if(!req){
        res.statu(400).send('Request cannot be empty!');
    }

    Banned.findById(req.params.id, (err, data) =>{

        if(err){
            res.status(500).send(err);
        }

        res.status(200).send(data);
    });
}


exports.getAll = (req, res) =>{

    if(!req){
        res.status(400).send('Request cannot be empty!');
    }

    Banned.getAll((err, data) =>{

        if(err){
            res.status(500).send(err);
        }

        res.status(200).send(data);
    })
}


exports.update = (req, res) =>{

    if(!req){
        res.status(400).send('Request cannot be empty!');
    }

    banned = new Banned(
        req.body.id,
        req.body.ip_address,
        req.body.reason
    );

    Banned.update(banned, (err, data) =>{

        if(err){
            res.status(500).send(err);
        }

        res.status(200).send(data);
    })
}


exports.removeById = (req, res) =>{

    if(!req){
        res.status(400).send('Request cannot be empty!');
    }

    Banned.removeById(req.params.id, (err, data) =>{

        if(err){
            res.status(500).send(err);
        }

        res.status(200).send(data);
    });
}


exports.removeAll = (req, res) =>{

    if(!req){
        res.status(400).send('Request cannot be empty!');
    }

    Banned.removeAll((err, data) =>{

        if(err){
            res.status(500).send(err);
        }

        res.status(200).send(data);
    })
}