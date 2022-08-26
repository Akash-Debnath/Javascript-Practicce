//   ### DOM selection and manipulation
let myName = document.getElementById('name');
 myName = document.querySelector('#name');
 myName.innerText = "Pulok";
// console.log(myName);

let designation = document.getElementsByTagName('h3.innerText');
// console.log(designation);

//  ## addEventListener onclick/onchange
myName.addEventListener('click', (e)=>{
    // console.log(e.target);
});

let darkButton = document.getElementById('dark');
darkButton.addEventListener('click', (e)=>{
    document.querySelector('body').innerHTML = "Dark"; //classList.add('bg-dark')
});


// #textNode, mouseevent, appendChild, firstItem
