const element =document.getElementById("myH1")
let text = element.getAttribute("class") // gets a single attribute
document.getElementById("demo").innerHTML=text;

function myFunction(){
    document.getElementById("myh2").setAttribute("class", "h2class");   
}
