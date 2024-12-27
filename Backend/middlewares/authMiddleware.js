// import jwt from 'jsonwebtoken';

// // Middleware to check if the user is authenticated
// export const verifyToken = (req, res, next) => {
//   const token = req.headers['authorization'];  // Token usually sent in the Authorization header

//   if (!token) {
//     return res.status(403).json({ message: 'Access denied. No token provided.' });
//   }

//   // Verify the token using a secret key (e.g., stored in .env)
//   jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//     if (err) {
//       return res.status(403).json({ message: 'Invalid or expired token.' });
//     }

//     // Attach the decoded user info to the request object for further use in the route
//     req.user = decoded;  
//     next();  // Move to the next middleware or route handler
//   });
// };


// import jwt from 'jsonwebtoken';

//  const authMiddleware = (req, res, next) => {
//   const token = req.headers['authorization']?.split(' ')[1]; // Get token from Authorization header
//   if (!token) {
//     return res.status(403).json({ message: 'No token provided' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY); // Verify the token
//     req.user = decoded; // Attach decoded user to the request
//     next(); // Proceed to the next middleware/route
//   } catch (err) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }
// };
// export default authMiddleware;

import jwt from 'jsonwebtoken';

 const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Get token from Authorization header
  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY); // Verify the token
    req.user = decoded; // Attach decoded user to the request
    next(); // Proceed to the next middleware/route
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};
export default authMiddleware;
