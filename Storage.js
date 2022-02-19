const fs = require('fs');
//const path = require('path');

class Storage{
    constructor(stName,stExt='json'){
        this._filename = `./${stName}.${stExt}`;

        if(!fs.existsSync(this._filename)){
            fs.writeFileSync(this._filename,'{}');
            this._openStorage();
        }else{
            this._openStorage();
        }
        
    }
    _openStorage(){
        this.Store = JSON.parse(fs.readFileSync(this._filename));
        for (const id in this.Store) {
                this[id] = this.Store[id];
        }
        delete this.Store;
    }
    
    _saveStorage(){
        var data = JSON.parse(JSON.stringify(this));
        // remove _filename from data
        delete data._filename;

        fs.writeFileSync(this._filename,JSON.stringify(data));
    }
    setItem(name, value) {
        if (typeof value == "function") {
            value = value.toString();
        }
        if (typeof value == "object") {
            value = JSON.stringify(value);
        }
        this[name] = value;
        this._saveStorage();
    }
    getItem(name) {
        if (typeof this[name] == "undefined") { return null; }
        return this[name];
    }
    removeItem(name) {
        delete this[name];
        this._saveStorage();
    }
    clear() {
        fs.writeFileSync(this._filename,'{}');
        this._openStorage();
        return null;
    }
    key(index) {
        if (typeof index == "undefined") {
            return Object.keys(this);
        }
        return Object.keys(this)[index];
    }

}

module.exports = {Storage}