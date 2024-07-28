import { create, read,readOne, readWithOptions } from "../controller/vod.controller"

export const createVideo = async (data) => {
    const res = await create(data)
    return res
}
export const readVideos = async (filter) => {
    const res = await read({ title: { $regex: new RegExp(filter || ''), $options: 'i'} })
    return res
}
export const readOneVideo = async (filter) => {
    const res = await readOne(filter)
    return res
}


export const getRandom = async (limit = 8) => {
    const questions = await readWithOptions({  }, limit, [], '');
    return questions;
 }