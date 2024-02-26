import bcrypt from 'bcryptjs';
import mysql from 'mysql2/promise';

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

const getUserList = async () => {
    // Create the connection to database
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'demo_jwt',
    });

    let users = [];
    // connection.query('select * from users', [email, hashPass, username], function (err, results, fields) {
    //     if (err) {
    //         console.log(err);
    //         return users;
    //     }
    //     users = results;
    //     return users;
    // });

    try {
        const [results, fields] = await connection.query('select * from users');
        return results;
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    createNewUser,
    getUserList,
};
