const FolderName = "./Tourist_Images/";
const places =
[
    [
      "ui-1.jpeg",
      "University of Indonesia",
      "The university's campus is not only a hub for education but also a beautiful green space. You can stroll through its park-like setting, visit its museums, and appreciate the architecture."
    ],
    [
      "margo-1.jpeg",
      "Margo City Mall",
      "If you're looking for shopping and entertainment options, Margo City Mall is one of Depok's largest shopping centers. It's a great place to shop, dine, and catch a movie."
    ],
    [
      "wiladatika-1.jpeg",
      "Wiladatika Recreational Park",
      "This recreational park is a great place for families. It offers a range of activities, including water rides, playgrounds, and gardens, making it a perfect spot for a day of fun and relaxation."
    ],
    [
      "dam-1.jpeg",
      "Dian Al-Mahri Mosque",
      "This grand mosque is a prominent and visually striking mosque located in Depok, West Java, Indonesia. It gained international attention due to its opulent and lavish architectural design, particularly the gold-plated dome that stands out in the landscape."
    ]
];
// console.log(places);

const container = document.querySelector(".section2");

function GenerateElements()
{
    for (let i = 0; i < places.length; i++)
    {
        console.log(i)
        const itemContainer = document.createElement("div");
        itemContainer.classList.add("place_container")

        const img = document.createElement("img");
        img.src = FolderName + places[i][0];
        img.classList.add("place_image");

        const name = document.createElement("p");
        name.textContent = places[i][1];
        name.classList.add("place_name");
        
        const desc = document.createElement("p");
        desc.textContent = places[i][2];
        desc.classList.add("place_description");

        const texts = document.createElement("div");
        texts.classList.add("place_texts")
        texts.appendChild(name);
        texts.appendChild(desc);

        itemContainer.appendChild(img);
        itemContainer.appendChild(texts);

        container.appendChild(itemContainer);
    }
}

GenerateElements();