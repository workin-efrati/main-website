import { create, read } from "../controller/playlist.controller"


export const createPlaylist = async (data) => {
    const res = await create(data)
    return res
}

export const readPlaylist = async (filter) => {
    const res = await read(filter)
    return res
}