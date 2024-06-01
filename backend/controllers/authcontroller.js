const mysql = require('mysql');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

const db = mysql.createConnection({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE
})

const uploadDir = path.join(__dirname, '../uploads');

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage: storage });

exports.uploadSingle = upload.single('resume');

exports.handleUpload = (req, res) => {
    console.log(req.body);
    console.log(req.file);
    res.send('File uploaded successfully');
};


exports.contact = (request, response) => {
    const { firstname, lastname, email, mobilenumber, message } = request.body;
    
    if (!firstname || !lastname || !email || !mobilenumber || !message || !request.file) {
        return response.send(JSON.stringify({ "status": 401, "error": "Form Not Filled", "message": "Please fill the form and upload the file"}));
    }

    const resumeRelativePath = path.relative(__dirname, request.file.path);

    const contactData = { firstname, lastname, email, mobilenumber, message, resume: resumeRelativePath };
            
    db.query('INSERT INTO contacts SET ?', contactData, (error, contactData) => {
        if (error) {
            console.error(error);
            return response.send(JSON.stringify({ "status": 500, "error": "error", "message": "Internal server error"}));
        }
        return response.send(JSON.stringify({ "status": 200, "error": '', "message": "Contact form submitted successfully", "contact": contactData }));
    });      
};

exports.contactlist = (request, response) => {
    db.query('SELECT * FROM contacts', [], (error, contactData) => {
        if (error) {
            response.send(JSON.stringify({"status": '404', "error": error}));
        }else {
            response.send(JSON.stringify({"status": '200', "error":'', "message": contactData}));
        }
    })
}

exports.singlecontactlist = (request, response) => {
    const mobilenumber = request.params.mobilenumber; 
    
    if (!mobilenumber) {
        return response.status(400).json({ status: '400', error: 'Mobile number parameter is missing.' });
    }

    db.query('SELECT * FROM contacts WHERE mobilenumber = ?', [mobilenumber], (error, contactData) => {
        if (error) {
            console.error('Database error: ' + error.message);
            response.status(500).json({ status: '500', error: 'Internal server error' });
        } else if (contactData.length === 0) {
            response.status(404).json({ status: '404', error: 'No contact found with the provided mobile number.' });
        } else {
            response.status(200).json({ status: '200', error: '', message: contactData });
        }
    });
}