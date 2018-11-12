const allArtists = require('../model/artists');

const artists = (req, res) => {
    res.status(200).send(allArtists);
};

module.exports = artists;
