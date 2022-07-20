const express = require('express');
const app = express();


app.set('port', 3001);


app.listen(app.get('port'), ()=> {
    console.clear();
    console.log('Server on', app.get('port'));
})