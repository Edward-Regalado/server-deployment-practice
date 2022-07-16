'use strict';

// const validator = (req, res, next) => {
//   console.log("validator");
// };

// module.export = {
//   validator,
// };


const validator = (req, res, next) => {
    if(!req.query.name){
        next('This is the validator middleware: please enter a name in the query');
    }
    next();
};

module.exports = {
    validator,
}
