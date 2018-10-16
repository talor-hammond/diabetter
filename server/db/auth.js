const db = require('./connection');
const hash = require('../auth/hash');

// For creating a user:
function createUser({ username, password }) {
    return hash.generate(password)
        .then(hash => { // after we've waiting for 'generate' to resolve with our user's hashed password.
            return db('users')
                .insert({
                    username,
                    hash
                });
        });
};

// Checking whether a user exists; returning a bool:
function userExists(username) {
    return db('users')
        .where('username', username)
        .then(users => { // should return a max of 1; 0 if user doesn't exist.
            return users.length > 0 // returns true if a user w provided username exists.
        });
};

// For getting a particular user by 'username':
function getUserByUsername(username) {
    return db('users')
        .where('username', username)
        .first();
};

module.exports = {
    createUser,
    userExists,
    getUserByUsername
};