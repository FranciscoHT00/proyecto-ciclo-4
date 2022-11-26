const bcrypt = require("bcryptjs");
const { restart } = require("nodemon");
const User = require("../models/user");
const jwt = require("../utils/jwt");

function register (req, res){
    const {firstname, lastname, email, password} = req.body;
    //console.log (req.body);

    if(!email) res.status(400).send({msg: "El email es obligatorio"});
    if(!password) res.status(400).send({msg: "La contraseña es obligatoria"});

    const user = new User ({
        firstname,
        lastname,   
        email: email.toLowerCase(),
        role: "user",
        active: false
    });

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    user.password = hashPassword;

    // console.log(password);
    //console.log(hashPassword);
    //console.log(user);
    //res.status(200).send({msg: "TODO OK"});

    user.save((error, userStorage) => {
        if(error){
            res.status(400).send({msg: "Error al crear usuario"});
        } else {
            res.status(200).send(userStorage);
        }
    })
}

function login(req, res) {
    const { email, password} = req.body;

    if (!email) res.status(400).send({msg: "El email es obligatorio"});
    if (!password) res.status(400).send({msg: "La constraseña es obligatoria"});

    const emailLowerCase = email.toLowerCase();

    User.findOne({ email: emailLowerCase}, (error, userStore) => {
        if(error){
            res.status(500).send({msg: "Error del servidor"});
        }else{
           // console.log("Password", password);
           // console.log(userStorage);
           bcrypt.compare(password, userStore.password, (bcryptError, check) => {
            if(bcryptError){
                res.status(500).send({ msg: "Error del servidor"});
            } else if (!check){
                res.status(400).send({ msg: "La contraseña es incorrecta"});
            } else if (!userStore.active){
                res.status(401).send({msg: "Usuario no activo"})
            } else {
                res.status(200).send({
                    access: jwt.createAccessToken(userStore),
                    refresh: jwt.createRefreshToken(userStore),
                });
            }
           });
        }
    } );
}

function refreshAccessToken(req,res){
    const { token } = req.body;

    if(!token) res.status(400).send({msg:"Token requerido"});

    const {user_id} = jwt.decoded(token);

    console.log(user_id);

    User.findOne({_id: user_id },(error, userStorage) => {
        if(error){
            res.status(500).send({msg: "Error del servidor"});
        }else{
            res.status(200).send({
            accessToken: jwt.createAccessToken(userStorage),
            })
        }
    });
}

module.exports  = {
    register,
    login,
    refreshAccessToken
};