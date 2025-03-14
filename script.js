//your code here
document.getElementById("swap").addEventListener("click",function(){
	let main=document.getElementById("app");
	if (main.classList.contains("day")) {
    main.classList.remove("day");
    main.classList.add("night");
  } else {
    main.classList.remove("night");
    main.classList.add("day");
  }
})

