import pendingQAModel from "../models/pendingQa";
// CRUD
export const create = (data) => pendingQAModel.create(data);
export const read = (filter) => pendingQAModel.find(filter);
export const readOne = (filter) => pendingQAModel.findOne(filter);
export const update = (id, newData) => pendingQAModel.findByIdAndUpdate(id, newData);
export const del = (id) => pendingQAModel.delete(id);
