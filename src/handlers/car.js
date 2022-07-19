const { Car } = require('../db.js');

const createCar = async (req, res) => {
    const { model, color, hp } = req.body;

    const car = Car.build({ model, color, hp });

    await car.save();

    res.status(200).send(car);
};

const listCars = async (req, res) => {
    const cars = await Car.findAll();

    res.status(200).send(cars);
};

const getCar = async (req, res) => {
    const cars = await Car.findAll({
        where: {
            id: req.params.id
        }
    });
    if (cars.length > 0) {
        res.status(200).send(cars[0]);
    } else {
        res.status(404).send(`could not find car with id ${req.params.id}`);
    }
};

const deleteCar = async (req, res) => {
    const carCount = await Car.findAllCountAll();
    if (carCount === 0) {
        res.status(404).send('No cars to delete');
    } else {
        await carCount.destroy({
            where: {
                id: req.params.id,
            }
        });
        res.status(200).send('Car deleted!');
    };
}

const updateCar = async (req, res) => {
    const [ updateCar ] = await Car.findAll({
        where: {
            id: req.body.id,
        }
    });
    updateCar.model = req.body.model;
    updateCar.color = req.body.color;
    updateCar.hp = req.body.hp;
    await updateCar.save();
    res.status(200).send('car was updated!');
}

module.exports = {
    createCar,
    listCars,
    getCar,
    deleteCar,
    updateCar,
};
