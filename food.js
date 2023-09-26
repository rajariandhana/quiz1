/*
Biskuit Temma
Dodol Belimbing
Nastar Belimbing
Perkedel Bakar
Peyek Gale
Selai Belimbing
*/
const FolderName = "./Food_Images/";
const f_biskuit =
[
    "BiskuitTemma-1.jpeg",
    "Biskuit Temma",
]

const f_dodol =
[
    "DodolBelimbing-1.jpeg",
    "Dodol Belimbing",
]

const f_nastar =
[
    "NastarBelimbing-1.jpeg",
    "Nastar Belimbing",
]

const f_perkedel =
[
    "PerkedelBakar-1.jpeg",
    "Perkedel Bakar",
]

const f_peyek =
[
    "PeyekGale-1.jpeg",
    "Peyek Gale",
]

const f_selai =
[
    "SelaiBelimbing-1.jpeg",
    "Selai Belimbing",
]

const f_selendang =
[
    "SelendangMayang-1.jpeg",
    "Selendang Mayang"
]

const foods = [f_biskuit, f_dodol, f_nastar, f_perkedel, f_peyek, f_selai, f_selendang];
// console.log(foods);

const container = document.querySelector(".section2");

function GenerateElements()
{
    for (let i = 0; i < foods.length; i++)
    {
        console.log(i)
        const itemContainer = document.createElement("div");
        itemContainer.classList.add("food_container")

        const img = document.createElement("img");
        img.src = FolderName + foods[i][0];
        img.classList.add("food_image");

        const name = document.createElement("p");
        name.textContent = foods[i][1];
        name.classList.add("food_name");
        
        // const desc = document.createElement("p");
        // desc.textContent = foods[i][2];
        // desc.classList.add("food_description");

        // const texts = document.createElement("div");
        // texts.classList.add("food_texts")
        // texts.appendChild(name);
        // texts.appendChild(desc);

        itemContainer.appendChild(img);
        itemContainer.appendChild(name);

        container.appendChild(itemContainer);
    }
}

GenerateElements();