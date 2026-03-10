const classItems = document.getElementsByClassName("Myclass");
console.log(classItems);

for(let i = 0; i < classItems.length; i++){
    classItems[i].style.color = "red";
}

const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);
for(let i = 0; i < paragraphs.length; i++){
    paragraphs[i].style.fontSize = "20px";
}

const para = document.getElementById("para");
para.style.backgroundColor = "yellow";
para.style.padding = "10px";
console.log(para);



const test =document.querySelector("ul li:nth-child(3)");
test.style.backgroundColor= "green";
test.style.padding="10px";
console.log(test);
const test2=document.querySelectorAll("ul li");
for(x in test2){
    test2[x].style.backgroundColor="pink";
    test2[x].style.margin="10px";
    test2[x].style.color ="blue";
}
console.log(test2);
