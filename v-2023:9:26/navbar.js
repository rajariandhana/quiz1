const navbar_text = ["@rajariandhana", "Profile", "Hometown", "Food", "Tourist"];
const navbar_links = ["index.html", "profile.html", "hometown.html", "food.html", "tourist.html"];

const nav_container = document.querySelector(".nav-bar");

function GenerateNavBar()
{
    const logo = document.createElement("a");
    logo.classList.add("nav-logo");
    logo.href = navbar_links[0];
    logo.textContent = navbar_text[0];

    const menu = document.createElement("ul");
    menu.classList.add("nav-menu");
    
    for (let i = 1; i < navbar_text.length; i++) {
        const itemContainer = document.createElement("li");
        const link = document.createElement("a");
        link.href = navbar_links[i];
        link.classList.add("nav-item");
        link.textContent = navbar_text[i];
        
        itemContainer.appendChild(link); // Append the link to the list item
        menu.appendChild(itemContainer); // Append the list item to the menu
    }

    nav_container.append(logo);
    nav_container.append(menu);

    // const navMenu = document.querySelector(".nav-menu");

}

GenerateNavBar();