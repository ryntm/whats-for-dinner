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

// console.log(thisArray)

// localStorage.setItem('hi', JSON.stringify(thisArray))

console.log([localStorage['hi']])

// let choosen = thisArray[Math.floor(Math.random() * thisArray.length)]

// console.log(choosen)

let newMeal = document.getElementById('addmeal')
let doc = document.getElementById('doc')

console.log(newMeal.value)

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
        
        // reload for now
        window.location.reload()
        // without it loading, I need to create a span with an ID following the last span. 



    } else {
        alert('There is no meal to add in text field.')
    }
})



for (let i = 0; i < JSON.parse(localStorage.getItem('hi')).length; i++) {
    let displayArray = JSON.parse(localStorage.getItem('hi'))
    let x = document.createElement(`a`)
    x.append(`[x]`)
    x.setAttribute('id', `${i}`)
    x.setAttribute('href', ``)
    x.setAttribute('class', `delete-dinner`)
    displayAll.append(x, displayArray[i])
    // document.getElementById(`dinner${i}`).append(displayArray[i])
    displayAll.appendChild(document.createElement('br'))

}

let deleteMeal = document.getElementsByClassName('delete-dinner')

for (let i = 0; i < deleteMeal.length; i++) {
    console.log(deleteMeal[i])
    deleteMeal[i].addEventListener('click', (e) => {
        
        let deleteId = e.path[0].getAttribute('id')
        console.log(deleteId)
        let newArray = JSON.parse(localStorage.getItem('hi'))
        console.log(newArray)
        newArray.splice(deleteId, 1)
        console.log(newArray)
        localStorage.setItem('hi', JSON.stringify(newArray))
        window.location.reload()
    }, false)
}



console.log(deleteMeal)

// deleteMeal.addEventListener('click', (e) => {
//     let deleteId = e.path[0].getAttribute('id')
//     console.log(e.path[0].getAttribute('id'))
//     console.log(e.path)

//     JSON.parse(localStorage.getItem('hi')).splice(deleteId, deleteId)
// })