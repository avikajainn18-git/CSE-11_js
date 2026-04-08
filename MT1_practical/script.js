let size=20;
let show=true;

function Changeheading(){
        document.getElementById("heading").innerText= 
        document.getElementById("input").value;


}

function Changefont() {
    let fonts = ["Arial", "Courier New", "Georgia", "Times New Roman", "Verdana","'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"];
    let Chosenfont = fonts[Math.floor(Math.random() * fonts.length)];
    document.getElementById("heading").style.fontFamily = Chosenfont;
}   


function Changecolor(){
    document.body.style.background =
        "#" + Math.floor(Math.random()*16777215).toString(16);
}

function Paragraph(){
    show = !show;
    document.getElementById("para").style.display = show ? "block" : "none";
}

function FontSizeinc() {
    size += 2;
    document.getElementById("para").style.fontSize = size + "px";
}
function FontSizedec() {
    size -= 2;
    document.getElementById("para").style.fontSize = size + "px";
}

function Reset() {
    location.reload();
}