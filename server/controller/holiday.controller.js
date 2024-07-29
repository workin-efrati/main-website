import HolidaysModel from "../models/holidays.model.js";
import QAModel from "../models/qa.model.js";
import tagsModel from "../models/tags.model.js";
import { readWithOptions } from "./qa.controller.js";

// CRUD
export const create = (data) => HolidaysModel.create(data);

export const read = async (filter) => HolidaysModel.find(filter)

export const readOne = (filter) => HolidaysModel.findOne(filter);


// פונקציה להבאת3 שאלות עבור פרשת השבוע ו3 עבור החג המתקרב
export const readHolidayQa2 = async (filter) => {
    let data = await HolidaysModel.findOne(filter).populate({ path: 'questions', model: QAModel, select: 'title question' }).lean();
    console.log(data.questions)
    if (!data) return null;
    return await data.questions.slice(0, 3);
}

export const readHolidayQa = async (filter) => {
    let data = await HolidaysModel
        .findOne(filter)
        .populate({
            path: 'tags', model: tagsModel,
            populate: { path: 'children', populate: { path: 'children' } }
        });

    let allChildrenIds = [];
    if (data && data.tags) {
        for (let tag of data.tags) {
            allChildrenIds = allChildrenIds.concat(collectChildrenIds(tag));
        }
    }
    if (!data) return null;
    data = await readWithOptions({
        tags: { $in: allChildrenIds }
        // , isSensitive: false
    }, 3);

    return await data;
}


export const update = (id, newData) => HolidaysModel.findByIdAndUpdate(id, newData);

export const del = (id) => HolidaysModel.findByIdAndUpdate(id, { isActive: false });


function collectChildrenIds(tag) {
    let ids = [];
    // הוסף את ה-_id של התג הנוכחי
    if (tag._id) {
        console.log(tag._id.toString());
        ids.push(tag._id.toString());
    }
    // אם יש children, עבור על כל אחד מהם באופן רקורסיבי
    if (tag.children && tag.children.length > 0) {
        for (let child of tag.children) {
            ids = ids.concat(collectChildrenIds(child));
        }
    }
    return ids;
}