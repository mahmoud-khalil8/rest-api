import express from 'express';
import router from './router';
import morgan from 'morgan';
import cors from 'cors' ;
import {protect} from './modules/auth'
import { CreateNewUser, signin } from './handlers/user';

const app =express() ;
const customLogger=(message)=>(req,res,next)=>{
    console.log(`hello from ${message}`)
    next() ;
}
app.use(morgan('dev')) ;
app.use(express.json()) ;
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.send('from the express framework')
})
app.use('/api',protect ,router) ;
app.post('/user',CreateNewUser) ;
app.post('/signin',signin) ;
app .use((err,req,res,next)=>{
    if(err.type==='auth'){
        res.status(401).json({message:'unauth'})
    }else if(err.type==='input'){
        res.status(400).json({message:'invalid'})
    }else{
        res.status(500).json({message:'oops'})
    }
})
export default app ;
