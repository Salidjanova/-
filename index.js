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

//26-topshiriq
let btn7 = document.querySelector('.btn7')
btn7.addEventListener('click', () => {
    images.style.display = 'none'
})

// 27-topshiriq
let btn8 = document.querySelector('.btn8')
let h31 = document.querySelector('.h31')
btn8.addEventListener('click', () => {
    h31.style.display = 'none'
})

// 28-topshiriq
let btn9 = document.querySelector('.btn8')
btn9.addEventListener('click', () => {
    body.style.display = 'none'
})

// 31-topshiriq
let btn10 = document.querySelector('.btn10')
let h21 = document.querySelectorAll('.h21')
btn10.addEventListener('click', () => {
    for (value of h21) {
        value.classList.add('h22')
    }
})

//32-topshiriq
$(".jq1").click(function (e) { 
    e.preventDefault();
    $("body").css("background-color", "red")
});

// 33-topshiriq
$('.button').click(function (e) { 
    e.preventDefault();
    $('.rasmOch').css("display", "none")
});

// 34-topshiriq
$('.button2').click(function (e) { 
    e.preventDefault();
    $('.img').css("border-radius", "50%")
});

// 35-topshiriq
$('.button3').click(function (e) { 
    e.preventDefault();
    $('.button3').css("display", "none")
});