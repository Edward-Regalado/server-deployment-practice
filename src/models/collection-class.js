'use strict';


class Collection {
    constructor(models){
        this.model = models;
    }

    async create(data){
        try {
            const object = await this.model.create(data);
            return object;
        } catch (error) {
            console.log(error);
        }
    }

    get(id){
        let data = null;
        try {
            data = await this.model.findOne({
                where: {
                    id,
                }
            });
        return data;
        } catch (error) {
            console.log(error);
        }
    }

    update(id, data) {
        console.log('update model');
    }

    delete(_id) {
        console.log('delete model');
    }

}

module.exports = {
    Collection,
};
