var express = require('express');
var router = express.Router();
var emp = require('../models/employee');


router.post('/', async function (req, res) {
  let bodyData = req.body;
  if (bodyData.empId === null || bodyData.empId === undefined || bodyData.empId == 'undefined') {
    bodyData.empId = Date.now();
  }
  await emp.create(bodyData, async (err, respo) => {
    if (err) {
      return res.json(err.toString());
    }
    else {
      return res.json(respo);
    }
  });
});



router.get('/:id', async function (req, res) {
  let id = req.params.id;
  // id = id.replace(/\s/g, '');
  await emp.findById(id, async (err, respo) => {
    if (err) {
      return res.json(err.toString());
    }
    else {
      respo=JSON.parse(JSON.stringify(respo));
     respo.empName= (respo.empName).replace(/(^\w|\s\w)/g, m => m.toUpperCase());
      return res.json(respo);
    }
  })
});



router.put('/:id', async function (req, res) {
  let id = req.params.id;
  // id = id.replace(/\s/g, '')
  let bodyData = req.body;
  let set = {
    $set:
    {
      empName: bodyData.empName,
      empDesg: bodyData.empDesg,
      empDept: bodyData.empDept,
      empEmail: bodyData.empEmail
    }
  }
  await emp.findByIdAndUpdate(id, set, { new: true }, async (err, respo) => {
    if (err) {
      return res.json(err.toString());
    }
    else {
      return res.json(respo);
    }

  })
});



router.get('/', async function (req, res) {
  await emp.find({}, async (err, respo) => {
    if (err) {
      return res.json(err.toString());
    }
    else if (respo !== null) {
      return res.json(respo);
    }
    else {
      return res.json();
    }
  })
});

router.delete('/:id', async (req, res) => {
  let id = req.params.id;
  // id = id.replace(/\s/g, '');
  await emp.findByIdAndRemove(id, async (err, respo) => {
    if (err) {
      return res.json(err.toString());
    }
    else {
      return res.json('Deleted');
    }

  })
})


router.get('/m',async(req,res)=>
{

  let q=req.query.q;
  
  res.json(q);

});



module.exports = router;
