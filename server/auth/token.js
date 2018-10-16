const jwt = require('jsonwebtoken');

const { getUserByUsername } = require('../db/auth');

// Method for issuing a jwt:
function issue(req, res) {
    const { username } = req.body

    getUserByUsername(username)
        .then(user => {
            const token = createToken(user, process.env.JWT_SECRET);

            res.json({
                message: 'Authentication successful',
                token
            });
        });
};

function createToken(user, secret) {
    // const { id, username } = user
    return jwt.sign( user, secret, { expiresIn: '7d'} ); // signs the payload into a jwt.
};

module.exports = {
    issue
};