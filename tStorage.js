const {Storage} = require('./Storage.js');

var testStorage = new Storage('testSt');
//testStorage.setItem("st",'hello world fr st');
console.log('t file',testStorage,testStorage.getItem('ft'));
console.log('t file',testStorage,testStorage.getItem('st'));
console.log('t file',testStorage,testStorage.removeItem('ft'));
console.log('t file',testStorage,testStorage.getItem('ft'));
console.log('t file',testStorage,testStorage.key());