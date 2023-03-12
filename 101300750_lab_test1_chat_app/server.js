const express = require('express');
const session = require('express-session');

const app = express()
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

// app.use(
//     session({
//         name: 'SESSION_ID',      
//         secret: 'lit(var)',     
//         cookie: {
//             maxAge: 30 * 86400000,
//         }
//     })
// );


app.post('/register', (req,res) => {
    console.log("something")
})



app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});