import {concatAllImages} from "./concatAllImages.js";
import {createCard} from "./createCards.js";



export function renderCards(parent, imagesArray, categoryName) {
    const allImages = concatAllImages(imagesArray);

    if (categoryName === 'All') {
        const shuffledImages = allImages.sort(() => Math.round(Math.random() * 100) - 50);
        /*const croppedImages = shuffledImages.splice(0, 12);*/
        for (let image of shuffledImages) {
            parent.insertAdjacentHTML("afterbegin", createCard(image.category, image));
        }
    } else {
        const category = allImages.filter(categoryImages => {
            return categoryImages.category === categoryName;
        });
        for (let image of category) {
            parent.insertAdjacentHTML("afterbegin", createCard(categoryName, image));
        }
    }
}