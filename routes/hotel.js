const express =require("express")
const Hotel = require("../models/Hotel")
const router =express.Router();

const { createHotel, updateHotel, deletehotel, gethotel, gethotels } = require("../controllers/hotel");
//create
router.post("/",createHotel)
//update
router.put("/:id",updateHotel)
//delete

router.delete("/:id",deletehotel)
//get

router.get("/:id",gethotel)
//get all

router.get("/",gethotels)

module.exports =router;