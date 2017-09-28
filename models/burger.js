// import orm.js into burger.js
var orm = require('../config/orm.js');

// Also inside burger.js, create the code that 
// will call the ORM functions using burger 
// specific input for the ORM.

var burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },
    create: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.delete("burgers", condition, function (res) {
            cb(res);
        });
    },
    delete: function (condition, cb) {
        orm.delete("burgers", condition, function (res) {
            cb(res);
        });
    }
};

// Export at the end of the burger.js file.
module.exports = burger;
