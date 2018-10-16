const router = require('express').Router();

// Db-methods:
const {
    userExists,
    createUser
} = require('../db/auth');

// Routes:
router.post('/register', register);

// Helper-functions:
function register (req, res) {
    const { username, password } = req.body; // pulling the form-info out of the body of the req.
    
    const user = {
        username,
        hash: password // column is named 'hash' in the db.
    };

    // Checking whether the user exists in our 'users' table:
    userExists(username)
        .then(exists => {
            if (exists) return res.status(400).send({ message: 'User exists' });

            // If the user doesn't exist, add them to the db:
            createUser(user)
                .then(() => res.status(201).end());
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });

    // TODO: If not, hash the password and add the user to the database.
};

module.exports = router;