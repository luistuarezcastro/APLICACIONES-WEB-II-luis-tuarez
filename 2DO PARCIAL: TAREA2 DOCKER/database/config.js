const  mongoose =  require('mongoose');


const dbConnection = async ()=>{

    try{
        await mongoose.connect( process.env.CNN_MONGO);
        console.log('Base de datos funcionando correctamente')
    }
    catch(error){
        console.log(error);
        throw new Error('Error al conectarse con la base de datos')
    }

}
module.exports = {
    dbConnection
}