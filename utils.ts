const reviewTotalDisplay = document.querySelector('#reviews') as HTMLInputElement;
const recentUser = document.querySelector('#returning-user') as HTMLInputElement;
const userNameDisplay = document.querySelector('#user') as HTMLInputElement;

export function totalReviews(value: number, reviewer: string, isLoyalty: boolean) {
    const iconDisplay = isLoyalty ? '⭐' : '';
    reviewTotalDisplay.innerHTML = 'review total' + ' ' + value.toString() + ' ' + '|' + ' ' + 'last reviewer is ' + reviewer + ' ' + iconDisplay
}

export function populateUser(isReturning: boolean, userName: string) {
    if(isReturning) {
        recentUser.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}
