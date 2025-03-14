// //your code here
// document.getElementById("swap").addEventListener("click",function(){
// 	let main=document.getElementById("app");
// 	if (main.classList.contains("day")) {
//     main.classList.remove("day");
//     main.classList.add("night");
//   } else {
//     main.classList.remove("night");
//     main.classList.add("day");
//   }
// })
document.getElementById("swap").addEventListener("click",function(){
    let main = document.getElementById("app");
    let button = document.getElementById("swap");

    if (main.classList.contains("day")) {
        main.classList.remove("day");
        main.classList.add("night");

        button.classList.remove("button_day");
        button.classList.add("button_night");
    } else {
        main.classList.remove("night");
        main.classList.add("day");

        button.classList.remove("button_night");
        button.classList.add("button_day");
    }
})


