// import jwt from 'jsonwebtoken';

// const authUser = (req, res, next) => {
//   try {
//     const token = req.headers.authorization?.split(' ')[1];
//     if (!token) {
//       return res.status(401).json({ success: false, message: 'No token provided' });
//     }

//     const secretKey = process.env.JWT_SECRET || 'default_secret_key';
//     const decoded = jwt.verify(token, secretKey);

//     req.user = decoded; // Attach the user object to the request
//     next();
//   } catch (error) {
//     res.status(401).json({ success: false, message: 'Invalid token' });
//   }
// };

// export default authUser;




// import jwt from 'jsonwebtoken';
// import UserModel from '../models/UserModel.js';

// const authUser = async (req, res, next) => {
//   try {
//     const authHeader = req.headers.authorization;
    
//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//       return res.status(401).json({ 
//         success: false, 
//         message: 'Authorization header missing or invalid format' 
//       });
//     }

//     const token = authHeader.split(' ')[1];
    
//     if (!token) {
//       return res.status(401).json({ 
//         success: false, 
//         message: 'No token provided' 
//       });
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default_secret_key');
//     const user = await UserModel.findById(decoded.id);

//     if (!user) {
//       return res.status(401).json({ 
//         success: false, 
//         message: 'User not found' 
//       });
//     }

//     req.user = user;
//     next();
//   } catch (error) {
//     console.error('Auth error:', error);
//     return res.status(401).json({ 
//       success: false, 
//       message: 'Invalid or expired token' 
//     });
//   }
// };

// export default authUser;



// import jwt from 'jsonwebtoken';

// const authUser = async (req, res, next) => {
//  try {
//    // Log the full headers to debug
//    console.log('Request headers:', req.headers);

//    const authHeader = req.headers.authorization;
//    console.log('Auth header:', authHeader); // Debug auth header

//    if (!authHeader || !authHeader.startsWith('Bearer ')) {
//      return res.status(401).json({
//        success: false,
//        message: 'No token provided or invalid format'
//      });
//    }

//    const token = authHeader.split(' ')[1];
//    console.log('Extracted token:', token); // Debug token 

//    if (!token) {
//      return res.status(401).json({
//        success: false,
//        message: 'No token found'
//      });
//    }

//    try {
//      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default_secret_key');
//      console.log('Decoded token:', decoded); // Debug decoded token
//      req.user = decoded;
//      next();
//    } catch (error) {
//      console.error('Token verification error:', error);
//      return res.status(401).json({
//        success: false,
//        message: 'Invalid or expired token'
//      });
//    }
//  } catch (error) {
//    console.error('Auth middleware error:', error);
//    return res.status(500).json({
//      success: false, 
//      message: 'Authentication error'
//    });
//  }
// };

// export default authUser;



import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
  try {
    // Log the full headers to debug
    console.log('Request headers:', req.headers);

    const authHeader = req.headers.authorization;
    console.log('Auth header:', authHeader); // Debug auth header

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'No token provided or invalid format'
      });
    }

    const token = authHeader.split(' ')[1];
    console.log('Extracted token:', token); // Debug token

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'No token found'
      });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default_secret_key');
      console.log('Decoded token:', decoded); // Debug decoded token
      req.user = decoded;
      next();
    } catch (error) {
      console.error('Token verification error:', error);
      return res.status(401).json({
        success: false,
        message: 'Invalid or expired token'
      });
    }
  } catch (error) {
    console.error('Auth middleware error:', error);
    return res.status(500).json({
      success: false,
      message: 'Authentication error'
    });
  }
};

export default authUser;
