import SearchVideos from "@/components/SearchVideos";
import { connect } from "@/server/connect";
import { readVideos } from "@/server/services/vod.service";
import Image from "next/image";
import Link from "next/link";
import style from "./style.module.scss";
import {  clearYoutube, createPlaylist,editPlaylist, readPlaylist} from "@/server/services/playlist.service";
import FilterVideos from "@/components/FilterVideos";
async function page({ searchParams: { search ,filter }}) {
  await connect();
  const data = await readPlaylist({ title: filter },search, "list");
  return (
    <>
      <div className={style.page}>
        <SearchVideos filter={filter} />
        <FilterVideos search={search}/>
        <div className={style.holdVideos}>
          {data?.list?.map((v, i) => (
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
      </div>
    </>
  );
}
export default page;
