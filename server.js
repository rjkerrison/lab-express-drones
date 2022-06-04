const app = require("./app");

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 3000
const PORT = process.env.PORT || 3000;
// const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
