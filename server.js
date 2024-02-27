const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const express = require('express');
const geoLocationMiddleware = require('./app/middleware/Geolocation').default;

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.use('/api/protected', geoLocationMiddleware);

    server.all('*', (req, res) => {
        const parsedUrl = parse(req.url, true);
        handle(req, res, parsedUrl);
    });

    const port = process.env.PORT ||
        createServer(server).listen(port, (err) => {
            if (err) throw err;
            console.log(`> Ready on http://localhost:${port}`);
        });
});