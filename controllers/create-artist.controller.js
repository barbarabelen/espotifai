const allArtists = require('../model/artists');

const createArtist = (req, res) => {
    const artist = {
        id: allArtists.length + 1,
        name: req.body.name
    };

    allArtists.push(artist);

    res.send(artist);
};

module.exports = createArtist;
