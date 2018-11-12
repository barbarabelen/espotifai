const allAlbums = require('../model/albums');
const invalidId = require('../utils/invalidId');

const albumById = (req, res) => {
    const id = req.params.id;

    if (invalidId(allAlbums, id)) {
        res.status(404).send(`Album with id ${id} was not found`);
    } else {
        res.status(200).send(allAlbums[id - 1]);
    }
};

module.exports = albumById;
