import Text from "@/components/TextComponent";
import styles from "./page.module.scss";
import Image from "next/image";
import { connect } from "@/server/connect";
import { familyOfCategoryService, readOneService } from "@/server/service/tag.service";
import { formatParams } from "@/helpers/formatParams";
import TagCategory from "@/components/TagCategory";


async function getDataCategory(categoryId) {
    await connect();
    // let category = await readOneService({ _id: categoryId });
    let category = await familyOfCategoryService({ _id: categoryId });
    if (category) {
        console.log({ category });
    }
    else {
        console.log({ categorylll: category });
        category = {
            name: category,
            description: categoryId
        };
    }

    return category;
}


export async function generateMetadata({ params: { category } }) {

    let categoryData = await getDataCategory(category);
    categoryData = categoryData.categoryObject
    return {
        title: categoryData.name || category,
        description: categoryData.description || categoryData.name,
    };
}

export default async function Page({ params: { category } }) {
    category = formatParams(category)
    let categoryData = await getDataCategory(category);
    const parents = categoryData.parents
    const children = categoryData.children
    categoryData = categoryData.categoryObject;
    const categoryFake = {
        title: categoryData.name || "הלכות שבת",
        body: categoryData.description || `דף "שאלות ותשובות בהלכות שבת" מספק מענה מקיף לכל השאלות הנפוצות בנושאים מגוונים כמו שנים מקרא ואחד תרגום, צאת שבת והבדלה, קידוש, שימוש בפלטה, קריאת התורה בשבת, תחבורה בשבת, מכשירי חשמל ועוד. בעזרת הדף הזה, תוכלו להבין את הלכות השבת בצורה ברורה ומפורטת, ולשמור על קדושת השבת בצורה הטובה ביותר`,
        image: categoryData.img || '/images/image.png' // Replace with your actual image path
    };
    return (
        (categoryData && <div className={`${styles.linear}`}>
            <div className={`${styles.container}`}>
                <div className={styles.text}> 
                    {parents.map(parent => <div >{parent}</div>)}
                    <Text as="h1" newClass={styles.font} fontStyle={'b'}>{categoryData?.name}</Text>
                    {children.map(child => < TagCategory  name={child} />)}
                </div>
                <div className={`${styles.colorOpacity}`} />
                <Image src={categoryFake.image} fill className={`${styles.image}`} />
            </div>
        </div>)
    );
}

