const conexion = require('../database/db');

exports.save = async (req, res) => {
    const id = req.body.id;
    const nombre_persona = req.body.nombre_persona;
    const fecha = req.body.fecha;
    const salario = req.body.salario;
    const nombre_restaurante = req.body.nombre_restaurante;
    const estrellas = req.body.estrellas;

    
    await conexion.query('INSERT INTO empleado (id, nombre_persona, fecha, salario, nombre_restaurante, estrellas) VALUES ($1, $2, $3, $4, $5, $6)', 
    [id, nombre_persona, fecha, salario, nombre_restaurante, estrellas], (error, results)=>{   
        if(error){
            console.log(error);
        }else{
            res.redirect('/detalle');
        }
    })
};

exports.update = (req, res)=>{
    const id = req.body.id;
    const nombre_persona = req.body.nombre_persona;
    const fecha = req.body.fecha;
    const salario = req.body.salario;
    const nombre_restaurante = req.body.nombre_restaurante;
    const estrellas = req.body.estrellas;
    // const ids =req.body.id;
    // const { id, nombre_persona, fecha, salario, nombre_restaurante, estrellas } = req.body;

    conexion.query('UPDATE empleado SET nombre_persona =$2, fecha =$3, salario =$4, nombre_restaurante =$5, estrellas =$6 WHERE id =$1', [id, nombre_persona, fecha, salario, nombre_restaurante, estrellas], (error, results)=>{
        if(error){
            console.log(error);
            
        }else{
            res.redirect('/detalle');
            console.log(results);
        } 
    })
};
