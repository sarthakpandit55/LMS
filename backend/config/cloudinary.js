import {v2 as cloudinary} from "cloudinary"


import fs from "fs"

const uploadOnCloudinary = async(filePath) =>{
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    
    })
    
    try {
        if(!filePath){
            console.log("No file path provided to uploadOnCloudinary")
            return null
        }
        
        if(!fs.existsSync(filePath)){
            console.log("File does not exist at path:", filePath)
            return null
        }
        
        console.log("Uploading file to Cloudinary:", filePath)
        
        // Determine resource type based on file extension
        const ext = filePath.toLowerCase().split('.').pop()
        const isVideo = ['mp4', 'avi', 'mov', 'mkv', 'webm', 'flv', 'wmv', 'webm'].includes(ext)
        const isImage = ['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext)
        
        const resourceType = isVideo ? 'video' : isImage ? 'image' : 'auto'
        console.log(`File type detected: ${resourceType} (extension: ${ext})`)
        
        const uploadResult = await cloudinary.uploader.upload(filePath, {
            resource_type: resourceType,
            folder: "lms_videos",
            timeout: 120000
        })

        console.log("Upload successful!")
        console.log("URL:", uploadResult.secure_url)
        console.log("Public ID:", uploadResult.public_id)
        
        // Delete file after successful upload
        fs.unlinkSync(filePath)

        return uploadResult.secure_url
    } catch (error) {
        console.error("Cloudinary upload error:", error)
        if(filePath && fs.existsSync(filePath)){
            try {
                fs.unlinkSync(filePath)
            } catch(e) {
                console.log("Could not delete temp file:", e)
            }
        }
        return null
    }
}

export default uploadOnCloudinary