import { create, read } from "../controller/playlist.controller.js"


export const createPlaylist = async (data) => {
    console.log(data);
    const res = await create(data)
    return res
}

export const readPlaylist = async (filter) => {
    const res = await read(filter)
    return res
}