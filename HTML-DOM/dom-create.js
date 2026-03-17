const heading = document.createElement("h2");
heading.innerHTML = "Hello in js";

const bodytag = document.getElementsByTagName("body")[0];

bodytag.appendChild(heading);