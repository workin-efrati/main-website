import Text from "@/components/TextComponent";
import styles from "./style.module.scss";
import Image from "next/image";
import { connect } from "@/server/connect";
import { familyOfCategoryService, readOneService } from "@/server/services/tag.service";
import TagCategory from "@/components/TagCategory";
import Link from "next/link";

export async function generateMetadata({ params: { id } }) {
    await connect()
    const categoryData = await readOneService({ _id: id });
    return {
        title: categoryData.name || id,
        description: categoryData.description || categoryData.name,
    };
}

export default async function Page({ params: { id } }) {
    await connect()
    // TODO - change to id
    const categoryData = await familyOfCategoryService({ _id: id });
    const { parents, children, categoryObject } = categoryData


    return (
        (categoryObject && <div className={`${styles.linear}`}>
            <div className={`${styles.container}`}>
                <div className={styles.text}>
                    {parents.reverse().map(parent => <Link key={parent._id} href={parent._id} className={`${styles.LinkParent}`} > <span>{parent.name}</span> <span> {` >`} </span> </Link>)}
                    <Text as="h1" newClass={styles.font} fontStyle={'b'}>{categoryObject.name}</Text>
                    {children.map(child => < TagCategory key={child._id} name={child.name} _id={child._id} />)}
                </div>
                <div className={`${styles.colorOpacity}`} />
                <Image alt="category" src={categoryObject.image || '/images/image.png'} fill className={`${styles.image}`} />
            </div>
        </div>)
    );
}

