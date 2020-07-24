let express=require('express');
let router=express.Router();


router.get('/',async(req,res)=>
{

    let deptArray=[];
    deptArray=[
        {name:'Development'}, {name:'Designing'}, {name:'Marketing'}, {name:'Support'}];
    return res.json({depts:deptArray});
  
});




module.exports=router;