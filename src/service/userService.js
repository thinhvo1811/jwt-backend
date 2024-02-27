import bcrypt from 'bcryptjs';
import mysql from 'mysql2/promise';

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (password) => {
    return bcrypt.hashSync(password, salt);
};

const createNewUser = async (email, password, username) => {
    let hashPass = hashUserPassword(password);

    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'demo_jwt',
    });

    try {
        const [results, fields] = await connection.query(
            'insert into user (email, password, username) values (?, ?, ?)',
            [email, hashPass, username],
        );
        return results;
    } catch (err) {
        console.log(err);
    }
};

const getUserList = async () => {
    // Create the connection to database
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'demo_jwt',
    });

    try {
        const [results, fields] = await connection.query('select * from user');
        return results;
    } catch (err) {
        console.log(err);
    }
};

const deleteUser = async (id) => {
    // Create the connection to database
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'demo_jwt',
    });

    try {
        const [results, fields] = await connection.query('delete from user where id = ?', [id]);
        return results;
    } catch (err) {
        console.log(err);
    }
};

const getUserByID = async (id) => {
    // Create the connection to database
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'demo_jwt',
    });

    try {
        const [results, fields] = await connection.query('select * from user where id = ?', [id]);
        return results;
    } catch (err) {
        console.log(err);
    }
};

const updateUser = async (email, username, id) => {
    // Create the connection to database
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'demo_jwt',
    });

    try {
        const [results, fields] = await connection.query('update user set email = ?, username=? where id = ?', [
            email,
            username,
            id,
        ]);
        return results;
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    createNewUser,
    getUserList,
    deleteUser,
    getUserByID,
    updateUser,
};
