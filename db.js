const db = require('mongoose');
// 'mongodb://chaux:lolita2019.@192.168.109.131:27017/?authMechanism=DEFAULT'
// db = telegrom
// URL = 'mongodb://chaux:lolita2019.@192.168.109.131:27017/?authMechanism=DEFAULT'
db.Promise = global.Promise;

async function connect(url) {   
    await db.connect(url, {
    useNewUrlParser: true,
    dbName: 'telegrom'
});
console.log('[db] Conection with exit')
}

module.exports = connect;

