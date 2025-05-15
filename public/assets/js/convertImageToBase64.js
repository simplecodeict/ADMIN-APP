const fs = require('fs');

const filePath = '../images/logo_s.png';
const base64String = fs.readFileSync(filePath, 'base64');
console.log(base64String);