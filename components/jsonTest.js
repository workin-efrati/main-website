export default function getData() {
  const jsonString = [{
    name: "שבת ומועדים", id: "@drfgr54g12g3",
    childrens: [{
      name: "הדלקת נרות", id: "@drfgr54g12g3",
      childrens: [{}]
  
    }]

  },
  {
    name: "בשר וחלב", id: "@drfgr54g12g3",
    childrens: [{
      name: "תערובת", id: "@drfgr54g12g3",
      childrens: [{}]
  
    }]

  }
]
    ;

  return new Promise((resolve) => {
    const data = jsonString;
    resolve(data);
  });
}
