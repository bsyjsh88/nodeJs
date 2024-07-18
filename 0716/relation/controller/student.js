const { response } = require('express');
const { Student, Course, StudentCourse } = require('../models');
const studentCourse = require('../models/studentCourse');

// 학생생성
exports.createStudent = async (req, res) => {
    try {
        const { name } = req.body;
        const result = await Student.create({ name });
        res.json({ result: true, response: result });
    } catch(error) {
        console.log(error);
        res.status(500).json({ result: false, message: '서버오류' });
    }
}
// 코스생성
exports.createCouse = async (req, res) => {
    try {
        const { title } = req.body;
        const result = await Course.create({ title });
        res.json({ result: true, response: result });
    } catch(error) {
        console.log(error);
        res.status(500).json({ result: false, message: '서버오류' });
    }
};
// 코스에 학생등록 생성
exports.createSC = async (req, res) => {
    try{
        const { studentId, courseId } = req.body;
        const result = await StudentCourse.create({ studentId, courseId})
        res.json({ result: true, response: result });
    } catch {
        console.log(error);
        res.status(500).json({ result: false, message: '서버오류' });
    }
};
// 학생이 어느코스에 등록되어있는지 가져오기
exports.getStudent = async(req, res) => {
    try {
        const {id} = req.params;
        const result = await Student.findByPk(id, {
            include:[{ model: Course }],
        });
        res.json({result: true, response: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ result: false, message: '서버오류' });
    }
};
// 코스에 어떤학생들이 등록되어있는지 가져오기
exports.getCourse = async(req, res) => {
    try {
        const {id} = req.params;
        const result = await Course.findByPk(id, {
            //through : 명시적 , attributes
            attributes: ['title'],
            include:[{ model: Student,attributes: ['name'], through: {} }],
        });
        res.json({result: true, response: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ result: false, message: '서버오류' });
    }
};
// 삭제
exports.deleteStudent = async (req, res) => {
    try {
        const {id} = req.body;
        await StudentCourse.destroy({where: {studentId: id}});
        await Student.destroy({where: {id }});
        res.json({ result: true });
    } catch (error) {
        console.log(error);
        res.status(500).json({ result: false, message: '서버오류' });
    }
};
exports.deleteCourse = async (req, res) => {
    try {
        const {id} = req.body;
        await StudentCourse.destroy({where: {courseId: id}});
        await Course.destroy({where: {id }});
        res.json({ result: true });
    } catch (error) {
        console.log(error);
        res.status(500).json({ result: false, message: '서버오류' });
    }
};