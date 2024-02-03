const express =require("express")
const Hotel = require("../models/Hotel")

 const createHotel =async(req,res)=>{
    const newHotel =  new Hotel(req.body)

    try{
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    }catch(err){
        res.status(500).json(err)
    }
}

const updateHotel =async(req,res)=>{

    
    try{
        const updateHotel = await Hotel.findByIdAndUpdate(
          req.params.id,
          { $set: req.body},
          { new:true})
        res.status(200).json(updateHotel)
    }catch(err){
        res.status(500).json(err)
    }
}


const deletehotel =async(req,res)=>{
    
    try{
        await Hotel.findByIdAndDelete(req.params.id)
         res.status(200).json("Hotel has Succesfully Deleted")
     }catch(err){
         res.status(500).json(err)
     }
}

const gethotel =async(req,res)=>{
    try{
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    }catch(err){
        res.status(500).json(err)
    }
}

const gethotels =async(req,res)=>{
    try{
        const hotels = await Hotel.find()
        res.status(200).json(hotels)
    }catch(err){
        res.status(500).json(err)
    }
}

module.exports = {
    createHotel,
    updateHotel,
    deletehotel,
    gethotel,
    gethotels
}