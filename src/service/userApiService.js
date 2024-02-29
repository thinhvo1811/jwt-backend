import db from '../models';

const getAllUser = async () => {
    try {
        let users = await db.User.findAll({
            attributes: ['id', 'username', 'email', 'phone', 'sex'],
            include: { model: db.Group, attributes: ['name', 'description'] },
        });
        if (users) {
            return {
                EM: 'Get data successfully',
                EC: 0,
                DT: users,
            };
        } else {
            return {
                EM: 'Get data successfully',
                EC: 0,
                DT: [],
            };
        }
    } catch (error) {
        console.log(error);
        return {
            EM: 'Something is wrong',
            EC: 1,
            DT: [],
        };
    }
};

const createNewUser = async (data) => {
    try {
        await db.User.create({});
    } catch (error) {
        console.log(error);
    }
};

const updateUser = async (data) => {
    try {
        let user = await db.User.findOne({
            where: { id: data.id },
        });
        if (user) {
            user.save({});
        } else {
        }
    } catch (error) {
        console.log(error);
    }
};

const deleteUser = async (id) => {
    try {
        await db.User.delete({
            where: { id },
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getAllUser,
    createNewUser,
    updateUser,
    deleteUser,
};
