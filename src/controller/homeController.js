import mysql from 'mysql2';

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'demo_jwt',
});

const handleHelloWord = (req, res) => {
    return res.render('home.ejs');
};

const handleUserPage = (req, res) => {
    return res.render('user.ejs');
};

const handleCreateNewUser = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    connection.query(
        'insert into users (email, password, username) values (?, ?, ?)',
        [email, password, username],
        function (err, results, fields) {
            console.log(results);
        },
    );

    return res.send('handleCreateNewUser');
};

module.exports = {
    handleHelloWord,
    handleUserPage,
    handleCreateNewUser,
};
