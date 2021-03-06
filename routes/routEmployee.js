var express = require('express');
var router = express.Router();
var emp = require('../models/employee');
const { mquery } = require('mongoose');


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
  let name=req.query.name;
  let mQuery={};
  if(name!==null && name!==undefined)
  {
    mQuery={'empName':{$regex:name,$options:'i'}};
  }
    await emp.find(mQuery, async (err, respo) => {
      if (err) {
        return res.json(err.toString());
      }
      else if (respo !== null) {
        return res.json(respo);
      }
      else {
        return res.json();
      }
    });
 
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



router.get('/getById',async(req,res)=>
{
  let id=req.query.name;
    await emp.findOne({empName:id},async(err,respo)=>
    {
      if (err) {
        console.log('in error')
        return res.json(err.toString());
      }
      else if (respo !== null) {
        console.log('in response');
        return res.json(respo);
      }
    })
  
});



router.get('/page/:limit/:pageNo',async(req,res)=>
{

// let limit = parseInt(req.params.limit); 
// let page = parseInt(req.params.skip) ;
let limit = parseInt(req.params.limit); 
let page = parseInt(req.params.pageNo) || 1; 
let emps = await emp.find({}).skip((limit * page) - limit).limit(limit);
let countDoc = await emp.count({});
let hasNext="false";

if(emps!==null && emps!=='undefined' && emps!==undefined && emps.length!==0 ) 
{
  hasNext="true";
}
  return res.json({
     currentPage: page,
     nextPage:page+1, 
     hasNext:hasNext,
     totalPages: Math.ceil(countDoc / limit), 
     totalRecords: countDoc,
     employees: emps, 
  });
      
});


router.get('/dept',async(req,res)=>
{
  let deptArray=[];
  deptArray=['Development', 'Designing', 'Marketing', 'Support'];
  return res.json({depts:deptArray});

});

module.exports = router;
