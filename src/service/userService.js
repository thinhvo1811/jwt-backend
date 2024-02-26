import bcrypt from 'bcryptjs';
import mysql from 'mysql2';

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'demo_jwt',
});

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (password) => {
    return bcrypt.hashSync(password, salt);
};

const createNewUser = (email, password, username) => {
    let hashPass = hashUserPassword(password);

    connection.query(
        'insert into users (email, password, username) values (?, ?, ?)',
        [email, hashPass, username],
        function (err, results, fields) {
            if (err) {
                console.log(err);
            }
        },
    );
};

const getUserList = () => {
    connection.query('select * from users', [email, hashPass, username], function (err, results, fields) {
        if (err) {
            console.log(err);
        }
    });
};

module.exports = {
    createNewUser,
    getUserList,
};
