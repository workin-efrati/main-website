import HolidaysModel from "../models/holidays.model.js";
import QAModel from "../models/qa.model.js";

// CRUD
export const create = (data) => HolidaysModel.create(data);

export const read = async (filter) => HolidaysModel.find(filter)

export const readOne = (filter) => HolidaysModel.findOne(filter);


// פונקציה להבאת3 שאלות עבור פרשת השבוע ו3 עבור החג המתקרב
export const readHolidayQa = async (filter) => {
    let data =  await HolidaysModel.findOne(filter);
    if(!data) return null;
    data.questions=data.questions.slice(0, 3);
    await data.populate({ path: 'questions', model: QAModel, select:'title question' });
    return data;
 }

export const update = (id, newData) => HolidaysModel.findByIdAndUpdate(id, newData);

export const del = (id) => HolidaysModel.findByIdAndUpdate(id, { isActive: false });
