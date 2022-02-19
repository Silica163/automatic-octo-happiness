const {Storage} = require('./Storage.js');
class LocalStorage extends Storage{
    constructor(){
        super('LocalStorage','json');
    }
}
module.exports = {
    localStorage:new LocalStorage(),
    Storage:Storage,
}