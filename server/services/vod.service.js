import { create, read } from "../controller/vod.controller"

export const createVideo = async (data) => {
    const res = await create(data)
    return res
}
export const readVidoes = async (filter) => {
    const res = await read({ title: { $regex: new RegExp(filter || ''), $options: 'i'} })
    return res
}