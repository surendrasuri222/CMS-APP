
// const jwt = require('jsonwebtoken');

// // Middleware function to check if user is authenticated
// const checkAuth = (req, res, next) => {
//     // Check if token is present in the Authorization header
//     const token = req.headers.authorization;

//     if (!token) {
//         return res.status(401).json({ message: 'Unauthorized: No token provided' });
//     }

//     try {
//         // Verify token
//         const decoded = jwt.verify(token, 'your-secret-key');

//         // Attach user data to request object for future middleware or routes
//         req.user = decoded;

//         next(); // Call the next middleware or route handler
//     } catch (error) {
//         return res.status(401).json({ message: 'Unauthorized: Invalid token' });
//     }
// };
//

// checkAuth middleware to authenticate and authorize requests
const checkAuth = (req, res, next) => {
    const token = req.headers.authorization.split[""][1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, 'your-secret-key');

        // Attach user data to request object for future middleware or routes
        req.user = decoded;

        next(); // Call the next middleware or route handler
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
};

module.exports = checkAuth;

// Apply checkAuth middleware to protect the "/api/users/add" route
