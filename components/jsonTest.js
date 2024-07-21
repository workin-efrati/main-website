export default function getData() {
  const jsonString = `[
  {
    "category": "Jewish Law",
    "subcategories": [
      {
        "title": "Prayer",
        "items": [
          {
            "title": "Shacharit Prayer",
            "details": "Obligations and Times"
          },
          {
            "title": "Mincha Prayer",
            "details": "Obligations and Times"
          },
          {
            "title": "Arvit Prayer",
            "details": "Obligations and Times"
          },
          {
            "title": "Blessings",
            "items": [
              {
                "title": "Hamotzi Blessing",
                "details": "Text and Times"
              },
              {
                "title": "Birkat Hamazon",
                "details": "Text and Times"
              }
            ]
          }
        ]
      },
      {
        "title": "Sabbath",
        "items": [
          {
            "title": "Candle Lighting",
            "details": "Times and Duties"
          },
          {
            "title": "Sabbath Prohibitions",
            "items": [
              {
                "title": "Labor",
                "details": "Types of Prohibited Labor"
              },
              {
                "title": "Ignition",
                "details": "Prohibition of Ignition and Food Preparation"
              },
              {
                "title": "Carrying in Public Domain",
                "details": "Restrictions and Laws"
              }
            ]
          },
          {
            "title": "Kiddush",
            "details": "Text and Times"
          }
        ]
      },
      {
        "title": "Kosher",
        "items": [
          {
            "title": "Food Preparation",
            "items": [
              {
                "title": "Challah Separation",
                "details": "Duties and Laws"
              },
              {
                "title": "Slaughter",
                "details": "Requirements and Obligations"
              }
            ]
          },
          {
            "title": "Mixing Milk and Meat",
            "details": "Prohibitions and Laws"
          }
        ]
      },
      {
        "title": "Festivals",
        "items": [
          {
            "title": "Passover",
            "items": [
              {
                "title": "Preparations",
                "details": "Preparation for Passover and Differences"
              },
              {
                "title": "Seder",
                "details": "Stages and Customs"
              }
            ]
          },
          {
            "title": "Sukkot",
            "items": [
              {
                "title": "Building a Sukkah",
                "details": "Requirements and Duties"
              },
              {
                "title": "Lulav and Etrog",
                "details": "Laws and Use"
              }
            ]
          }
        ]
      }
    ]
  }
]

`;

  return new Promise((resolve) => {
    const data = JSON.parse(jsonString);
    resolve(data);
  });
}
