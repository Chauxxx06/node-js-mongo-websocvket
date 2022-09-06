const store = require('./store');


const addMessage = (user, message) => {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            console.error('[meesageController] there not user or messaje')
            reject('Data incorrect');
            return false
        }
        const fullMessage = {
            user: user,
            message: message,
            date: new Date(),
        }
        console.log(fullMessage);
        store.add(fullMessage);
        resolve(fullMessage);
    })
}

const getMessage = () => {
    return new Promise((resolve, reject) => {
        resolve(store.list());
    });
}

module.exports = {
    addMessage,
    getMessage,
}