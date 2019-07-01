import itemsData from '../menu.json';
import foodItemsTemplate from '../templates/food-items.hbs';


const refs = {
    menuItems: document.querySelector('.menu'),
};


// const markup = foodItemsTemplate();
// console.log(markup)

// refs.menuItems.insertAdjacentHTML('beforeend', markup)
buildMenuItems(itemsData);
function buildMenuItems (itemsData) {
    const markup = itemsData.map(item => foodItemsTemplate(item)).join('');
    refs.menuItems.insertAdjacentHTML('beforeend', markup);
}