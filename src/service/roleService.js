import db from '../models';

const createNewRoles = async (roles) => {
    try {
        let currentRoles = await db.Role.findAll({
            attributes: ['url', 'description'],
            raw: true,
        });

        const persist = roles.filter(({ url: url1 }) => !currentRoles.some(({ url: url2 }) => url1 === url2));

        if (persist.length === 0) {
            return {
                EM: 'Nothing to create',
                EC: 0,
                DT: [],
            };
        }
        await db.Role.bulkCreate(persist);
        return {
            EM: `Create successfully ${persist.length} roles`,
            EC: 0,
            DT: [],
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

const getAllRoles = async () => {
    try {
        let data = await db.Role.findAll({
            order: [['id', 'DESC']],
        });
        return {
            EM: `Get all roles successfully`,
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

const deleteRole = async (id) => {
    try {
        let data = await db.Role.destroy({
            where: { id },
        });
        return {
            EM: `Delete roles successfully`,
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

const getRoleByGroup = async (id) => {
    try {
        if (!id) {
            return {
                EM: `Not found any roles`,
                EC: 1,
                DT: [],
            };
        }
        let roles = await db.Group.findOne({
            where: { id },
            include: { model: db.Role, attributes: ['id', 'url', 'description'], through: { attributes: [] } },
        });
        return {
            EM: `Get roles by group successfully`,
            EC: 0,
            DT: roles,
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

const assignRoleToGroup = async (data) => {
    try {
        await db.Group_Role.destroy({
            where: { groupId: data.groupId },
        });
        await db.Group_Role.bulkCreate(data.groupRoles);
        return {
            EM: `Assign roles to group successfully`,
            EC: 0,
            DT: [],
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

module.exports = { createNewRoles, getAllRoles, deleteRole, getRoleByGroup, assignRoleToGroup };
