const model = require('./model');

const addUser= (User) => {
    // list.push(User);
    const myUser = new model(User);
    myUser.save();
}

const getUser = async (filterUser) => {
    // return list;
    let filter = {};
    if (filterUser !== null) {
        filter = { user: filterUser }
    }
    return await model.find(filter);
}

const updateUser = async (id, text) => {
    const foundUser = await model.findById(id);
    foundUser.User = text;
    const newUser = await foundUser.save();
    return newUser
}

const removeUser = (id) => {
    return model.deleteOne({_id: id})
}

module.exports = {
    addUser,
    getUser,
    updateUser,
    removeUser,
}