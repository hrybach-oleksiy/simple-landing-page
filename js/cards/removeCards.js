export function removeCards(parent, tabs) {
    parent.innerHTML = '';
    tabs.forEach(tab => {
        tab.classList.remove('active');
    })
}