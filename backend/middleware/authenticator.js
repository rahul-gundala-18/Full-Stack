import jwt from 'jsonwebtoken';

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Access Denied: No Token Provided' });
    }

    try {
        // Verify token using the secret key
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach user payload to the request object
        next(); // Move to the next middleware/route handler
    } catch (error) {
        return res.status(403).json({ message: 'Invalid or Expired Token' });
    }
};

export { authenticateToken };