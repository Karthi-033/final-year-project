const express=require('express');
const cors=require('cors');
const app=express();
const UserModel=require("./model");
const { default: mongoose } = require('mongoose');
app.use(cors());
app.use(express.json());


app.post("/reg", async (req, res) => {
    // Store the data from the request body
    
    const data=new UserModel({
        'name':req.body.Uname,
        'email':req.body.Email,
        'password':req.body.Password
    })

   
  await data.save();

    // Send a response back to the client
    res.json({ message: "Registration successful", userData: data});
    
    // Log the data to the console
    console.log("Received registration data:",data);

});


app.post("/log",(req,res)=>{
    UserModel.findOne({'name':req.body.Uname})
    .then((da)=>{
        if(da===null)
        {
            res.json(null);
        }
        else
        {
       if(da.password===req.body.Password)
       {
        res.json(1);
       }
       else
       {
        res.json(0);
       }
    }
    })
})

// /......................................./

const landSchema = new mongoose.Schema({
  name: String,
  location: String,
  size: Number,
  price: Number,
  description: String,
  contactNumber: String,
  img:String,  // Added contact number field
});

// Create a model
const Land = mongoose.model('Land', landSchema);

// POST route to submit land details
app.post('/api/land', async (req, res) => {
  //console.log(req.body);
  const { name, location, size, price, description, contactNumber} = req.body.landDetails;
const img = req.body.img;
console.log(img);
  const newLand = new Land({
    name,
    location,
    size,
    price,
    description,
    contactNumber, 
    img,
    // Save contact number
  });

  
    await newLand.save();
    console.log(newLand);
    
});

// GET route to fetch all land details
app.get('/api/lands', async (req, res) => {
  try {
    const lands = await Land.find();
    console.log(lands);
    res.json(lands);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching land details' });
  }
});


app.listen(3001,()=>{
    console.log("server is running in port 3001");
})
