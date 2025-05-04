import SearchVideos from "@/components/SearchVideos";
import { connect } from "@/server/connect";
import { readVideos } from "@/server/services/vod.service";
import Image from "next/image";
import Link from "next/link";
import style from "./style.module.scss";
import { clearYoutube, createPlaylist, editPlaylist, readAllPlaylist } from "@/server/services/playlist.service";
import FilterVideos from "@/components/FilterVideos";

async function page({ searchParams: { search, filter } }) {
    await connect();
    const data = await readAllPlaylist(search, { path: "list" });
    return (
        <div className={style.page}>
            <SearchVideos filter={filter} />

            <div className={style.subjects}>
                {data?.map(subject => <div className={style.subject}>
                    {subject?.list?.length ? <h2 id={subject.title}>{subject.title}</h2> : <></>}
                    <div className={style.holdVideos}>
                        {subject?.list?.map((v, i) => (
                            <Link key={v._id} className={style.card} href={`/videos/${v._id}`}>
                                <Image
                                    className={style.img}
                                    src={v.img}
                                    fill
                                    alt={v.title}
                                    sizes={"100%"}
                                    priority={1}
                                />
                                <div className={style.title}>{v.title}</div>
                            </Link>
                        ))}
                    </div>
                    <label>
                        ראה עוד
                        <input type="checkbox" hidden/>
                    </label>
                </div>
                )}
            </div>
        </div>
    );
}
export default page;

/*
<>
                    {subject?.list?.length ? <h2>{subject.title}</h2> : <></>}
                    <div className={style.holdVideos}>
                        {subject?.list?.slice(0,4).map((v, i) => (
                            <Link key={v._id} className={style.card} href={`/videos/${v._id}`}>
                                <Image
                                    className={style.img}
                                    src={v.img}
                                    fill
                                    alt={v.title}
                                    sizes={"100%"}
                                    priority={1}
                                />
                                <div className={style.title}>{v.title}</div>
                            </Link>
                        ))}
                        <details>
                            <summary>לשיעורים נוספים בנושא</summary>
                            <div className={style.allHoldVideos}>
                            {subject?.list?.slice(4).map((v, i) => (
                                <Link key={v._id} className={style.card} href={`/videos/${v._id}`}>
                                    <Image
                                        className={style.img}
                                        src={v.img}
                                        fill
                                        alt={v.title}
                                        sizes={"100%"}
                                        priority={1}
                                    />
                                    <div className={style.title}>{v.title}</div>
                                </Link>
                            ))}
                            </div>
                        </details>
                    </div>
                </>
                */
