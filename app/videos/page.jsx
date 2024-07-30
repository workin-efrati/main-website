import SearchVideos from "@/components/SearchVideos";
import { connect } from "@/server/connect";
import { readVideos } from "@/server/services/vod.service";
import Image from "next/image";
import Link from "next/link";
import style from "./style.module.scss";
import { createPlaylist } from "@/server/services/playlist.service";

async function page({ searchParams: { search } }) {
  await connect();
  const data = await readVideos(search);
  return (
    <>
      <div className={style.page}>
        <SearchVideos />
        <div className={style.holdVideos}>
          {data?.map((v, i) => (
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
