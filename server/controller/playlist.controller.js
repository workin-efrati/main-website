import playlistModel from "../models/playlist.model"

export const create = (data) => playlistModel.create(data)
export const read = (filter) => playlistModel.find(filter)
export const readOne = (filter) => playlistModel.findOne(filter)
export const update = (filter, newData) => playlistModel.findByIdAndUpdate(filter, newData)
export const del = (id) => playlistModel.findByIdAndUpdate(id, { isActive: false })