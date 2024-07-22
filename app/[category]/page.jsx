import Text from "@/components/TextComponent";
import styles from "./page.module.scss";

export default async function Page({ params: { category } }) {
    // await connectToMongo();
    // const category =  await getCategoriesfromServices(category)
    const categoryFake = {
        title: "הלכות שבת",
        body: `דף "שאלות ותשובות בהלכות שבת" מספק מענה מקיף לכל השאלות הנפוצות בנושאים מגוונים כמו שנים מקרא ואחד תרגום, צאת שבת והבדלה, קידוש, שימוש בפלטה, קריאת התורה בשבת, תחבורה בשבת, מכשירי חשמל ועוד. בעזרת הדף הזה, תוכלו להבין את הלכות השבת בצורה ברורה ומפורטת, ולשמור על קדושת השבת בצורה הטובה ביותר`
    };
    return (
        <div className={`${styles.linear} `}>
            <div className={`${styles.container}`} >
                <Text>נושא</Text>
                <Text as="h2" fontStyle={'b'}>{categoryFake.title}</Text><br />
                <Text>{categoryFake.body}</Text>
            </div>
        </div>
    );
}
