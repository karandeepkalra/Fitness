
import {v2 as cloudinary} from 'cloudinary'

const connectCloudinary = () => {
    try {
        const config = cloudinary.config({
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_SECRET_KEY,
            secure: true
        });

        // Verify configuration
        if (!config.cloud_name || !config.api_key || !config.api_secret) {
            throw new Error('Missing Cloudinary credentials');
        }

        console.log('Cloudinary configured successfully');
    } catch (error) {
        console.error('Cloudinary configuration error:', error);
        throw error;
    }
};

export default connectCloudinary;