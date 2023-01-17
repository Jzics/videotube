let menuIcon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".sidebar");
let container = document.querySelector(".container");

const menuItems = document.querySelectorAll(".shortcut-links");
menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}


// const changeActive = () => {
//     menuItems.forEach(item => {
//         item.classList.remove('active');
//     })
// }

// // change the anchor item color when clicked
// menuItems.forEach(item => {
//     item.addEventListener('click', () => {
//         changeActive();
//         item.classList.add('active');
//         if(item.className != 'active'){
//             document.querySelector('.non-active').style.color = 'none';
//         } else {
//             document.querySelector('.non-active').style.color = 'red';
//         }
//     }) 
// })


