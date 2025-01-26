console.log("12-topshiriq");

let ism = 'Omina'
let yosh = 15
let ielts = '9 ball'
console.log(ism, yosh, ielts);


console.log("14-topshiriq");
function talaba() {
    let talabaIsmi = prompt()
    console.log(talabaIsmi);
}
talaba()

console.log("15-topshiriq");
let massiv = ['Omina', 'Salidjanova', 'Rustam qizi']
console.log(massiv);

console.log("16-topshiriq");
let user = {
    F_I_Sh: `Salidjanoba Omina Rustamovna`,
    yil: 2009,
    yosh: 15
}

console.log("17-topshiriq");
console.log(user);

console.log("18-topshiriq");
let massiv2 = ['asus', 'hp', 'lenovo', 'acer', 'apple']
console.log(massiv2);
massiv2.pop()
console.log(massiv2);

console.log("19-topshiriq");
massiv2.splice()
console.log(massiv2);

console.log("19-topshiriq");
let yosh2 = 9
let natija2 = (yosh2 > 10) ? 'Katta' : 'Kichik'
console.log(natija2);

console.log("22,23,24,25-topshiriqlar");
let btn2 = document.querySelector('.btn2')
let salom = document.querySelector('.salom')
btn2.addEventListener('click', () => {
    salom.innerHTML = 'salom'
})

// 23-topshiriq
let btn3 = document.querySelector('.btn3')
btn3.addEventListener('click', () => {
   salom.style.color = 'red'
})

// 24-topshiriq
let btn4 = document.querySelector('.btn4')
let body = document.querySelector('body')
btn4.addEventListener('click', () => {
    body.style.backgroundColor = 'green'
})

let btn5 = document.querySelector('.btn5')
btn5.addEventListener('click', () => {
    body.style.backgroundColor = 'white'
    salom.style.color = 'black'
})

// 25-topshiriq
let btn6 = document.querySelector('.btn6')
let images = document.querySelector('.images')
btn6.addEventListener('click', () => {
   images.style.borderRadius = '50%'
})
