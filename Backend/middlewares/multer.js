// correct working code
// import multer from 'multer';
// import path from 'path';
// import fs from 'fs';
// import { fileURLToPath } from 'url';

// // Get current file and directory paths
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Define uploads directory path
// const uploadsDir = path.join(__dirname, '../TutorImages');

// // Create uploads directory if it doesn't exist
// fs.mkdirSync(uploadsDir, { recursive: true });

// // Configure storage
// const storage = multer.diskStorage({
//     destination: function(req, file, callback) {
//         callback(null, uploadsDir);
//     },
//     filename: function(req, file, callback) {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//         callback(null, uniqueSuffix + path.extname(file.originalname));
//     }
// });

// // File filter to allow only images
// const fileFilter = (req, file, callback) => {
//     const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    
//     if (allowedMimeTypes.includes(file.mimetype)) {
//         callback(null, true);
//     } else {
//         callback(new Error('Invalid file type. Only JPEG, PNG, GIF and WebP images are allowed.'), false);
//     }
// };

// // Create multer instance with configuration
// const upload = multer({
//     storage: storage,
//     fileFilter: fileFilter,
//     limits: {
//         fileSize: 5 * 1024 * 1024, // 5MB limit
//         files: 1 // Only allow 1 file per request
//     }
// });

// export default upload;


import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Make sure this directory exists
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only images are allowed'));
    }
  }
});

export default upload;