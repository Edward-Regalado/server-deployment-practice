// const { User } = require('../db.js');

// const createUser = async (req, res) => {

//     try {
//         const { username, age } = req.body;
//         const user = User.build({ username, age });
//         await user.save();
//         res.status(200).send(user);
//         console.log(`${user.username} added to database`);
//     } catch (error) {
//         res.send(error);
//         console.log(error);
//     }
// };

// const listUsers = async (req, res) => {

//     try {
//         const users = await User.findAll();
//         res.status(200).send(users);
//         console.log(`List of all users added to database: \n ${JSON.stringify(users)}`);
//     } catch (error) {
//         console.log(error);
//     }

// };

// const getUser = async (req, res) => {

//     try {
//         const user = await User.findAll({
//             where: {
//                 id: req.params.id,
//             },
//         });
//         if (user.length > 0) {
//             res.status(200).send(user[0]);
//             console.log(user[0]);
//         } else {
//             res.status(404).send(`Could not find user with id ${req.params.id}`);
//         }
//     } catch(error) {
//         console.log(error);
//     }
// };

// const deleteUser = async (req, res) => {

//     try {
//         const user = await User.destroy({
//             where: {
//                 id: req.params.id,
//             },
//         });
//         if (user >= 1) {
//             res.status(200).send(`User with id ${req.params.id} deleted!`);
//         } else {
//             res.status(404).send(`No user with id ${req.params.id} to delete!`);
//         }
//     } catch (error) {
//         console.log(error);
//     }
// };

// const updateUser = async (req, res) => {
//     try {
//         const user = await User.findOne({
//             where: {
//                 id: req.params.id,
//             }
//         });
//         if(user != null) {
//             user.username = req.body.username;
//             user.age = req.body.age;
//             await user.save();
//             res.status(200).send(user);
//         } else {
//             res.status(404).send(`NO user with id ${req.params.id} to update!`);
//         }
//     } catch (error) {
//         console.log(error);
//     }
// };

// module.exports = {
//     createUser,
//     listUsers,
//     getUser,
//     deleteUser,
//     updateUser,
// };
