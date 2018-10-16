const db = require('./connection');

// For creating a user:
function createUser(user) {
    return db('users')
        .insert(user);
};

// Checking whether a user exists; returning a bool:


module.exports = {

};