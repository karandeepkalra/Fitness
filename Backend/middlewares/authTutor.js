import jwt from 'jsonwebtoken';

const authTutor = (req, res, next) => {
  try {
    const Ttoken = req.headers.authorization?.split(' ')[1];
    if (!Ttoken) {
      return res.status(401).json({ success: false, message: 'No token provided' });
    }

    const secretKey = process.env.JWT_SECRET || 'default_secret_key';
    const decoded = jwt.verify(Ttoken, secretKey);

    req.body.tutId = decoded.id; // Attach the user object to the request
    next();

  } catch (error) {
    res.status(401).json({ success: false, message: 'Invalid token' });
  }
};

export default authTutor;