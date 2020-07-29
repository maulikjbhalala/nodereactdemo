let express=require('express');
let router=express.Router();
let empModel=require('../models/employee');

router.get('/',async(req,res)=>
{

    let deptArray=[];
    deptArray=[
        {name:'Development'}, {name:'Designing'}, {name:'Marketing'}, {name:'Support'}];
    return res.json({depts:deptArray});
  
});


router.put('/',async(req,res)=>
{
    let id=req.query.id;
    let bodyData=req.body;
    let set={
        $set:
        {
            empName:bodyData.empName,
            empDesg:bodyData.empDesg,
            empEmail:bodyData.empEmail,
            empDept:bodyData.empDept
        }
    }

    await empModel.findOneAndUpdate({_id:id},set,{new:true},async(err,respo)=>
    {
        if (err) {
            return res.json(err.toString());
          }
          else {
            respo=JSON.parse(JSON.stringify(respo));
            respo.empName= (respo.empName).replace(/(^\w|\s\w)/g, m => m.toUpperCase());
            return res.json(respo);
          }
    });


});


router.get('/byId',async(req,res)=>
{
    let id=req.query.id;

    await empModel.findOne({_id:id},async(err,respo)=>
    {
        if (err) {
            return res.json(err.toString());
          }
          else {
            return res.json(respo);
          }
    });


});




module.exports=router;