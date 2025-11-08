import { getStudent } from "../models/StudentModels.js";
export const fetchStudent = async (req, res) =>{
    try{
        const student = await getStudent();
        res.status(200).json({sucess: true, message: student});

    }catch(e){
        console.log(e);
        res.status(500).json({
            sucess: false,
            message: "Internal Server Error"

        })
    }
}