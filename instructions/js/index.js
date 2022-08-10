let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector("footer");
let copyright = document.createElement("p");
copyright.innerText = "Vanessa Rodriguez " + thisYear;
footer.appendChild(copyright);

let mySkills = ["Patient Assessment", "HTML", "CSS", "JavaScript", "Medical Terminology"];
let skillsList = document.getElementById("skills");
mySkills.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    skillsList.appendChild(li);
});