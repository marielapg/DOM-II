// Your code goes here
let link = document.querySelectorAll(".nav .nav-link");

 link.forEach(element => {
     element.addEventListener('click', (event) => {
         element.style.backgroundColor = 'blue';
         element.style.color = 'white';
         event.preventDefault();
         Me.to(element, 3, {y:100, rotation: 90});

     })
 })