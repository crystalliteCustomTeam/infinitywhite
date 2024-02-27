import geoip from 'geoip-lite';

const BLOCKED_COUNTRIES = ['IN', 'PK', 'BD', 'IR', 'VN', 'PH', 'IQ', 'AF', 'KP', 'NP', 'LK', 'RU', 'CN', 'BT'];

export default function geoLocationMiddleware(req, res, next) {
    let ip = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.connection.remoteAddress;

    if (ip && ip.includes(',')) {
        ip = ip.split(',')[0].trim();
    }

    const geo = geoip.lookup(ip);

    if (geo && BLOCKED_COUNTRIES.includes(geo.country)) {
        return res.status(403).send('Access Denied');
    }
    next();
}
