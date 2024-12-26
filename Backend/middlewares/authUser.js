// import jwt from 'jsonwebtoken';

// const authUser = async (req, res, next) => {
//     try {
//         const authHeader = req.headers.authorization;

//         if (!authHeader || !authHeader.startsWith('Bearer ')) {
//             return res.json({ success: false, message: 'Not Authorized. Login Again.' });
//         }

//         const token = authHeader.split(' ')[1];

//         const tokenDecode = jwt.verify(token, process.env.JWT_SECRET || 'default_secret_key');
//         req.user = tokenDecode;  // Attach user ID to the request object
//         next();
//     } catch (error) {
//         console.log("JWT Verification Error:", error);
//         if (error.name === 'TokenExpiredError') {
//             return res.json({ success: false, message: 'Token expired. Please log in again.' });
//         }
//         res.json({ success: false, message: 'Not Authorized. Login Again.' });
//     }
// };

// export default authUser;


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