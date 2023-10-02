//1 - configuração do acesso
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/escola', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 20000
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Falha na conexão!!!'));
db.once('open', ()=>{
    console.log("Conectado com sucesso!!!");
});

//2 - criando o schema
const usuariosSchema = new mongoose.Schema({
    email: String,
    senha: String
});

//3 - criando a model(o nome da collection no mongodb)
const Usuarios = mongoose.model('Usuarios', usuariosSchema);

//4 - cadastrando vários dados com insertMany
Usuarios.insertMany([
    {email: 'lora@gmail.com', senha: 'Lora1234'},
    {email: 'maria@gmail.com', senha: 'Maria5678'}
]);

async function findUsuarios(){
    try{
        const usuarios = await Usuarios.find({});
        console.log('Usuarios: ', usuarios);
    }
    catch(error){
        console.error('Usuarios não encontrados: ', error);
    }
}
findUsuarios();