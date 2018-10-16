const bcrypt = require('bcrypt');

// Method to generate a hash of a user's password:
function generate(password) {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) reject(err);

            resolve(hash);
        });
    });
};

module.exports = {
    generate
};