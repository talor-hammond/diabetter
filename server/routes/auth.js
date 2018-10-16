const router = require('express').Router();

// Routes:
router.post('/register', register);

// Helper-functions:
function register (req, res) {
    const { username, password } = req.body; // pulling the form-info out of the body of the req.
    // TODO: Make sure username doesn't already exist.
    // TODO: If not, hash the password and add the user to the database.
}

module.exports = router;