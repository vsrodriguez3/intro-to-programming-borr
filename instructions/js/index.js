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
    li.classList.add('skills-item');
});

let messageForm = document.getElementsByName("leave_message")
messageForm[0].addEventListener('submit', function(event) {
    event.preventDefault()
    const userName = event.target.name.value;
    const userEmail = event.target.email.value;
    const userMessage = event.target.message.value;
    console.log(userName + "\n" + userEmail + "\n" + userMessage);
    
    let messageSection = document.getElementById("messages");
    let messageList = document.getElementById("messages").querySelector("ul");
    let newMessage = document.createElement("li");
    newMessage.innerHTML = '<a href="mailto:">' + event.target.name.value + '</a>' + ' <span>wrote: ' + event.target.message.value + '</span>  '
    messageList.appendChild(newMessage);

    newMessage.classList.add('message-block');

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.innerText = "Remove";
    removeButton.addEventListener('click', function(e) {
        let entry = removeButton.parentElement;
        entry.remove();
    });
    newMessage.appendChild(removeButton);
    removeButton.classList.add('remove-button');

    messageForm[0].reset();
});

fetch('https://api.github.com/users/vsrodriguez3/repos')
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        let projectSection = document.getElementById("projects");
        let projectsList = projectSection.querySelector("ul");
        for (i = 0; i < response.length; i++) {
            let project = document.createElement("li");
            project.innerText = response[i].name;
            projectsList.appendChild(project);
        };
    });