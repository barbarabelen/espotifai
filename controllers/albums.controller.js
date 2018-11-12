const allAlbums = require('../model/albums');

const albums = (req, res) => {
    res.status(200).send(allAlbums);
};

module.exports = albums;
