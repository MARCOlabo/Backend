import pool from '../config/db.js';

const getBooks = async () =>{
    const[rows] = await pool.query("SELECT * FROM tblbook");
    return rows;
}


export default getBooks;