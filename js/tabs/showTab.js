export function showTab(items, description, index, figure) {
    items[index].classList.add('active');
    description[index].classList.add('active');
    figure[index].classList.add('active');
}