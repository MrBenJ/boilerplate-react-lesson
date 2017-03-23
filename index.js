let express = require('express');
const path = require('path');
let app = express();

// Port to send stuff to
let PORT = 3000;

function getTemplate(template) {
    return path.join(__dirname, `views/${template}.html`);
}

// Deliver static files
app.use(express.static('dist'));

app.get('/', (req,res) => {
    res.sendFile(getTemplate('index'));
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
