const person = (req, res ) => {
    if(req.query.name){
        res.status(200).send({name: req.params.name});
    }
    res.status(500).send('please enter a name');
};

module.exports = {
    person,
};
