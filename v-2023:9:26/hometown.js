
const FolderName = "./Hometown_Images/";
const d_1 =
[
    "depok-1.jpeg",
]

const d_2 =
[
    "depok-2.jpeg",
]

const d_3 =
[
    "depok-3.jpeg",
]

const depok = [d_1, d_2, d_3];
// console.log(depok);

const container = document.querySelector(".section1");

function GenerateElements()
{
    for (let i = 0; i < depok.length; i++)
    {
        console.log(i)
        const itemContainer = document.createElement("div");
        itemContainer.classList.add("depok_container")

        const img = document.createElement("img");
        img.src = FolderName + depok[i][0];
        img.classList.add("depok_image");

        // const name = document.createElement("p");
        // name.textContent = depok[i][1];
        // name.classList.add("depok_name");

        itemContainer.appendChild(img);
        // itemContainer.appendChild(name);

        container.appendChild(itemContainer);
    }
}

GenerateElements();