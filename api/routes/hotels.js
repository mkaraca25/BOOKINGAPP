import express from "express";
import Hotel from "../models/Hotel.js";
import { createdHotel, deletedHotel, getHotel, getHotels, updatedHotel } from "../controllers/hotel.js";

const router=express.Router();
//CREATE
router.post('/', createdHotel)
//PUT
router.put('/:id', updatedHotel);
//DELETE
router.delete('/:id', deletedHotel);
//GET
router.get('/:id',getHotel);
//GETALL
router.get('/', getHotels);


export default router