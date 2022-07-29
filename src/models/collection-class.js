'use strict';


class Collection {
    constructor(model, app, route){
        this.model = model;
        this.routeModel(app, route);
    }

    // CREATE a single record in the database
    async create(req, res){
        try {
            const object = this.model.build(req.body);
            await object.save();
            res.status(200).send('Record was created successfully!');
        } catch (error) {
            console.log(error);
        }
    };

    // GET a single record if an ID is present, else return all objects
    async read(req, res){
        let options = {};
        let records = null;
        const id = req.params.id;
        try {
            if(id){
                options['where'] = { id };
                records = await this.model.findOne(options);
            } else {
                records = await this.model.findAll(options);
            }
            res.status(200).send(records);
        } catch (error) {
            console.log(error);
        }
    };

    // UPDATE a record in the database
    async update(req, res) {
        const id = req.params.id;
        try {
            if(!id) {
                throw new Error('Invalid Id');
            } else {
                let data = await this.model.update(req.body, {
                    where: { id },
                });
                res.status(200).send(data);
                console.log(`${id} updated in the database!`);
            }
        } catch (error) {
            console.log(error);
        }
    };

    // DELETE a record from the database
    async delete(req, res) {
       const id = req.params.id;
       try {
            if(!id) {
                throw new Error('Invalid id');
            } else {
                await this.model.destroy({
                    where: { id },
                });
                res.status(200).send(`${id} deleted from the database`);
            }
       } catch (error) {
            console.log(error);
       }
    }

    routeModel = (app, route) => {
        app.post(`/${route}`, (req, res) => this.create(req, res));
        app.get(`/${route}`, (req, res) => this.read(req, res));
        app.get(`/${route}/:id`, (req, res) => this.read(req, res));
        app.put(`/${route}/:id`, (req, res) => this.update(req, res));
        app.delete(`/${route}/:id`, (req, res) => this.delete(req, res));
    };
};

module.exports = Collection;
