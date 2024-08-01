import { create, read, update, readOne } from "../controller/playlist.controller.js"


export const createPlaylist = async (data) => {
    const res = await create(data)
    return res
}
export const editPlaylist = async (id, newData) => {
    const res = await update(id, newData)
    return res
}

export const readPlaylist = async (filter, search, populate) => {
    if (!filter.title) filter = { title: "כל השיעורים" }
    let res = await readOne(filter, populate)
    if (search) {
        res.list = res?.list?.filter(v => v.title.includes(search))
    }
    return res
}
export const readPlaylistByIdVideo = async (idVideo) => {
    const res = await readOne({ $and: [{ list: { $in: [idVideo] } }, { title: { $ne: "כל השיעורים" } }] }, "list")
    res.list = res?.list?.filter(v => String(v._id) !== idVideo)
    return res
}
