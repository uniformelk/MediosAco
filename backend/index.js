import  express from "express";
import radioRoutes from "./routes/radioRoutes.js"

const app = express();
app.use(express.json());


app.use('/api/radio', radioRoutes);

app.listen(4000, () =>{
    console.log("Server is running on port 4000");
});

