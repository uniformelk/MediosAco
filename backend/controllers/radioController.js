import getConnection from "../config/db.js"

const consulta = async (req, res) =>{
    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM tarifa_acomedios_2023 limit 30');
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

const addRegistro = async (req, res) => {
    try {
        const {departamento, municipio, emisoras, cuna30, cuna20, cuna15, cuna10} = req.body;
        const resgistro = {departamento, municipio, emisoras, cuna30, cuna20, cuna15, cuna10}
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO tarifa_acomedios_2023 SET ?", resgistro)
        res.send(result);
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

const consultaUnica = async (req, res) =>{
    try {
        const {id} = req.params;
        console.log(id)
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM tarifa_acomedios_2023 WHERE departamento = ?', id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

export {consulta, addRegistro, consultaUnica}