let thisArray = [
    'Red wine rissoto',
    'Burger',
    'Bob\'s Burger',
    'Tortellini',
    'Spaghetti and Meatballs',
    'Spaghetti Squash',
    'Raviolli',
    'Mac and Cheese',
    'Salad',
    'Brie and Apple Grilled Cheese and Salad',
    'Grilled Cheese and Tomato Soup',
    'Baked Potato',
    'Lentil and Kale Soup',
    'Couscous with Feta and Veggies',
    'White wine Rissoto'


]

console.log(thisArray)

localStorage.setItem('hi', JSON.stringify(thisArray))

console.log([localStorage['hi']])

let choosen = thisArray[Math.floor(Math.random() * thisArray.length)]

console.log(choosen)

let newMeal = document.getElementById('addmeal')
let doc = document.getElementById('doc')

console.log(newMeal.value)
console.log(doc)

//when button is clicked, push the value of the addmeal to the array
//

let addBtn = document.getElementById('addmeal-btn')
let displayAll = document.getElementById('show-all-meals')

addBtn.addEventListener('click', () => {
    if (newMeal.value != '') {
        let newArray = JSON.parse(localStorage.getItem('hi'))
        console.log(newArray)
        newArray.push(newMeal.value)
        localStorage.setItem('hi', JSON.stringify(newArray))
        displayAll.append(newMeal.value)
        newMeal.value = ''

        displayAll.appendChild(document.createElement('br'))

    } else {
        alert('There is no meal to add in text field.')
    }
})



for (let i = 0; i < JSON.parse(localStorage.getItem('hi')).length; i++) {
    let displayArray = JSON.parse(localStorage.getItem('hi'))
    displayAll.append(displayArray[i])
    displayAll.appendChild(document.createElement('br'))

}