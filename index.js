
// declaracion de las varibles  que se van a utilizar con las librerias express   y mongoose

const express = require('express');

const mongoose= require('mongoose');

// conectando la base de datos de la cuenta de MongoDB CollectionNamespace.atlas

mongoose.connect('mongodb+srv://camilomanco2005:v6ZWgy5WkuGWDl5P@camilo.lfzjq3i.mongodb.net/');

// generando variable global de conetion con mongoose.connections
const db= mongoose.connection;

// verificando datos en la dat no obligatorio

db.on('error', console.error.bind(console,'conetion error'));

// creando la funtion con la propiedad db,once qu va a contener toda la informacion sobre las cdiferentes consultas a la database y usando funtiones asincronas

// db.once utliza la propiedad open mas la funtion global de conetion par funcionar
db.once('open', function () {
    // mensaje que se mostrara en la consola como guia de que el puerto y la conetion a sido exitosa
    console.log('conected')

    // creacion de un nuevo eschema con mongoose  la cual tiene algunos parametros que serena utilizados mas adelante y que son de type string
    
    // el esquema  se puede llamar con el nombre cualquiera peo lo recomendado es que tenga relacion con  lo que se quiere realizar
//    ademas de esto para crearlo se debe usar la propiedad mongoose.schema

    const userSchema = mongoose.Schema({
        nombre:{type: String},
        apellido:{type: String},
        edad :{type: String},
        diretion :{type:String}
        
    })
    
    // creacion de constantes  conla informacion principal que referencia las bases de datos  y utiliza el eschema antes creado  en este caso tenemos dos constantes que nos retornan la base de datos de companies y la de users las cuales seran utilizadas mas adelante para las consultas
    // const users
    const User = mongoose.model('users',userSchema);
    // const company
    const company = mongoose.model('companies',userSchema);

    // creando la constante const app = express() que se ra la que conecta con la libreria express y nos permite usar los metodos get con app
    const app = express();
    // tranformar la variable para que retorne como formato json
    app.use(express.json());

    // creacion de las funciones con el method get  mas funciones asincronas  para generar las consultas el nombre de la ruta entre comillas no tiene que ser estritamnete igual  a la consulta o base de datos que se esta utilizando pero lo recomendable es que  tengan relacion
    
    // 1 Listado de todos los usuarios.
    app.get('/api/pepe', async (req, res)=> {
        // const users = await User.find();
        // res.json(users);
        try {
            const users = await User.find();
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: 'Conexión exitosa al puerto 3000, consulta realizada: /api/pepe',
                data: users
            });
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: 'Hubo un error al realizar la consulta /api/pepe',
                error: error.message
            });
        }
        
    })

     // 2 listado de solo 10 usuarios.
    app.get('/api/tenusers', async (req, res)=> {
        
        try {
            // res.json(users);
            // const users = await User.find();
            const users = await User.find().limit(10);
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: 'Conexión exitosa al puerto 3000, consulta realizada: /api/tenusers',
                data: users
            });
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: 'Hubo un error al realizar la consulta /api/tenusers',
                error: error.message
            });
        }
        

    })


     // 3 listado de todas las empresas
    app.get('/api/company', async (req, res)=> {
        // const users = await company.find();
        // res.json(users);

        try {
            const users = await company.find();
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: 'Conexión exitosa al puerto 3000, consulta realizada: /api/company',
                data: users
            });

        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: 'Hubo un error al realizar la consulta /api/company',
                error: error.message
            });
        }
    })


     // 4 listado de usuarios que sean de la empresa id 5
    app.get('/api/users/id', async (req, res)=> {
        // const users = await User.find({empresa_id:5});
        // res.json(users);
        try {
            const users = await User.find({empresa_id:5});
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: 'Conexión exitosa al puerto 3000, consulta realizada: /api/users/id',
                data: users
            });
            
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: 'Hubo un error al realizar la consulta /api/users/id',
                error: error.message
            });
            
        }       
    })


     // 5 listado de usuarios que sean de Bangladesh
    app.get('/api/users/banglades', async (req, res)=> {
        // const users = await User.find({pais:'Bangladesh'});
        // res.json(users);
        try {
            const users = await User.find({pais:'Bangladesh'});
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: 'Conexión exitosa al puerto 3000, consulta realizada: /api/users/banglades',
                data: users
            });
            
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: 'Hubo un error al realizar la consulta /api/users/banglades',
                error: error.message
            });
            
        }
    })


     // 6 listado de users de la ciudad de Bangladesh
    app.get('/api/users/banglades/city', async (req, res)=> {
        // const users = await User.find({ciudad:'Bangladesh'});
        // res.json(users);
        try {
            const users = await User.find({ciudad:'Bangladesh'});
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: 'Conexión exitosa al puerto 3000, consulta realizada: /api/users/banglades/city',
                data: users
            });
            
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: 'Hubo un error al realizar la consulta /api/users/banglades/city',
                error: error.message
            });
            
        }
    })

     //  lista eempresas de la ciudad de Bangladesh
    app.get('/api/users/banglades/city/two', async (req, res)=> {
        // const users = await User.find({ciudad:'New Adela'});
        // res.json(users);
        try {
            const users = await company.find({ciudad:'Bangladesh'});
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: 'Conexión exitosa al puerto 3000, consulta realizada: /api/users/banglades/city/two',
                data: users
            });
            
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: 'Hubo un error al realizar la consulta /api/users/banglades/city/two',
                error: error.message
            
            });
            
        }
    })
    

     // 8 ejemplo de como podria ser el method post para crear un nuevo user en la database
    app.post('/api/users', async (req, res)=> {

        // try cacht method post
        try {
            const user = new User({
                nombre:req.body.nombre,
                apellido:req.body.apellido,
                edad:req.body.edad,
                diretion:req.body.diretion,
                empresa_id:req.body.empresa_id,
                pais:req.body.pais,
                ciudad:req.body.ciudad,
                direccion:req.body.direccion,
                telefono:req.body.telefono,
                correo:req.body.correo
            })
            await user.save();
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: 'Conexión exitosa al puerto 3000, consulta realizada: /api/users',
                data: user
            });
            
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: 'Hubo un error al realizar la consulta /api/users',
                error: error.message
            });
            
        }
    })


   // app.linten es una funcion con unmetodo que se utiliza para referenciar el metodo el cual puede ser otro puerto pero por ahora lo recomendable es usar el puerto 3000
    app.listen(3000, ()=>{
        console.log('servidor en el puerto 3000');
    })
})