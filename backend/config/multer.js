const Multer = require( 'multer' );
const path=require('path')
const multer = Multer(  {
    storage: Multer.diskStorage( {
        destination: ( req, file, callback ) => {
            callback( null, './server/public/uploads/profilePics' );
        },
        filename: ( req, file, callback ) => {
            callback( null,  Date.now() +'-'+file.originalname );
        },
    }),
    fileFilter: ( req, file, callback ) => {

        if ( file.mimetype === 'image/png' || file.mimetype === 'image/jpg'|| file.mimetype === 'image/jpeg' ) {
            callback(null , true)
        } else {
            callback( null, false )
        }
    },
    limits: {fileSize: 2*1024*1024}
});

module.exports = multer;