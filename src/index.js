import './style.css';

const tabs = Array.from(document.querySelector('.tabs').children);
const items = Array.from(document.querySelector('.main').children);


window.onload = function () {
    items.forEach(current => {
        if (current.classList.contains('show')) {
            current.style.maxHeight = current.scrollHeight +'px';
            current.classList.remove('show');
        } else {
            current.style.maxHeight = 0 + 'px';
        }
    });
};


    


tabs.forEach((current, index) => {
    current.addEventListener('click', () => {

        // Reseting maxHeight on other elements
        for (let i = 0; i < items.length; i++) {
            if (i !== index) {
                items[i].style.maxHeight = 0 + 'px';
            }
        };

        // Change maxHeight property
        if (items[index].style.maxHeight === 0 + 'px') {
            items[index].style.maxHeight = items[index].scrollHeight + 'px'
        } else {
            items[index].style.maxHeight = 0 + 'px';
        }
    });
        
});


// const tabs = Array.from(document.querySelector('.tabs').children);
// const items = Array.from(document.querySelector('.tab-items').children);

// tabs.forEach((current, index) => {
//     current.addEventListener('click', () => {

//         // Reseting maxHeight on other elements
//         for (let i = 0; i < items.length; i++) {
//             if (i !== index) {
//                 items[i].classList.remove('show');
//             }
//         };

//         items[index].classList.toggle('show');
//     });

// });