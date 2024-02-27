import geoip from 'geoip-lite';

const BLOCKED_COUNTRY = 'PK';

export default function geoLocationMiddleware(req, res, next) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const geo = geoip.lookup(ip);

    if (geo && geo.country === BLOCKED_COUNTRY) {
        return res.status(403).send('Access Denied');
    }
    next();
}