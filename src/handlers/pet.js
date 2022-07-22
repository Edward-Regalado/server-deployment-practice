const { Pet } = require('../db');

const createPet = async (req, res) => {
    try {
        const { name, type, age } = req.body;
        const pet = Pet.build({ name, type, age });
        await pet.save();
        res.status(200).send(pet);
    } catch (error) {
        console.log(error);
    }
};

const listPets = async (req, res) => {
    try {
        const pets = await Pet.findAll();
        res.status(200).send(pets);
        console.log(`List of all pets added to database: \n ${JSON.stringify(pets)}`);
    } catch (error) {
        console.log(error);
    }

};

const getPet = async (req, res) => {

    try {
        const pet = await Pet.findAll({
            where: {
                id: req.params.id
            }
        });
        if (pet.length > 0) {
            res.status(200).send(pet[0]);
        } else {
            res.status(404).send(`Could not find pet with id ${req.params.id}`);
        }
    } catch (error) {
        console.log(error);
    }
};

const deletePet = async (req, res) => {

    try {
        const pet = await Pet.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (pet >= 0) {
            res.status(200).send(`Pet with id ${req.params.id} deleted!`);
        } else {
            res.status(404).send(`No pet with id ${req.params.id} to delete!`);
        }

    } catch (error) {
        console.log(error);
    }
};

const updatePet = async (req, res) => {

    try {
        const pet = await Pet.findOne({
            where: {
                id: req.params.id,
            }
        });
        if(pet != null){
            pet.name = req.body.name;
            pet.type = req.body.type;
            pet.age = req.body.age;
            await pet.save();
            res.status(200).send(pet);
        } else {
            res.status(404).send(`No pet with id ${req.params.id} to update!`);
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createPet,
    listPets,
    getPet,
    deletePet,
    updatePet,
};

