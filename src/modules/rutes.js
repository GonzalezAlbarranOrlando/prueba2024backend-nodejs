const express = require('express');

const answer = require('../network/answers');
const controller = require('./controller');

const router = express.Router();

//users test ok
router.get('/users/select_all', select_all);
router.get('/users/select_boolean_status_active', select_boolean_status_active);
router.get('/users/select_boolean_status_inactive', select_boolean_status_inactive);
router.get('/users/id/:id', select_id);
router.post('/users/add', add);
router.post('/users/update', update);
router.post('/users/update_boolean_status', update_boolean_status);
router.put('/users/delete_physically', delete_physically);
//evaluations
router.get('/evaluations/select_all', select_all);
router.get('/evaluations/select_boolean_status_active', select_boolean_status_active);
router.get('/evaluations/select_boolean_status_inactive', select_boolean_status_inactive);
router.get('/evaluations/id/:id', select_id);
router.post('/evaluations/add', add);
router.post('/evaluations/update', update);
router.post('/evaluations/update_boolean_status', update_boolean_status);
router.put('/evaluations/delete_physically', delete_physically);
//files test ok
router.get('/files/select_all', select_all);
router.get('/files/select_boolean_status_active', select_boolean_status_active);
router.get('/files/select_boolean_status_inactive', select_boolean_status_inactive);
router.get('/files/id/:id', select_id);
router.post('/files/add', add);
router.post('/files/update', update);
router.post('/files/update_boolean_status', update_boolean_status);
router.put('/files/delete_physically', delete_physically);
//questions
router.get('/questions/select_all', select_all);
router.get('/questions/select_boolean_status_active', select_boolean_status_active);
router.get('/questions/select_boolean_status_inactive', select_boolean_status_inactive);
router.get('/questions/id/:id', select_id);
router.post('/questions/add', add);
router.post('/questions/update', update);
router.post('/questions/update_boolean_status', update_boolean_status);
router.put('/questions/delete_physically', delete_physically);
//sections
router.get('/sections/select_all', select_all);
router.get('/sections/select_boolean_status_active', select_boolean_status_active);
router.get('/sections/select_boolean_status_inactive', select_boolean_status_inactive);
router.get('/sections/id/:id', select_id);
router.post('/sections/add', add);
router.post('/sections/update', update);
router.post('/sections/update_boolean_status', update_boolean_status);
router.put('/sections/delete_physically', delete_physically);
//user_questions
router.get('/user_questions/select_all', select_all);
router.get('/user_questions/select_boolean_status_active', select_boolean_status_active);
router.get('/user_questions/select_boolean_status_inactive', select_boolean_status_inactive);
router.get('/user_questions/id/:id', select_id);
router.post('/user_questions/add', add);
router.post('/user_questions/update', update);
router.post('/user_questions/update_boolean_status', update_boolean_status);
router.put('/user_questions/delete_physically', delete_physically);

async function select_all(req, res){
    try{
        const items = await controller.select_all(req.url.split("/")[1]);
        answer.success(req, res, items, 200);
    }catch(err){
        answer.error(req, res, err, 500);
    }
};

async function select_boolean_status_active(req, res){
    try{
        const items = await controller.select_boolean_status_active(req.url.split("/")[1]);
        answer.success(req, res, items, 200);
    }catch(err){
        answer.error(req, res, err, 500);
    }
};

async function select_boolean_status_inactive(req, res){
    try{
        const items = await controller.select_boolean_status_inactive(req.url.split("/")[1]);
        answer.success(req, res, items, 200);
    }catch(err){
        answer.error(req, res, err, 500);
    }
};

async function select_id (req, res){
    try{
        const items = await controller.select_id(req.url.split("/")[1], req.params.id);
        answer.success(req, res, items, 200);
    }catch(err){
        answer.error(req, res, err, 500);
    }
};

async function add (req, res){
    try{
        await controller.add(req.url.split("/")[1], req.body);
        answer.success(req, res, '[add query]: success!!!', 201);
    }catch(err){
        answer.error(req, res, err, 500);
    }
};

async function update (req, res){
    try{
        await controller.update(req.url.split("/")[1], req.body);
        answer.success(req, res, '[update query]: success!!!', 201);
    }catch(err){
        answer.error(req, res, err, 500);
    }
};

async function delete_physically (req, res){
    try{
        await controller.delete_physically(req.url.split("/")[1], req.body);
        answer.success(req, res, '[delete_physically query]: success!!!', 200);
    }catch(err){
        answer.error(req, res, err, 500);
    }
};

async function update_boolean_status (req, res){
    try{
        await controller.update_boolean_status(req.url.split("/")[1], req.body);
        answer.success(req, res, '[update_boolean_status query]: success!!!', 200);
    }catch(err){
        answer.error(req, res, err, 500);
    }
};

module.exports = router;