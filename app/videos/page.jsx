import SearchVideos from "@/components/SearchVideos";
import { connect } from "@/server/connect";
import Image from "next/image";
import Link from "next/link";
import style from "./style.module.scss";
import { readAllPlaylist } from "@/server/services/playlist.service";

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
            <input type="checkbox" hidden />
          </label>
        </div>
        )}
      </div>
    </div>
  );
}
export default page;
