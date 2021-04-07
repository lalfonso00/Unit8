let express = require('express');
let app = express();

let path = require('path');


app.use(express.static('public'));

let paths = [__dirname, 'public/pages'];



let coworkers = ['Aggretsuko', 'Fenneko', 'Haida', 'Tsunoda', 'Kabae'];
let friends = { Kiiroitori: {
type:'bird',
description:'hard worker' },
Rilakkuma: {
type:'bear', description:'likes to relax'
}, Korilakkuma:{
type:'bear',
description:'has a big imagination' }};



app.get('/', (req,res)=>{
res.sendFile(path.join(...paths, 'index.html'));
});

app.get(['/contact', '/contact-us'] , (req, res) =>{
    res.sendFile(path.join(...paths, 'contact.html'));
});

app.get('/home', (req,res) =>{
     res.redirect(301, '/index.html') });
     
app.get('/about', (req,res)=>{
res.sendFile(path.join(...paths, 'about.html'));
});

app.get('/characters/coworkers', (req,res)=>{
res.send(coworkers);
});

app.get('/characters/friends', (req,res)=>{
res.send(friends);
});

app.get('*', (req, res) =>{
   res.status(404).sendFile(path.join(__dirname, 'public/pages', '404.html'));
});





app.set('port', 8080);

const server = app.listen(app.get('port'), () => {
    console.log("Listening on ", app.get('port'));
});



