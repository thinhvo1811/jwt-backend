require('dotenv').config();
import bcrypt from 'bcryptjs';
import { Op } from 'sequelize';
import db from '../models';
import { getGroupWithRoles } from './JWTService';
import { createJWT } from '../middleware/JWTActions';

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
            groupId: 4,
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

const checkPassword = (inputPassword, hashPassword) => {
    return bcrypt.compareSync(inputPassword, hashPassword);
};

const loginUser = async (rawData) => {
    try {
        let user = await db.User.findOne({
            where: {
                [Op.or]: [{ email: rawData.valueLogin }, { phone: rawData.valueLogin }],
            },
        });

        if (user) {
            let isCorrectPassword = checkPassword(rawData.password, user.password);

            if (isCorrectPassword) {
                let groupWithRoles = await getGroupWithRoles(user);
                let payload = {
                    email: user.email,
                    groupWithRoles,
                    expiresIn: process.env.JWT_EXPIRES_IN,
                };

                let token = createJWT(payload);

                return {
                    EM: 'Successfully!',
                    EC: 0,
                    DT: {
                        access_token: token,
                        groupWithRoles,
                        email: user.email,
                        username: user.username,
                    },
                };
            }
        }
        return {
            EM: 'Your email/phone number or password is incorrect!',
            EC: 1,
            DT: '',
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
    loginUser,
    hashUserPassword,
    checkEmailExist,
    checkPhoneExist,
};
