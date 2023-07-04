import dotenv from 'dotenv';
import mysql from 'promise-mysql';

dotenv.config();

const connection = mysql.createConnection({
    host: process.env.DBHOST || "",
    database: process.env.DBNAME || "",
    user: process.env.DBUSER || "",
    password: process.env.DBPASS || "",
    
});



const getConnection = () =>{
    return connection;
}
export default getConnection;
