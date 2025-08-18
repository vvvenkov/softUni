import url from 'url'; // Core nodejs module
import querystring from 'querystring'; // Core nodejs module

const urlText = 'https://en.wikipedia.org/wiki/Node.js#Package_management';

// Legacy method 
const parsedUrl = url.parse(urlText);
console.log(parsedUrl);

// JS Way
const parsedUrl2 = new URL(urlText) // Standard JS Library
console.log(parsedUrl2);

const urlWithQueryString = 'https://www.google.com/search?q=nodejs&oq=nodejs&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDIGCAEQRRg8MgwIAhAjGCcYgAQYigUyBggDEEUYPDIGCAQQRRg8MgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEIMTI4M2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8';

// Legacy way
const parsedUrl3 = url.parse(urlWithQueryString);
const parsedUrl3QueryString = querystring.parse(parsedUrl3.query);
console.log(parsedUrl3QueryString)

// The new JS way
const  parsedUrl4 = new URLSearchParams(parsedUrl3.query);
console.log(parsedUrl4);
