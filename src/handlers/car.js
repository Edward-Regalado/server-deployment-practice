// const { Car } = require('../db');

// const createCar = async (req, res) => {
//     try {
//         const { model, color, hp } = req.body;
//         const car = Car.build({ model, color, hp });
//         await car.save()
//         res.status(200).send(car);
//         console.log(`${car.model} added to database`);
//     } catch (error) {
//         console.log(error);
//     }
// };

// const listCars = async (req, res) => {

//     try {
//         const cars = await Car.findAll();
//         res.status(200).send(cars);
//         console.log(`List of all cars added to database: \n ${JSON.stringify(cars)}`);
//     } catch (error) {
//         console.log(error);
//     }
// };

// const getCar = async (req, res) => {

//     try {
//         const car = await Car.findAll({
//             where: {
//                 id: req.params.id,
//             }
//         });
//         if(car.length > 0) {
//             res.status(200).send(car[0]);
//             console.log(car[0]);
//         } else {
//             res.status(404).send(`Could not find car with id ${req.params.id}`);
//         }
//     } catch (error) {
//         console.log(error);
//     }
// };

// const deleteCar = async (req, res) => {

//     try {
//         const car = await Car.destroy({
//             where: {
//                 id: req.params.id,
//             }
//         });
//         if(car >= 1){
//             res.status(200).send(`Car with id ${req.params.id} deleted!`);
//         }
//         else {
//             res.status(404).send(`No car with id ${req.params.id} to delete!`);
//         }

//     } catch(err) {
//         console.log(error);
//     }
// };

// const updateCar = async (req, res) => {
//     try {
//         const car = await Car.findOne({
//             where: {
//                 id: req.params.id,
//             }
//         });
//         if(car != null){
//             car.model = req.body.model;
//             car.color = req.body.color;
//             car.hp = req.body.hp;
//             await car.save();
//             res.status(200).send(car);
//         } else {
//             res.status(404).send(`No car with id ${req.params.id} to update!`);
//         }
//     } catch (error) {
//         console.log(error);
//     }
// };

// module.exports = {
//     createCar,
//     listCars,
//     getCar,
//     deleteCar,
//     updateCar,
// };
