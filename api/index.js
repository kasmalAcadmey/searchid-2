import express from 'express'
import dotenv from 'dotenv'
import Student from './mode/Student.js'
import mongoose from 'mongoose'
import cors from 'cors'
dotenv.config()

const app  =express()


const conected =  async()=> {
    try{
await mongoose.connect('mongodb+srv://kuneen2:0bAlQTUETw7yZ2lp@cluster0.oosbg4n.mongodb.net/searchId?retryWrites=true&w=majority')
console.log('mongoose connected')
    }catch(err){
        console.log(err)
    }
}
app.use(cors())
app.use(express.json())

app.post('/api/students/', async (req, res)=>{
    const student = new Student(req.body)
try{
    const newSave = await student.save()
    res.status(200).send(newSave)
}catch(err){
    res.status(401).send(err)
}
})

app.get('/api/students/:id', async (req, res)=>{
    try{
   const student = await Student.findOne({ studentID: req.params.id})
   if(!student) return res.status(401).send(`There is no graduate with this ${req.params.id} ID.`)
   res.status(200).send(student)
    }catch(err){
        res.status(200).send(err)
    }
})


app.listen(8800, ()=> {
    conected()
    console.log('server starated')
})