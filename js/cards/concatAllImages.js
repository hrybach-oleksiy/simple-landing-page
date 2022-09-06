
export function concatAllImages(imagesArray) {
    const allImages = [];
    for (let category in imagesArray) {
        for (let image of imagesArray[category]) {
            allImages.push({
                name: image,
                category: category,
            })
        }
    }
    return allImages;
}



