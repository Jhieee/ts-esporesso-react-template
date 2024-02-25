const express = require('express')
const app = express();
const PORT = process.env.prot || 3001;

app.use('/',  require('./router/index'))

// 기본경로나 /user말고 다른곳 진입했을경우 실행
app.use((req, res, next) => { 
    res.status(404).send('Not Found');
});

app.listen(PORT, () => {
    console.log(`running server on port ${PORT}`)
})