import express from 'express';

const app = express();

app.use(express.json());

const PORT = 5000;

let allUsers = [];

app.post('/user',(req, res)=>{
    const{first_name, last_name, date_of_birth, school} = req.body;
    allUsers.push({
        "first_name":first_name,
        "last_name": last_name,
        "date_of_birth": date_of_birth,
        "school":school
    }) 
    res.send('User has been created')
});

app.get('/users', (req, res) =>{
    res.send(allUsers)
});

app.listen(PORT, ()=> console.log("Server is up and running"));