let cards = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6,'7 Look yours', '7 Look yours', '7 Look yours', '7 Look yours', '8 Look yours', '8 Look yours', '8 Look yours', '8 Look yours' , '9 Look other', '9 Look other', '9 Look other', '9 Look other', '10 Look other', '10 Look other', '10 Look other', '10 Look other', 'Skiro', 'Skiro', 'Skiro' , 'Skiro', '+20', '+20', '+20', '+20', 'Drill', 'Drill', '-1', 'TaG', 'TaG', 'TaG', 'TaG', 'TaR', 'TaR'];
let number_of_cards = cards.length - 1;

let player1 = [];
let player2 = [];
let player3 = [];
let player4 = [];
const card1 = document.querySelector('.card1')
const card2 = document.querySelector('.card2')
const card3 = document.querySelector('.card3')
const card4 = document.querySelector('.card4')
const card5 = document.querySelector('.card5')
const card6 = document.querySelector('.card6')
const card7 = document.querySelector('.card7')
const card8 = document.querySelector('.card8')
const card9 = document.querySelector('.card9')
const card10 = document.querySelector('.card10')
const card11 = document.querySelector('.card11')
const card12 = document.querySelector('.card12')
const card13 = document.querySelector('.card13')
const card14 = document.querySelector('.card14')
const card15 = document.querySelector('.card15')
const card16 = document.querySelector('.card16')


const not_use = document.querySelector('.not_use')
const used = document.querySelector('.used')

function CardRandom( R ){
    let RC = Math.floor(Math.random()*R)
    return RC;
}

for (let i = 0 ; i < 4 ; i ++){
    let x = CardRandom(number_of_cards)
    player1[i] = cards[x]
    cards.splice(x , 1)
    number_of_cards --
   
}
for (let i = 0 ; i < 4 ; i ++){
    let x = CardRandom(number_of_cards)
    player2[i] = cards[x]
    cards.splice(x , 1)
    number_of_cards --
}
for (let i = 0 ; i < 4 ; i ++){
    let x = CardRandom(number_of_cards)
    player3[i] = cards[x]
    cards.splice(x , 1)
    number_of_cards --

}
for (let i = 0 ; i < 4 ; i ++){
    let x = CardRandom(number_of_cards)
    player4[i] = cards[x]
    cards.splice(x , 1)
    number_of_cards --

}
console.log(cards)
// player1
card1.addEventListener("mouseover" , (e) =>{
    e.target.innerText = player1[0]
})
card1.addEventListener("mouseleave" , (e) =>{
    e.target.innerText = 'CARD'
})

card2.addEventListener("mouseover" , (e) =>{
    e.target.innerText = player1[1]
})
card2.addEventListener("mouseleave" , (e) =>{
    e.target.innerText = 'CARD'
})

card3.addEventListener("mouseover" , (e) =>{
    e.target.innerText = player1[2]
})
card3.addEventListener("mouseleave" , (e) =>{
    e.target.innerText = 'CARD'
})

card4.addEventListener("mouseover" , (e) =>{
    e.target.innerText = player1[3]
})
card4.addEventListener("mouseleave" , (e) =>{
    e.target.innerText = 'CARD'
})

// player2

card5.addEventListener("mouseover" , (e) =>{
    e.target.innerText = player2[0]
})
card5.addEventListener("mouseleave" , (e) =>{
    e.target.innerText = 'CARD'
})

card6.addEventListener("mouseover" , (e) =>{
    e.target.innerText = player2[1]
})
card6.addEventListener("mouseleave" , (e) =>{
    e.target.innerText = 'CARD'
})

card7.addEventListener("mouseover" , (e) =>{
    e.target.innerText = player2[2]
})
card7.addEventListener("mouseleave" , (e) =>{
    e.target.innerText = 'CARD'
})

card8.addEventListener("mouseover" , (e) =>{
    e.target.innerText = player2[3]
})
card8.addEventListener("mouseleave" , (e) =>{
    e.target.innerText = 'CARD'
})

// player3

card9.addEventListener("mouseover" , (e) =>{
    e.target.innerText = player3[0]
})
card9.addEventListener("mouseleave" , (e) =>{
    e.target.innerText = 'CARD'
})
card10.addEventListener("mouseover" , (e) =>{
    e.target.innerText = player3[1]
})
card10.addEventListener("mouseleave" , (e) =>{
    e.target.innerText = 'CARD'
})
card11.addEventListener("mouseover" , (e) =>{
    e.target.innerText = player3[2]
})
card11.addEventListener("mouseleave" , (e) =>{
    e.target.innerText = 'CARD'
})
card12.addEventListener("mouseover" , (e) =>{
    e.target.innerText = player3[3]
})
card12.addEventListener("mouseleave" , (e) =>{
    e.target.innerText = 'CARD'
})
// player 4

card13.addEventListener("mouseover" , (e) =>{
    e.target.innerText = player4[0]
})
card13.addEventListener("mouseleave" , (e) =>{
    e.target.innerText = 'CARD'
})
card14.addEventListener("mouseover" , (e) =>{
    e.target.innerText = player4[1]
})
card14.addEventListener("mouseleave" , (e) =>{
    e.target.innerText = 'CARD'
})
card15.addEventListener("mouseover" , (e) =>{
    e.target.innerText = player4[2]
})
card15.addEventListener("mouseleave" , (e) =>{
    e.target.innerText = 'CARD'
})
card16.addEventListener("mouseover" , (e) =>{
    e.target.innerText = player4[3]
})
card16.addEventListener("mouseleave" , (e) =>{
    e.target.innerText = 'CARD'
})
// remain cards
let z = 0 ;
let lastcard = ['CARD'];
not_use.addEventListener("click" , (e) => {
    let x = CardRandom(number_of_cards)
    e.target.innerText = cards[x]
    used.innerText = lastcard[z]
    z ++
    lastcard[z] = cards[x]
    cards.splice(x , 1)
    if(number_of_cards <= 0){
        e.target.innerText = 'END'
        used.innerText = 'END'
    }
    number_of_cards--
})

