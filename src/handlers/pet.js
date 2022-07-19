const { Pet } = require('../models/pet');

const createPet = async (req, res) => {
    const { name, type, age } = req.body;

    const pet = Pet.build({ name, type, age });

    await pet.save();

    res.status(200).send(pet);
};

const listPets = async (req, res) => {
    const pets = await Pet.findAll();

    res.status(200).send(pets);
};

const getPet = async (req, res) => {
    const pets = await Pet.findAll({
        where: {
            id: req.params.id
        }
    });
    if (pets.length > 0) {
        res.status(200).send(cars[0]);
    } else {
        res.status(404).send(`could not find pet with id ${req.params.id}`);
    }
};

const deletePet = async (req, res) => {
    const petCount = await Pet.findAllCountAll();
    if (petCount === 0) {
        res.status(404).send('No pets to delete');
    } else {
        await petCount.destroy({
            where: {
                id: req.params.id,
            }
        });
        res.status(200).send('Pet deleted!');
    };
}

const updatePet = async (req, res) => {
    const [ updatePet ] = await Pet.findAll({
        where: {
            id: req.body.id,
        }
    });
    updateCar.name = req.body.name;
    updateCar.type = req.body.type;
    updateCar.age = req.body.age;
    await updatePet.save();
    res.status(200).send('pet was updated!');
}

module.exports = {
    createPet,
    listPets,
    getPet,
    deletePet,
    updatePet,
};

