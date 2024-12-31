import jwt from 'jsonwebtoken';

const authUser = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ success: false, message: 'No token provided' });
    }

    const secretKey = process.env.JWT_SECRET || 'default_secret_key';
    const decoded = jwt.verify(token, secretKey);

    req.user = decoded; // Attach the user object to the request
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: 'Invalid token' });
  }
};

export default authUser;


