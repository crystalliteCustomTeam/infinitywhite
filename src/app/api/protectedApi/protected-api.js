import geoLocationMiddleware from "../../app/middleware/Geolocation";

export default function handler(req, res) {
    geoLocationMiddleware(req, res, () => {
        res.status(200).json({ message: 'Protected API endpoint' });
    });
}