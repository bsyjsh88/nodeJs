const { Op } = require('sequelize');
const { Post } = require('../models');

// 전체글 조회
const all = async(req, res) =>{
    const result = await Post.findAll({
        // attributes: 원하는 컴럼 조회
        attributes: ['id', 'title', 'content', 'createdAt'],
        // Op.lte(이하), Op.gte(이상), Op.gt(초과), Op.lt(미만)
        // Op.or(또는), Op.ne(같지않음), Op.in(배열요소중 하나), 
        // Op,notIn(배열요소와 모두 다름)
        // where: { id: { [Op.gte]: 3 }},
        // where: {[Op.or]: [{id: 4}, {title: '내용내용내용내용내용'}]},
        order: [["id", "desc"]],
        // limit: 2,
        // offset: 1,
    });
    console.log('all', result);
    res.json({ result: true, data: result });
}
// 글하나 생성
const write = async(req, res) => {
    // req.body.title, req.body.content
    const {title, content } = req.body;

    // insert into post (title, content) values (title, content)
    const result = await Post.create({title, content});
    res.json({result: true, data: result.id });
    console.log("write", result);
};
// 글하나 조회
const one = async (req, res) => {
    console.log(req.params.id);
    const result = await Post.findOne({ where : { id: req.params.id }});
    console.log('one', result);
    res.json({result: true, data: result});
};
// 글하나 수정
const updateFunc = async (req, res) => {
    // req.body.id, req.body.title, req.body.content
    const {id, title, content} = req.body;
    // update({수정할 값}, {어떤것을});
    const result = await Post.update({title, content},{ where: { id }});
    console.log('update', result);
    res.json({result: true});
};
// 글하나 삭제
const deleteFunc = async(req, res) => {
    const result = await Post.destroy({ where: {id:req.body.id} });
    console.log('delete', result);
    if(result) {
        res.json({ result: true});
    } else {
        res.json({ result: false });
    }
    // res.json({ result: true, data: result})
};

module.exports = { all, write, one, updateFunc, deleteFunc};