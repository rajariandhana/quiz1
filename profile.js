const identities_keys =
[
    "Name",
    "Education",
    "Tech Stack"
];

const identities_values =
[
    "Ralfazza Rajariandhana",
    "Sepuluh Nopember Institute of Technology (ITS) | Informatics Engineering",
    "C, C++, C#, Python, HTML, CSS, JavaScript"
];

const socials_icons =
[
    "icon_github.png",
    "icon_linkedin.png",
    "icon_instagram.png"
];

const socials_links =
[
    "https://github.com/rajariandhana",
    "https://www.linkedin.com/in/rajariandhana",
    "https://ww.instagram.com/rajariandhana"
];

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
profilePicture.src = "Profile_Images/profpic-3.JPEG";
s_left.appendChild(profilePicture);

for (let i = 0; i < identities_keys.length; i++)
{
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("text_container")

    const keyElement = document.createElement("p");
    keyElement.textContent = identities_keys[i];
    keyElement.classList.add("key");

    const valueElement = document.createElement("p");
    valueElement.textContent = identities_values[i];
    valueElement.classList.add("value");

    itemContainer.appendChild(keyElement);
    itemContainer.appendChild(valueElement);

    identities.append(itemContainer);
}

for(let i=0; i<socials_icons.length; i++)
{
    const image = document.createElement("img");
    image.src = "Profile_Images/" + socials_icons[i];
    const linkElement = document.createElement("a");
    linkElement.target = "_blank";
    linkElement.href = socials_links[i];
    linkElement.appendChild(image);
    socials.appendChild(linkElement);
}
