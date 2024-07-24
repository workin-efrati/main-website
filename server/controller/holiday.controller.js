import HolidaysModel from "../models/holidays.modell.js";

// CRUD
export const create = (data) => HolidaysModel.create(data);

export const read = (filter) => HolidaysModel.find(filter);

export const readOne = (filter) => HolidaysModel.findOne(filter);

export const update = (id, newData) => HolidaysModel.findByIdAndUpdate(id, newData);

export const del = (id) => HolidaysModel.findByIdAndUpdate(id, { isActive: false });
