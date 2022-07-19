const { User } = require('../db.js');

const createUser = async (req, res) => {
    const { username, age } = req.body;

    const user = User.build({ username, age });

    await user.save();

    res.status(200).send(user);
};

const listUsers = async (req, res) => {
    
    const users = await User.findAll();

    res.status(200).send(users);
};

const getUser = async (req, res) => {
    const users = await User.findAll({
        where: {
            id: req.params.id,
        },
    });

    if (users.length > 0) {
        res.status(200).send(users[0]);
    } else {
        res.status(404).send(`could not find user with id ${req.params.id}`);
    }
};

const deleteUser = async (req, res) => {
    // const userCount = await User.destroy({
    //     where: {
    //         id: req.params.id,
    //     },
    // });
    const userCount = await User.findAndCountAll();
    if (userCount === 0) {
        res.status(404).send('No users to delete');
    } else {
        await userCount.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).send('User deleted!');
    };
}

const updateUser = async (req, res) => {
    const [ updateUser ] = await User.findAll({
        where: {
            id: req.body.id,
        }
    });
    updateUser.username = req.body.username;
    updateUser.age = req.body.age;
    await updateUser.save();
    res.status(200).send('user was updated!');
}

module.exports = {
    createUser,
    listUsers,
    getUser,
    deleteUser,
    updateUser,
};
