import DailyModel from "../models/daily.model.js";

// CRUD
export const createDaily = (data) => DailyModel.create(data)

export const read = async (filter) => DailyModel.find(filter)

export const readOne = (filter) => DailyModel.findOne(filter);

export const update = (id, newData) => DailyModel.findByIdAndUpdate(id, newData);

export const del = (id) => DailyModel.deleteOne({ _id: id });
