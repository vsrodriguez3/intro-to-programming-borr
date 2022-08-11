let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector("footer");
let copyright = document.createElement("p");
copyright.innerText = "Vanessa Rodriguez " + thisYear;
footer.appendChild(copyright);

const skills = ["Patient Assessment", "HTML", "CSS", "JavaScript", "Medical Terminology"];
let skillsSection = document.querySelector("skills");
let skillsList = document.getElementById("skills")
for (skill_listed in skills) {
    let skill = document.createElement("li");
    skill.innerText = skills[skill_listed];
    skillsList.appendChild(skill);
}