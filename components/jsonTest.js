export default function getData() {
  const jsonString = [{
    name: "שבת ומועדים", id: "ht5@drfgr54g12g3",
    childrens: [{
      name: "חגים וזמנים", id: "fg@drfgr54g12g3",
      childrens: [{name: "שבת", id:"fkj", childrens:[{name: "הדלקת נרות", id: "rr", childrens:[]}]}]
  
    }]

  },
  {
    name: "בשר וחלב", id: "djdj@drfgr54g12g3",
    childrens: []

  }
]
    ;

  return new Promise((resolve) => {
    const data = jsonString;
    resolve(data);
  });
}
