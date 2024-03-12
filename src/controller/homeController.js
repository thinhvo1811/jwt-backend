import userService from '../service/userService';

const handleHelloWord = (req, res) => {
    return res.render('home.ejs');
};

const handleUserPage = async (req, res) => {
    let userList = await userService.getUserList();
    return res.render('user.ejs', { userList });
};

const handleCreateNewUser = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    userService.createNewUser(email, password, username);

    return res.redirect('/user');
};

const handleDeleteUser = async (req, res) => {
    await userService.deleteUser(req.params.id);
    return res.redirect('/user');
};

const getUpdateUserPage = async (req, res) => {
    let id = req.params.id;
    let user = await userService.getUserByID(id);
    return res.render('user-update.ejs', { user });
};

const handleUpdateUser = async (req, res) => {
    let id = req.body.id;
    let email = req.body.email;
    let username = req.body.username;

    await userService.updateUser(email, username, id);
    return res.redirect('/user');
};

module.exports = {
    handleHelloWord,
    handleUserPage,
    handleCreateNewUser,
    handleDeleteUser,
    getUpdateUserPage,
    handleUpdateUser,
};
