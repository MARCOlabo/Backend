import getBooks from '../models/BookModels.js'
export const fetchBooks = async (req, res) =>{
    try{
        const books = await getBooks();
        res.status(200).json({sucess: true, message: books});

    }catch(e){
        console.log(e);
        res.status(500).json({
            sucess: false,
            message: "Internal Server Error"

        })
    }
}
