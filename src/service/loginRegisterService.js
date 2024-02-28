import bcrypt from 'bcryptjs';
import db from '../models';

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (password) => {
    return bcrypt.hashSync(password, salt);
};

const checkEmailExist = async (email) => {
    let user = await db.User.findOne({
        where: { email },
    });

    if (user) {
        return true;
    }

    return false;
};

const checkPhoneExist = async (phone) => {
    let user = await db.User.findOne({
        where: { phone },
    });

    if (user) {
        return true;
    }

    return false;
};

const registerNewUser = async (rawUserData) => {
    try {
        let isEmailExist = await checkEmailExist(rawUserData.email);
        if (isEmailExist) {
            return {
                EM: 'The email is already exist',
                EC: 1,
                DT: 'isValidEmail',
            };
        }

        let isPhoneExist = await checkPhoneExist(rawUserData.phone);
        if (isPhoneExist) {
            return {
                EM: 'The phone is already exist',
                EC: 1,
                DT: 'isValidPhone',
            };
        }

        let hashPassword = hashUserPassword(rawUserData.password);

        await db.User.create({
            email: rawUserData.email,
            phone: rawUserData.phone,
            username: rawUserData.username,
            password: hashPassword,
        });

        return {
            EM: 'An user is created successfully!',
            EC: 0,
        };
    } catch (error) {
        console.log(error);
        return {
            EM: 'Something is wrong in service...',
            EC: -2,
        };
    }
};

module.exports = {
    registerNewUser,
};
