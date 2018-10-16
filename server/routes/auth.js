const router = require('express').Router();

// Db-methods:
const {
    userExists,
    createUser
} = require('../db/auth');

// Handling tokens:
const token = require('../auth/token');

// Routes:
router.post('/register', register, token.issue); // issue(req, res) gets called with register's 'next' param

function register (req, res, next) {
    const { username, password } = req.body;
    
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
};

router.get('/username', token.decode, (req, res) => {
    const { username } = req.user;
    
    res.json({
        username
    });
});

module.exports = router;