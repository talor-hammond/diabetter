const router = require('express').Router();

// Db-methods:
const {
    userExists,
    createUser
} = require('../db/auth');

// Handling tokens:
const token = require('../auth/token');

// Routes:
router.post('/register', register, token.issue);

// Helper-functions:
function register (req, res, next) {
    const { username, password } = req.body; // pulling the form-info out of the body of the req.
    
    const user = {
        username,
        password
    };

    // Checking whether the user exists in our 'users' table:
    userExists(username)
        .then(exists => {
            if (exists) return res.status(400).send({ message: 'User exists' });

            // If the user doesn't exist, add them to the db:
            createUser(user)
                .then(() => next()); // token gets issued here?
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });

    // TODO: If not, hash the password and add the user to the database.
};

module.exports = router;