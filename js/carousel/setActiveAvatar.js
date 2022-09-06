export function setActiveAvatar(index, avatars) {
    for (let avatar of avatars) {
        avatar.classList.remove('active');
    }
    avatars[index].classList.add('active');
}