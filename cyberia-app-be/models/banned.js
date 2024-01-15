class Banned{

    constructor(ip_address, reason){
        this.ip_address = ip_address;
        this.banned_at = Date.now();
        this.reason = reason;
    }
}



module.exports = Banned;