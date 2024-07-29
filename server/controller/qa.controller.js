import QAModel from "../models/qa.model.js";

// CRUD
export const create = (data) => QAModel.create(data);

export const read = (filter , populate) => QAModel.find(filter).populate(populate);

export const readWithOptions = (filter, limit, populate, proj) => QAModel.find(filter).limit(limit).populate(populate).select(proj);

export const readOne = (filter, populate) => QAModel.findOne(filter).populate(populate);

export const update = (id, newData) => QAModel.findByIdAndUpdate(id, newData);

export const del = (id) => QAModel.findByIdAndUpdate(id, { isActive: false });
