import { FontSizeAdjuster } from "@/components/FontSizeAdjuster";
import RelatedQuestions from "@/components/RelatedQuestions";
import { ShareLinks } from "@/components/ShereLinks";
import Tag from "@/components/Tag";
import Text from "@/components/TextComponent/index.jsx";
import { connect } from "@/server/connect";
import { readOneQaWithPopulateService, readQaService } from "@/server/services/qa.service";
import { BsTags } from "react-icons/bs";
import styles from "./style.module.scss";

export const generateStaticParams = async () => {
  await connect();
  const res = await readQaService({});
  return res.map((question) => ({ id: question._id.toString() }));
};

export async function generateMetadata({ params: { id } }) {
  await connect()
  const data = await readOneQaWithPopulateService({ _id: id })
  const { title } = data
  return {
    title: title || `תשובה בנושא ${data.tags[0].name}`,
    description: 'שאלות ותשובות עם הרב אפרתי'
  }
}



export default async function Question({ params: { id } }) {
  console.log({id});
  await connect();
  const question = await readOneQaWithPopulateService({ _id: id }) || {};

  return (
    <>
      <div className={styles.header}>
        <Text as={"h2"} fontStyle={"b"}>
          {" "}{question.title}{" "}
        </Text>
      </div>
      <FontSizeAdjuster>
        <div className={styles.container}>
          <div className={styles.question}>
            <div className={styles.questionHeader}>
              <Text as={"h3"} fontStyle={"b"}>
                {" "} שאלה{" "}
              </Text>
            </div>
            <Text fontStyle={"b"} newClass={styles.textContainer}>
              {" "} {question?.question}{" "}
            </Text>
          </div>
          <div className={styles.tags}>
            <BsTags className={styles.tagIcon} />
            {(question?.tags || []).map((tag) => (
              <Tag
                key={tag._id}
                name={tag.name}
                path={`/category/${tag._id.toString()}`}
              />
            ))}
            <div className={styles.line}></div>
          </div>
          <div className={styles.answer}>
            <div className={styles.answerHeader}>
              <Text as={"h3"} fontStyle={"b"}>
                {" "} תשובה{" "}
              </Text>
            </div>
            <Text fontStyle={"b"} newClass={styles.textContainer}>
              {" "} {question?.answer}{" "}
            </Text>
          </div>
          <div className={styles.links}>
            {" "}<ShareLinks />{" "}
          </div>
        </div>
      </FontSizeAdjuster>
      <RelatedQuestions {...question} />
    </>
  );
}
