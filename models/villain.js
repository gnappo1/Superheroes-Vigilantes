/* eslint-disable id-length */
const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'villain.json'
);

const getVillainsFromFile = (callback) => {

    fs.readFile(p, (err, data) => {
        if (err) {
            return callback([]);
        }

        return callback(JSON.parse(data));
    });
};

module.exports = class Villain {

    constructor (imageUrl, name, reward) {
        this.imageUrl = imageUrl;
        this.name = name;
        this.reward = reward;
    }

    save () {
        getVillainsFromFile((villains) => {
            villains.push(this);
            fs.writeFile(p, JSON.stringify(villains), (error) => {
                // eslint-disable-next-line no-console
                console.log(error);
            });
        });
    }

    static fetchAll (callback) {

        /*  Callback is the anonymous function I passed in VillainsController */
        /* > getVillains, when I called fetchAll */

        getVillainsFromFile(callback);
    }
};