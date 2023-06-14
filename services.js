const express = require('express')
const Services = [{
  name:'webprogramming',
  price:'5000',
  duration:'6-months'
},
{
  name:'computer Architecture',
  price:'2000',
  duration:'8-months'
},
{
  name:'modern web aplicationdevelopment',
  cost:'6000',
  duration:'5-months'
},
{
  name:'coding',
  cost:'59000',
  duration:'4-months'
}
]
const router = express.Router()
router.get('/',(req,res)=>{
  res.send(" heyy")
})
router.get('/:id',(req,res)=>{
  if(req.params.id<Services.length){
    res.status(200).json(req.service)
  }
 
})

router.param('id',(req,res,next,id)=>
{
  
  req.service = Services[id]
  next()
})
module.exports = router