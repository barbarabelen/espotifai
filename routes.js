const artists = require('./controllers/artists.controller');
const albums = require('./controllers/albums.controller');
const artistById = require('./controllers/artist-by-id.controller');
const albumById = require('./controllers/album-by-id.controller');
const createArtist = require('./controllers/create-artist.controller');

const appRouter = function(app) {
    app.get('/api/artists', artists);
    app.get('/api/artists/:id', artistById);
    app.get('/api/albums', albums);
    app.get('/api/albums/:id', albumById);

    app.post('/api/artists', createArtist);

    // app.put('/api/artists/:id', updateArtist);
    // app.put('/api/albums/:id', updateAlbum);

    // app.delete('/api/artists/:id', removeArtist);
    // app.delete('/api/albums/:id', removeAlbum);
};

module.exports = appRouter;
