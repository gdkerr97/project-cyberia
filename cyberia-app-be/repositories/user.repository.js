var db = require('./db');
const User = require('../models/user');


User.create = function(newUser, result){

    db.query('INSERT INTO ip_addresses SET ?', newUser, (err, res) =>{

        if(err){
            console.log(err);
            result(err,null);
            return;
        }

        console.log({id: res.insertId, ...newUser});
        result(null, {id: res.insertId, ...newUser});

    });
}


User.findById = function(id, result){

    db.query('SELECT * FROM ip_addresses WHERE id = ?', id, (err, res) =>{

        if(err){
            console.log(err);
            result(err, null);
            return;
        }

        if(res.affectedRows == 0){
            result(null, {kind: 'User not found!'});
            return;
        }

        result(null, res[0]);
    });
}

User.findByIp = function(ip, result){

    db.query('SELECT * FROM ip_addresses WHERE ip_address = ?', ip, (err, res) =>{

        if(err){
            result(err, null);
            return;
        }

        if(!res[0]){
            result(null, false);
            return;
        }

        result(null, res[0]);
    })
}

User.getAll = function(result){

    db.query('SELECT * FROM ip_addresses', (err, res) =>{

        if(err){
            console.log(err);
            result(err, null);
            return;
        }


        if(res.length){

            result(null, res);
            return;
        }

        result(null, {kind: 'No users found'});

    });
}


User.update = function(newUser, result){

    db.query('UPDATE ip_addresses SET ? WHERE id = ?', [newUser, newUser.id], (err, res) =>{

        if(err){
            console.log(err);
            result(err, null);
            return;
        }

        if(res.affectedRows == 0){
            result(null, {kind: 'User not found!'});
            return;
        }

        result(null, res);
    })
}


User.removeById = function(id, result){
    db.query('DELETE FROM ip_addresses WHERE id = ?', id, (err, res) =>{

        if(err){
            console.log(err);
            result(err, null);
            return;
        }

        if(res.affectedRows == 0){
            result(null, {kind: 'User not found!'});
            return;
        }

        result(null, {message: 'User removed!'});
    })
}


User.removeAll = function(result){
    db.query('DELETE FROM ip_addresses', (err, res) =>{
        
        if(err){
            console.log(err);
            result(err, null);
            return;
        }

        if(res.affectedRows == 0){
            result(null, {kind: 'No users found!'});
            return;
        }

        result(null, {message: 'All users are removed!'});
    })
}


User.removeByIp = function(ip, result){

    db.query('DELETE FROM ip_addresses WHERE ip_address = ?', ip, (err, res) =>{

        if(err){
            result(err, null);
            return;
        }

        if(res.affectedRows == 0){
            result(null, {kind: 'No user found!', type: false});
            return;
        }

        result(null, {message:'User removed!', type: true});
    });
};


module.exports = User;