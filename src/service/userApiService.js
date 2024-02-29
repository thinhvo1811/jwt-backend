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

const getUserWithPagination = async (page, limit) => {
    try {
        let offset = (page - 1) * limit;
        const { count, rows } = await db.User.findAndCountAll({
            offset,
            limit,
            attributes: ['id', 'username', 'email', 'phone', 'sex'],
            include: { model: db.Group, attributes: ['name', 'description'] },
        });

        let totalPages = Math.ceil(count / limit);

        let data = {
            totalRows: count,
            totalPages: totalPages,
            users: rows,
        };

        return {
            EM: 'Successfully',
            EC: 0,
            DT: data,
        };
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
        let user = await db.User.findOne({
            where: { id },
        });

        if (user) {
            await user.destroy();

            return {
                EM: 'Delete user successfully',
                EC: 0,
                DT: [],
            };
        } else {
            return {
                EM: 'User not exist',
                EC: 2,
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

module.exports = {
    getAllUser,
    getUserWithPagination,
    createNewUser,
    updateUser,
    deleteUser,
};
