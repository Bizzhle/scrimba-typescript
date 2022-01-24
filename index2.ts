// Write a function that will only accept numbers and attend to al TS weakness flags

// import { totalReviews, populateUser } from './utils'
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLInputElement;
const recentUser = document.querySelector('#returning-user') as HTMLInputElement;
const userNameDisplay = document.querySelector('#user') as HTMLInputElement;
const propertyContainer = document.querySelector('.properties') as HTMLInputElement;
const footer = document.querySelector('.footer') as HTMLInputElement;
const container = document.querySelector('.container') as HTMLInputElement;

enum LoyaltyUser {
    GOLD_USER = "GOLD_USER",
    SILVER_USER = "SILVER_USER",
    BRONZE_USER = "BRONZE_USER"
}

//interfaces
interface Review {
    name: string
    stars: number
    loyaltyUser: LoyaltyUser
    date: string
    description: string
}

//any types
// union types, for combining types
const reviews: Review[]  = [
    {
        name: 'Jack',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '01-04-2021',
        description: "Great host"
    },
    {
        name: 'John',
        stars: 3,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: '01-08-2021',
        description: "far location"

    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: '21-04-2021',
        description: "special"

    },
]



// let stayedAt: string[]
const ADMIN = 'admin'
const READ_ONLY = 'read-only'

enum Permission {
    ADMIN,
    READ_ONLY
}

// object type

const we = {
    firstName:  'Bobby',
    lastName: 'Brown',
    isReturning: false,
    age: 23,
    stayedAt: ['darmstadt', 'oberRamstadt', 'Reinheim'],
    permissions: Permission.ADMIN
}

// const you: {
//     firstName: string,
//     lastName: string
//     isReturning: boolean,
//     age: number,
//     stayedAt: string[],  
// } = {
//     firstName:  'Bobby',
//     lastName: 'Brown',
//     isReturning: false,
//     age: 23,
//     stayedAt: ['darmstadt', 'oberRamstadt', 'Reinheim'],
// }

const you = {
    firstName:  'Bobby',
    lastName: 'Brown',
    isReturning: false,
    age: 23,
    stayedAt: ['darmstadt', 'oberRamstadt', 'Reinheim'],
    permissions: Permission.ADMIN

}


// literal types
// type alias
type Price = 45 | 55 | 65

type Country = 'Chile' | 'Antigua' | 'Wales'
 

//properties
// creating an array of objects

interface Property {
    image: string
    title: string;
    price: Price;
    location: {
        firstLine: string;
        city: string;
        postcode: number | string;
        country: Country;
    }
    contact: [number, string], 
    isAvailable: boolean 
}

const properties: 
    Property[] = [
    {
        image: 'images/farmhouse.jpeg',
        title: 'Farm House',
        price: 45,
        location: {
            firstLine: 'Trappengrund 23',
            city: 'Reinheim',
            postcode: 54555,
            country: 'Chile',
        },
        
        contact: [+123456788, 'john@gmail.com'],
        isAvailable: true

    },

    {
        image: 'images/streethouse.jpeg',
        title: 'Street House',
        price: 55,
        location: {
            firstLine: 'Trappengrund 26',
            city: 'Reinheim',
            postcode: 54555,
            country: 'Antigua',
        },
        
        contact: [+123456788, 'john2@gmail.com'],
        isAvailable: false

    },
    {
        image: 'images/bungalow.jpeg',
        title: 'Bungalow',
        price: 65,
        location: {
            firstLine: 'Trappengrund 43',
            city: 'Reinheim',
            postcode: 54555,
            country: 'Wales',
        },
        
        contact: [+123456788, 'john3@gmail.com'],
        isAvailable: true


    }
]

// functions
function totalReviews(value: number, reviewer: string, isLoyalty: LoyaltyUser) {
    const iconDisplay = isLoyalty ? '⭐' : '';
    reviewTotalDisplay.innerHTML = value.toString() + ' ' + 'Review' + makeMultiple(value) + ' ' + '|' + ' ' + 'last reviewer is ' + reviewer + ' ' + iconDisplay
}

function populateUser(isReturning: boolean, userName: string) {
    if(isReturning) {
        recentUser.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

let authorityStatus: any
let isLoggedIn: boolean = true

function showDetails(authorityStatus: boolean | Permission, element: HTMLDivElement, price: number) {
    if(authorityStatus) {
        const priceDisplay = document.createElement('div')
        priceDisplay.innerHTML = price.toString() + '/night'
        element.appendChild(priceDisplay)
    }
}

// void types

function addN (firstValue: number, secondValue: number): number {
    return firstValue + secondValue
}

// add properties 
for (let i=0; i < properties.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title 
    const image = document.createElement('img')
    image.setAttribute('src', properties[i].image)
    card.appendChild(image)
    propertyContainer.appendChild(card)
    showDetails(you.permissions, card, properties[i].price)
}

let currentLocation: [string, string, number] = ['germany', '11:56', 17 ]
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2]

totalReviews(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

populateUser(you.isReturning, you.firstName)

// Union 
function add(firstValue: (number | string), secondValue: (number | string)) {
    let result
    if (typeof firstValue === 'number' && typeof secondValue === 'number') {
        result = firstValue + secondValue
        console.log(result);
        
    }

    if (typeof firstValue === 'string' && typeof secondValue === 'string') {
        result = firstValue + ' ' + secondValue
        console.log(result);

    }

    if (typeof firstValue === 'number' && typeof secondValue === 'string') {
        console.log('cannot perform this addition')
    }
    if (typeof firstValue === 'string' && typeof secondValue === 'number') {
        console.log('cannot perform this addition')
    }
}

const combineReviews = add(5, 1);
const firstNameLastName = add('Ania', 'Kubow')

// void exercise

function makeMultiple(value: number): string {
    if ( value > 1 || value == 0 ) {
        return 's'
    } else return ''
}

// Function type 

function getTopTwoReviews(reviews: Review[] ): Review[]  {
    const sortedReviews = reviews.sort((a, b) => b.stars - a.stars)
    return sortedReviews.slice(0, 2)
}

let count = 0
function addReviews(array: Review[] ): void  {
    if(!count) {
        count++
        const topTwo = getTopTwoReviews(array)
        for (let i = 0; i < topTwo.length; i++) {
            const card = document.createElement('div')
            card.classList.add('review-card')
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name
            reviewTotalDisplay.appendChild(card)
        }
       container.removeChild(button)
    }
}

button.addEventListener('click', () => addReviews(reviews))

// let currentLocation: [string, string, number] = ['London', '11.07', 17 ]

//classes
//creating classes
class Car {
    make: string
    year: number
    color: string
    constructor(make: string, year: number, color: string) {
        this.make = make
        this.year = year
        this.color = color
    }
}

class MainProperty {
    src: string
    title: string
    reviews: Review[]
    constructor( src: string,
        title: string,
        reviews: Review[]) {
            this.src = src
            this.title = title
            this.reviews = reviews
        }
}

let yourMainProperty = new MainProperty('images/bungalow.jpeg', 'bungalow', 
[{
    name: 'olive',
    stars: 5,
    loyaltyUser: LoyaltyUser.GOLD_USER,
    date: '12-5-15',
    description: 'bungalow'
}] )

const mainImageContainer = document.querySelector('.main-image') as HTMLInputElement;
const image = document.createElement('img')
image.setAttribute('src', yourMainProperty.src)
mainImageContainer.appendChild(image)

