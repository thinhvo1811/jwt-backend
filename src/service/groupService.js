import db from '../models';

const getGroups = async () => {
    try {
        let data = await db.Group.findAll({
            order: [['name', 'ASC']],
        });
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

module.exports = {
    getGroups,
};
