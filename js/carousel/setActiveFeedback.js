export function setActiveFeedback(index, feedbacks) {
    for (let feedback of feedbacks) {
        feedback.classList.remove('active');
    }
    feedbacks[index].classList.add('active');
}