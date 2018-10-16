const db = require('./connection');

// For creating a user:
function createUser(user) {
    return db('users')
        .insert(user);
};

// Checking whether a user exists; returning a bool:
function userExists(username) {
    return db('users')
        .where('username', username)
        .then(users => { // should return a max of 1; 0 if user doesn't exist.
            return users.length > 0 // returns true if a user w provided username exists.
        });
};

module.exports = {
    createUser,
    userExists
};