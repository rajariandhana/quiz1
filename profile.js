const identities_list =
[
    ["Name", "Ralfazza Rajariandhana"],
    ["Education", "Sepuluh Nopember Institute of Technology (ITS) | Informatics Engineering"],
    ["Tech Stack", "C, C++, C#, Python, HTML, CSS, JavaScript"]
];

const socials_list =
[
    ["icon_github.png", "https://github.com/rajariandhana"],
    ["icon_linkedin.png", "https://www.linkedin.com/in/rajariandhana"],
    ["icon_instagram.png", "https://ww.instagram.com/rajariandhana"]
];

const FolderName = "./Profile_Images/";

const section2 = document.querySelector(".section1");
const s_left = document.createElement("div");
s_left.classList.add("s_left");
const s_right = document.createElement("div");
s_right.classList.add("s_right");
const identities = document.createElement("div");
identities.classList.add("identities");
const socials = document.createElement("div");
socials.classList.add("socials");

section2.appendChild(s_left);
section2.appendChild(s_right);
s_right.appendChild(identities);
s_right.appendChild(socials);

const profilePicture = document.createElement("img");
profilePicture.src = FolderName + "profpic-3.JPEG";
s_left.appendChild(profilePicture);

for (let i = 0; i < identities_list.length; i++)
{
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("text_container")

    const type = document.createElement("p");
    type.textContent = identities_list[i][0];
    type.classList.add("type");

    const value = document.createElement("p");
    value.textContent = identities_list[i][1];
    value.classList.add("value");

    itemContainer.appendChild(type);
    itemContainer.appendChild(value);

    identities.append(itemContainer);
}

for(let i=0; i<socials_list.length; i++)
{
    const itemContainer = document.createElement("img");
    itemContainer.src = FolderName + socials_list[i][0];
    const linkElement = document.createElement("a");
    linkElement.target = "_blank";
    linkElement.href = socials_list[i][1];
    linkElement.appendChild(itemContainer);
    socials.appendChild(linkElement);
}