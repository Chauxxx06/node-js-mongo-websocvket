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

const getMessage = (filterUser) => {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser));
    });
}

const updateMessage = (id, message) => {
    return new Promise( async (resolve, reject) => {
        if(!id || !message) {
            reject('Invalid Data');
            return false
        }
        const result = await store.updateText(id, message)
        resolve(result)
    })
}

const deleteMessage = (id) => {
    return new Promise((resolve, reject) => {
        if(!id) {
            reject('Params or id invalid');
            return false
        }
        store.remove(id)
                .then(()=>{
                    resolve()
                })
                .catch(e => {
                    reject(e);
                })
    })
}

module.exports = {
    addMessage,
    getMessage,
    updateMessage,
    deleteMessage
}