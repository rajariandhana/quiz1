const FolderName = "./Food_Images/";

const foods =
[
    ["BiskuitTemma-1.jpeg", "Biskuit Temma"],
    ["DodolBelimbing-1.jpeg", "Dodol Belimbing"],
    ["NastarBelimbing-1.jpeg", "Nastar Belimbing"],
    ["PerkedelBakar-1.jpeg", "Perkedel Bakar"],
    ["PeyekGale-1.jpeg", "Peyek Gale"],
    ["SelaiBelimbing-1.jpeg", "Selai Belimbing"],
    ["SelendangMayang-1.jpeg", "Selendang Mayang"]
];
  
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

        itemContainer.appendChild(img);
        itemContainer.appendChild(name);
        container.appendChild(itemContainer);
    }
}

GenerateElements();