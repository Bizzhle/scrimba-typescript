const reviewTotalDisplay = document.querySelector('#reviews');
const recentUser = document.querySelector('#returning-user');
const userNameDisplay = document.querySelector('#user');
export function totalReviews(value, reviewer, isLoyalty) {
    const iconDisplay = isLoyalty ? '⭐' : '';
    reviewTotalDisplay.innerHTML = 'review total' + ' ' + value.toString() + ' ' + '|' + ' ' + 'last reviewer is ' + reviewer + ' ' + iconDisplay;
}
export function populateUser(isReturning, userName) {
    if (isReturning) {
        recentUser.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName;
}
