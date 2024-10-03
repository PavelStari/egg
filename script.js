let egg = document.querySelector('.egg')
let images = ['https://algoritmika.org/uploads/2023/04/egg1.png', 'https://algoritmika.org/uploads/2023/04/egg2.png', 'https://algoritmika.org/uploads/2023/04/egg3.png', 'https://algoritmika.org/uploads/2023/04/egg4.png', 'https://algoritmika.org/uploads/2023/04/egg5.png', 'https://algoritmika.org/uploads/2023/04/egg6.png', 'https://algoritmika.org/uploads/2023/04/egg7.png']
let clicks = 0

egg.addEventListener('click', function() {
    clicks++
    if (clicks==3) {
        egg.innerHTML = `<img src=${images[1]}>`
    }
    else if (clicks==6) {
        egg.innerHTML = `<img src=${images[2]}>`
    }
    else if (clicks ==9) {
        egg.innerHTML = `<img src=${images[3]}>`
    }
    else if (clicks == 12) {
        egg.innerHTML = `<img src=${images[4]}>`
    }
    else if (clicks == 15) {
        egg.innerHTML = `<img src=${images[5]}>`
    }
    else if (clicks == 18) {
        egg.innerHTML = `<img src=${images[6]}>`
    }
    anime({
        targets: '.egg',
        scale: [
            {value: 1.1},
            {value: 1},
        ],
        rotate: [
            {value: 3},
            {value: -3},
        ],
        duration: 160,
        easing: 'linear'
    })
})
