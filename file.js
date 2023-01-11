// const fs = require("fs");

// const { fs } = require("fs");

// 1.const quote = "Arun salviues is a software Fullstack developer";

// fs.writeFile("./future2.html", quote, (arr) => {
//     console.log("Jesus Christ blessed him");
// })


// 2. using loop concept to create more files
// const fs = require("fs");
// const quotes = "I can do all things through CHRIST who strengthens me";

// const [, , noOfFiles] = process.argv;

// for (let i = 1; i <= noOfFiles; i++) {
//     fs.writeFile(`./backup2/text-${i}.html`, quotes, (err) => {
//         console.log("JESUS BLESSED HIM");
//     });

// }


//3. Read File
// const fs = require("fs")
// fs.readFile("./text.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log("🥊", err)
//     }
//     else {
//         console.log(data)
//     }
// })

//4.Append File.update new thing on the existing file,

// const fs = require("fs");
// const quote3 = "Praise The Lord";

// fs.appendFile("./future.html", "\n" + quote3, (err) => {
//     console.log("God Blessed me")
// })


//5.To delete a file:
const fs = require("fs");

fs.unlink("./delete1.txt", (data) => {
    if (data) {
        console.log("no file found")
    } else {
        console.log("Deleted Successfully")
    }
})


















