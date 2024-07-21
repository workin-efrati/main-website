export default function getData() {
  const jsonString = `{
    "הלכה יהודית": {
      "שבת": {
        "הדלקת נרות": [],
        "קידוש": [],
        "מוקצה": [],
        "תפילות שבת": []
      },
      "כשרות": {
        "שחיטה": [],
        "הפרשת חלה": [],
        "בשר וחלב": [],
        "תערובת": []
      },
      "תפילה וברכות": {
        "שחרית": [],
        "מנחה": [],
        "ערבית": [],
        "ברכות הנהנין": []
      },
      "מועדים וחגים": {
        "ראש השנה": [],
        "יום כיפור": [],
        "סוכות": [],
        "פסח": [],
        "שבועות": []
      },
      "חיי משפחה": {
        "נישואין": [],
        "גירושין": [],
        "טהרת המשפחה": [],
        "חינוך ילדים": []
      }
    }
  }`;

  return new Promise((resolve) => {
    const data = JSON.parse(jsonString);
    resolve(data);
  });
}
