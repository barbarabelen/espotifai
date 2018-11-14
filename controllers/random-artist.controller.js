const allArtists = require('../model/artists');
const getRandomIndex = require('../utils/getRandomIndex');

const randomArtist = (req, res) => {
    const randomIndex = getRandomIndex(allArtists);

    res.status(200).send(allArtists[randomIndex]);
};

module.exports = randomArtist;
