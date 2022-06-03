const express = require('express');
const multer =require('multer')
const fs = require('fs')

const router = express.Router();

const upload = multer({
    dest:'./temp'
})

router.post('/upload',upload.single('file'), function (req,res){
        const fileInfo = req.file;
        const oldFileName = fileInfo.path;
        const newFileName = `./public/images/${fileInfo.originalname}`;
        fs.renameSync(oldFileName,newFileName);
        
        res.status(201).header('Location',`images/${fileInfo.originalname}`).end(); 
       
       
})



module.exports = router;

