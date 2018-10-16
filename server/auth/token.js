const jwt = require('jsonwebtoken');
const verifyJwt = require('express-jwt');

// Db-methods:
const { getUserByUsername } = require('../db/auth');

// Method for issuing a jwt:
function issue(req, res) {
    const { username } = req.body;

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
    return jwt.sign( user, secret, { expiresIn: '7d'} ); // signs the payload into a jwt -- gets signed with our environment's 'secret'; ensuring validity
};

// For decoding a token:
function decode(req, res, next) {
    verifyJwt({
        secret: getSecret
    })(req, res, next);
};

function getSecret(req, payload, done) {
    done(null, process.env.JWT_SECRET);
};

module.exports = {
    issue,
    decode
};