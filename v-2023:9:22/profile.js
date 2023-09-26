const keys =[
    "Name",
    "Education",
    "Tech Stack",
    "LinkedIn",
    "Site"
];

const values = [
    "Ralfazza Rajariandhana",
    "Sepuluh Nopember Institute of Technology (ITS) | Informatics Engineering",
    "C, C++, C#, Python, HTML, CSS, JavaScript",
    "https://www.linkedin.com/in/rajariandhana",
    "https://rajariandhana.github.io"
];

const container = document.getElementById("identities");

for (let i = 0; i < keys.length; i++) {
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("container")

    const keyElement = document.createElement("p");
    keyElement.textContent = keys[i];
    keyElement.classList.add("key");

    const valueElement = document.createElement("p");
    if (values[i].startsWith("http") || values[i].startsWith("www"))
    {
        const linkElement = document.createElement("a");
        linkElement.href = values[i];
        linkElement.target = "_blank";
        linkElement.textContent = values[i];
        valueElement.appendChild(linkElement);
    }
    else
    {valueElement.textContent = values[i];}
    valueElement.classList.add("value");

    itemContainer.appendChild(keyElement);
    itemContainer.appendChild(valueElement);

    container.appendChild(itemContainer);
}
