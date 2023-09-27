const navbar_dir =
[
    ["@rajariandhana", "index.html"],
    ["Profile", "profile.html"],
    ["Hometown", "hometown.html"],
    ["Food", "food.html"],
    ["Tourist", "tourist.html"]
];

const nav_container = document.querySelector(".nav-bar");

function GenerateNavBar()
{
    const logo = document.createElement("a");
    logo.classList.add("nav-logo");
    logo.href = navbar_dir[0][1];
    logo.textContent = navbar_dir[0][0];

    const menu = document.createElement("ul");
    menu.classList.add("nav-menu");
    
    for (let i = 1; i < navbar_dir.length; i++)
    {
        const itemContainer = document.createElement("li");
        const link = document.createElement("a");
        link.href = navbar_dir[i][1];
        link.classList.add("nav-item");
        link.textContent = navbar_dir[i][0];
        
        itemContainer.appendChild(link);
        menu.appendChild(itemContainer);
    }

    nav_container.append(logo);
    nav_container.append(menu);
}

GenerateNavBar();