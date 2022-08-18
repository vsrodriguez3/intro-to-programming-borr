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

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.innerText = "Remove";
    removeButton.addEventListener('click', function(e) {
        let entry = removeButton.parentElement;
        entry.remove();
    });

    newMessage.appendChild(removeButton);

    messageForm[0].reset();
});

/*let removeButton = document.createElement("button");
removeButton.type = "button";
removeButton.innerText = "remove";
removeButton.addEventListener('click', function(e) {
    let entry = removeButton.parentnode;
    entry.remove();
});

newMessage.appendChild(removeButton);*/

