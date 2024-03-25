import menu from '../menu.json';
/* TO-DO improve relative paths */
import beer from '../assets/images/gastro/gasto-item-beer.jpg'
import chickenBurger from '../assets/images/gastro/gasto-item-chicken-buger.jpg'
import chickenWings from '../assets/images/gastro/gasto-item-chicken-wings.jpg'
import frenchFries from '../assets/images/gastro/gasto-item-french-fries.jpg'
import milkshake from '../assets/images/gastro/gasto-item-milkshake.jpg'
import friedChicken from '../assets/images/gastro/gasto-item-fried-chicken.jpg' 

const IMPORTS = {
    'Beer': beer,
    'Fried chicken': friedChicken,
    'Milkshake': milkshake,
    'French fries': frenchFries,
    'Chicken Burger': chickenBurger,
    'Chicken wings': chickenWings
}

function getMenuCards () {
    const menuItems = menu.menuList;
    const container = document.getElementById('content')

    for (let i = 0; i < menuItems.length; i++) {
        
        const newItemContainer = document.createElement('div');
        newItemContainer.classList.add('menu');
        newItemContainer.id = 'card'

        const newTitle = document.createElement('h6');
        const newText = document.createElement('p');
        const newPrice = document.createElement('h6');
        const newImage = document.createElement('img')

        if (menuItems[i].menuName === 'Milkshake'){
            const newDiscount = document.createElement('div');
            const newH6 = document.createElement('h6');
            newH6.textContent = '20%'
            newDiscount.appendChild(newH6);
            newDiscount.classList.add('milkshake');
            newItemContainer.appendChild(newDiscount)
        }

        const path = menuItems[i].menuName;
        newImage.src = IMPORTS[path];
        newImage.alt = menuItems[i].menuImageAlt;
        newTitle.textContent = menuItems[i].menuName;
        newText.textContent = menuItems[i].menuDescription;
        newPrice.textContent = `$${menuItems[i].menuPrice.toFixed(2)}`;
        newPrice.id = `price-${menuItems[i].menuId}`

        newItemContainer.appendChild(newImage);
        newItemContainer.appendChild(newTitle);
        newItemContainer.appendChild(newText)
        newItemContainer.appendChild(newPrice);

        container.appendChild(newItemContainer);
    }
}

window.onload = getMenuCards();
