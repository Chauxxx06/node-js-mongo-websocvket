const model = require('./model');

const addMessage = (message) => {
    // list.push(message);
    const myMessage = new model(message);
    myMessage.save();
}

const getMessage = async (filterUser) => {
    // return list;
    let filter = {};
    if (filterUser !== null) {
        filter = { user: filterUser }
    }
    return await model.find(filter);
}

const updateText = async (id, text) => {
    const foundMessage = await model.findById(id);
    foundMessage.message = text;
    const newMessage = await foundMessage.save();
    return newMessage
}

const remove = (id) => {
    return model.deleteOne({_id: id})
}

module.exports = {
    add: addMessage,
    list: getMessage,
    updateText,
    remove,
}