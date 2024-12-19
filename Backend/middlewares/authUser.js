import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.json({ success: false, message: 'Not Authorized. Login Again.' });
        }

        const token = authHeader.split(' ')[1]; // Extract token after "Bearer"
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET || 'default_secret_key');
        req.body.userId = tokenDecode.id; // Attach user ID to the request body
        next();
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export default authUser;
