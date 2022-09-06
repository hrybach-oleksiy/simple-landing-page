export function hideTab(items, description, figure) {
    items.forEach(tab => {
        tab.classList.remove('active');
    })
    description.forEach(item => {
        item.classList.remove('active');
    })
    figure.forEach(elem => {
        elem.classList.remove('active');
    })
}