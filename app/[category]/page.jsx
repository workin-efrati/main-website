import Text from "@/components/TextComponent";
import styles from "./page.module.scss";
import Image from "next/image";
// import { usePathname } from 'next/navigation'

async function getDataCategory(category) {
    // await connectToMongo();
    // const categor = await getCategoriesfromServices(category);
    const categor = {
        description: category
    }
    return categor;
}

export async function generateMetadata({ params: { category } }) {
    const categoryData = await getDataCategory(category);
    return {
        title: categoryData.title,
        description: categoryData.description,
    };
}

export default async function Page({ params: { category } }) {
    const categoryData = await getDataCategory(category);
    const categoryFake = {
        title: categoryData.title || "הלכות שבת",
        body: categoryData.body || `דף "שאלות ותשובות בהלכות שבת" מספק מענה מקיף לכל השאלות הנפוצות בנושאים מגוונים כמו שנים מקרא ואחד תרגום, צאת שבת והבדלה, קידוש, שימוש בפלטה, קריאת התורה בשבת, תחבורה בשבת, מכשירי חשמל ועוד. בעזרת הדף הזה, תוכלו להבין את הלכות השבת בצורה ברורה ומפורטת, ולשמור על קדושת השבת בצורה הטובה ביותר`,
        image: categoryData.img || '/images/image.png' // Replace with your actual image path
    };
    return (
        <div className={`${styles.linear}`}>
            <div className={`${styles.container}`}>
                <div className={styles.text}>
                    <Text>נושא</Text>
                    <Text as="h2" fontStyle={'b'}>{categoryFake.title}</Text><br />
                    <Text>{categoryFake.body}</Text>
                </div>
                <div className={`${styles.colorOpacity}`} />
                <Image src={categoryFake.image} fill className={`${styles.image}`} />
            </div>
        </div>
    );
}




// import Text from "@/components/TextComponent";
// import styles from "./page.module.scss";


// async function getDataCategory() {
//     await connectToMongo();
//     const categor = await getCategoriesfromServices(category)
//     return categor;
// }

// export const metadata = {
//     title: getDataCategory().title,
//     description: getDataCategory().description,
// };
// export default async function Page({ params: { category } }) {
//     // await connectToMongo();
//     // const category =  await getCategoriesfromServices(category)
//     const categoryFake = {
//         title: "הלכות שבת",
//         body: `דף "שאלות ותשובות בהלכות שבת" מספק מענה מקיף לכל השאלות הנפוצות בנושאים מגוונים כמו שנים מקרא ואחד תרגום, צאת שבת והבדלה, קידוש, שימוש בפלטה, קריאת התורה בשבת, תחבורה בשבת, מכשירי חשמל ועוד. בעזרת הדף הזה, תוכלו להבין את הלכות השבת בצורה ברורה ומפורטת, ולשמור על קדושת השבת בצורה הטובה ביותר`
//     };
//     return (
//         <div className={`${styles.linear} `}>
//             <div className={`${styles.container}`} >
//                 <Text>נושא</Text>
//                 <Text as="h2" fontStyle={'b'}>{categoryFake.title}</Text><br />
//                 <Text>{categoryFake.body}</Text>
//             </div>
//         </div>
//     );
// }
