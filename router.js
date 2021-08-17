const {Router} = require('express');
const router = Router();

const conexion = require('./database/db')

//mostrar los registros
router.get('/detalle', async (req, res) => {
    
     await conexion.query('SELECT * FROM empleado', (error, results)=> {
        if(error){
            throw error;
            
        }else {
            res.render('index.ejs', {results:results.rows});
        };
        
    });
});

//Crear Registro
router.get('/', (req, res) => {
    res.render('home');
});
//Crear Registro
router.get('/crear', (req, res) => {
    res.render('create');
});

//Editar Registros
router.get('/edit/:id', (req, res)=> {
    const id = req.params.id;
conexion.query('SELECT * FROM empleado WHERE id= $1',[id], (error, results)=>{
        if(error){
            throw error; 
        }else {
            res.render('edit', {results:results.rows[0]});
            //console.log(results);
        }
    })

});

//Eliminar Registro
router.get('/delete/:id', (req, res) =>{
    const id = req.params.id;
    conexion.query('DELETE FROM empleado WHERE id = $1',[id], (error, results)=>{
        if(error){
            throw error; 
        }else {
            res.redirect('/detalle');
        }
    })
})

const crud = require('./controllers/crud');
router.post('/save', crud.save);
router.post('/update', crud.update);






module.exports = router;