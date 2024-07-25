import HolidaysModel from "../models/holidays.model.js";

// CRUD
export const create = (data) => HolidaysModel.create(data);

export const read = async(filter) =>{
    return await HolidaysModel.find(filter)
    // .populate('questions.pending-qa');
}

export const readOne = (filter) => HolidaysModel.findOne(filter);

export const update = (id, newData) => HolidaysModel.findByIdAndUpdate(id, newData);

export const del = (id) => HolidaysModel.findByIdAndUpdate(id, { isActive: false });
