const store = require('./store');

const addUser = (name) => {
   if (!name) {
    return Promise.reject('Invalid Name');
   }
    const user = {
    name,
   }
   return Promise.resolve(store.addUser(user));
}

const getUser= () => {
    return store.getUser()
}

module.exports = {
    addUser,
    getUser,
}