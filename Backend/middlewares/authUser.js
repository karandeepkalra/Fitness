import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.json({ success: false, message: 'Not Authorized. Login Again.' });
        }

        const token = authHeader.split(' ')[1];

        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET || 'default_secret_key');
        req.user = tokenDecode;  // Attach user ID to the request object
        next();
    } catch (error) {
        console.log("JWT Verification Error:", error);
        if (error.name === 'TokenExpiredError') {
            return res.json({ success: false, message: 'Token expired. Please log in again.' });
        }
        res.json({ success: false, message: 'Not Authorized. Login Again.' });
    }
};

export default authUser;