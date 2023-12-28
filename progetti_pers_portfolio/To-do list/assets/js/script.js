
let time = document.getElementById('time');
let buttonAdd = document.getElementById('btn');
let list = document.getElementById('to-do-list');

let arrayList = JSON.parse(localStorage.getItem( 'to-do-list' ));

function addTask(){
    let task = document.getElementById('input-text').value;
    checkValidity(task);
}


function checkValidity(task){
    let double = arrayList.find((element) => element === task);
    if(task === '' || double !== undefined){
       return alert('Please enter a  valid task');
    }
    else{
        arrayList.push(task);
        return validTask();
    }
}

function validTask(){
   localStorage.setItem('to-do-list', JSON.stringify(arrayList));
   let arrayStored = JSON.parse(localStorage.getItem( 'to-do-list' ));
   list.innerHTML = '';
   arrayStored.forEach(element => {
    let listElement = document.createElement('li');
    listElement.innerHTML = `
    <span>${element}</span>
    <button class="button-delete" onclick="deleteTask(this)"> Delete </button>
    `;
    list.appendChild(listElement);
   });
}
/* console.log(arrayList); */


function deleteTask(element){
    let listText = element.previousElementSibling.innerText;
    arrayList.splice(arrayList.indexOf(listText), 1);
    validTask();
}




window.onload = () => {
    validTask();
}
