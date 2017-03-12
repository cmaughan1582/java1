var para = document.createElement("p");
para.textContent = "42";
para.setAttribute("font-size", "200")
document.title = "test";
var div = document.createElement("div");
div.appendChild(para);
document.body.appendChild(para);