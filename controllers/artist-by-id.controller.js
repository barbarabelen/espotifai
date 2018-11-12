const allArtists = require('../model/artists');
const invalidId = require('../utils/invalidId');

const artistById = (req, res) => {
    const id = req.params.id;

    if (invalidId(allArtists, id)) {
        res.status(404).send(`Artist with id ${id} was not found`);
    } else {
        res.status(200).send(allArtists[id - 1]);
    }
};

module.exports = artistById;
