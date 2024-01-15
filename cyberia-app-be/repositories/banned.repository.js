var db = require('./db');
const Banned = require('../models/banned');

Banned.create = function(newUser, result){

    db.query('INSERT INTO ip_banned SET ?', newUser, (err, res)=>{

        if(err){
            result(err, null);
            return;
        }

        console.log({id: res.insertId, ...newUser});
        result({id: res.insertId, ...newUser});
    });
}

Banned.findById = function(id, result){

    db.query('SELECT * FROM ip_banned WHERE id = ?', id, (err, res) =>{

        if(err){
            console.log(err);
            result(err, null);
            return;
        }

        if(res.affectedRows == 0){
            result(null, {kind: 'IP not found!'});
            return;
        }

        result(null, res[0]);
    });
}

Banned.findByIp = function(ip, result){

    db.query('SELECT * FROM ip_banned WHERE ip_address = ?', ip, (err, res)=>{

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

Banned.getAll = function(result){

    db.query('SELECT * FROM ip_banned', (err, res) =>{

        if(err){
            console.log(err);
            result(err, null);
            return;
        }

        if(res.length){

            result(null, res);
            return;
        }

        result(null, {kind: 'No IPs banned'});
    });
}


Banned.update = function(newUser, result){

    db.query('UPDATE ip_banned SET ? WHERE id = ?', [newUser, newUser.id], (err, res) =>{

        if(err){
            console.log(err);
            result(err, null);
            return;
        }

        if(res.affectedRows == 0){
            result(null, {kind:'IP not found!'});
            return;
        }

        result(null, res);
    });
}


Banned.removeById = function(id, result){

    db.query('DELETE FROM ip_banned WHERE id = ?', id, (err, res) =>{

        if(err){
            console.log(err);
            result(err, null);
            return;
        }

        if(res.affectedRows == 0){
            result(null, {kind:'IP not found'});
            return;
        }

        result(null, {message:'IP removed!'});
    });
}


Banned.removeAll = function(result){

    db.query('DELETE FROM ip_banned', (err, res) =>{

        if(err){
            console.log(err);
            result(err, null);
            return;
        }

        if(res.affectedRows == 0){
            result(null, {kind: 'No IP removed!'});
            return;
        }

        result(null, {message: 'All IP removed!'});
    });
}


module.exports = Banned;