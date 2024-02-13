
const checkAuth = (req, res, next) => {
    const token = req.headers.authorization.split[""][1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, 'CMSteam');
        req.user = decoded;

        next(); // Call the next
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
};

module.exports = checkAuth;

