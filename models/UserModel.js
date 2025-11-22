import pool from "../config/db.js";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const createUser = async (name, email, password) => {
    if (name.trim() === '' ||
    email.trim() === '' ||
    password.trim() === ''){
        const error = new TypeError(
            'Name, Email and Password are required.'

        )
        error.statusCode = 400;
        throw error;
    }
    if(!validator.isEmail(email)){
        const error = new TypeError('Invalid Email Address.')
        error.statusCode = 400;
        throw error;
        
    }
        if(!validator.isStrongPassword(password)){
        const error = new TypeError('Password is not strong enough.')
        error.statusCode = 400;
        throw error;
        }

    const [user] = await pool.query(
       "SELECT email FROM tbluser WHERE email = ?", [email]
    );

        if(user.length === 1 ){
        const error = new Error(`The email ${email} is already used.`)
        error.statusCode = 400;
        throw error;
        }


    const salt = await bcrypt.genSalt(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const [newUser] = await pool.query(
        "INSERT INTO tbluser (name, email, password) VALUES(?,?,?)",
        [name, email, hashedPassword]

    );

    return { id: newUser.insertId, name, email };

    
}

export const login = async (email, password) =>{
    if (email.trim() === '' || password.trim() === ''){
    const error = new Error('Email and password is recquired.')
        error.statusCode = 400;
        throw error;
}

const [user] = await pool.query(
    "SELECT * FROM tbluser WHERE email = ?", [email]);
   
if(user.length === 0){
    const error = new Error(`An account with the email: ${email} does not exist.`)
    error.statusCode = 400;
    throw error;
}

if(bcrypt.compareSync(password, user[0].Password)){
    const error = new Error('Incorrect password.')
    error.statusCode = 400;
    throw error;
    
}
//generate token
const token = jwt.sign(
    {id: user[0].id},
    process.env.SECRET,
    {expiresIn: 'id'});
return token;
}

export const getUser = async (id) =>{
    if (parseInt(id) === NaN){
        throw new Error('Invalid Id');

    }
    const [user] = await pool.query('SELECT * FROM tbluser WHERE id = ?', [id]);
    return user;
}
