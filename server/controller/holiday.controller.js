import HolidaysModel from "../models/holidays.model.js";
import pendingQAModel from "../models/pendingQa.js";

// CRUD
export const create = (data) => HolidaysModel.create(data);

export const read = async (filter) => HolidaysModel.find(filter)

export const readOne = (filter) => HolidaysModel.findOne(filter);

export const readHolidayQa = async (filter) => {
    let data =  await HolidaysModel.findOne(filter);
    data.questions=data.questions.slice(0, 3);
    await data.populate({ path: 'questions', model: pendingQAModel, select:'title question' });
    return data;
 }

export const update = (id, newData) => HolidaysModel.findByIdAndUpdate(id, newData);

export const del = (id) => HolidaysModel.findByIdAndUpdate(id, { isActive: false });
