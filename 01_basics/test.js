// const programming = ["js","py", "cpp", "java", "rb"]

// for (const key in programming) {
//     // console.log(programming[key]);
// }

// const map = new Map()

// map.set('IN',"India")
// map.set('USA', "United States Of America")
// map.set('FR', "France")

// // for (const key in map) {
// //     // console.log(map);
// //     }


    // const coding = ["js", "cpp", "java", "rb", "py"]

    // // coding.forEach( function (val){
    // //     console.log(val);
    // // })

    // coding.forEach( (item, index, arr) => {
    //     console.log(item, index, arr);
    // })

    const myCoding = [
        {
            languageName: "javaScript",
            languageFileName: "js"
        },
        {
            languageName: "python",
            languageFileName: "py"
        },
        {
            languageName: "Ruby",
            languageFileName: "rb"
        },
    ]
     myCoding.forEach( (item) => {
      console.log(item.languageName);
     })