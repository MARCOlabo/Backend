import * as StudentModel from "../models/StudentModels.js";

export const fetchStudents = async (req, res) => {
    try {
        const students = await StudentModel.getStudents();
        res.status(200).json({ success: true, data: students });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};


export const createStudent = async (req, res) => {
    const { name, age, course } = req.body;

    try {
        const studentId = await StudentModel.insertStudent(name, age, course);
        res.status(201).json({ success: true, data: studentId });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};


export const editStudent = async (req, res) => {
    const { name, age, course } = req.body;
    const { studentId } = req.params;

    try {
        const updatedId = await StudentModel.updateStudent(name, age, course, studentId);
        res.status(200).json({ success: true, data: updatedId });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};


export const removeStudent = async (req, res) => {
    const { studentId } = req.params;

    try {
        const deletedId = await StudentModel.deleteStudent(studentId);
        res.status(200).json({ success: true, data: deletedId });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};
