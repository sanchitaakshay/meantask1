const express=require('express')
const User=require('../models/index.model')
const router=express.Router()
router.get('/',(req,res)=>{
    User.find({},(err,users)=>{
        res.json(users)
    })
})
router.post('/',(req,res)=>{
    user=new User({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        age:req.body.age,
        gender:req.body.gender,
        mobile:req.body.mobile
    })
    user.save(()=>{
        res.json(user)
    })
})
router.put('/:id',async(req,res)=>{
    user=await User.findById(req.params.id)
        user.firstname=req.body.firstname;
        user.lastname=req.body.lastname;
        user.age=req.body.age;
        user.gender=req.body.gender;
        user.mobile=req.body.mobile
        user.save(()=>{
            res.json(user)

    })
})
    router.delete('/:id',(req,res)=>{
        User.findByIdAndDelete(req.params.id,(err)=>{
            res.json({'message':'deleted'})
        })

    })
    module.exports=router
