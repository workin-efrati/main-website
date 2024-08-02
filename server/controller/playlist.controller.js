import playlistModel from "../models/playlist.model.js"

export const create = (data) => playlistModel.create(data)
export const read = (filter) => playlistModel.find(filter)
export const readOne = (filter,populate) => playlistModel.findOne(filter).populate(populate)
export const update = (filter, newData) => playlistModel.findByIdAndUpdate(filter, newData)
export const del = (id) => playlistModel.findByIdAndUpdate(id, { isActive: false })