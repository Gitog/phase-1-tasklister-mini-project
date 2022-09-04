document.addEventListener("DOMContentLoaded", () => {
  console.log("Conected ...")
  // your code here
  // const toDoFrom = document.getElementById('create-task-form');
  const userInput = document.getElementById('new-task-description');
  
  const submitButon = document.querySelector('.submit')

  submitButon.addEventListener('click',(e)=>{
    e.preventDefault();
   populateList(userInput.value);

  } )
});

function populateList(value){
  const list = document.createElement('li');
  list.className = "userList";
  list.innerHTML=`
  <li>${value}
  <button id="delete">x</button>
  </li
  `
  const ulList = document.getElementById('tasks');

  ulList.append(list);
}


//deleting items from the list
document.addEventListener('click', function(e){
  if(e.target && e.target.id =='delete'){
    //pawn! Iwas unable to fully acheve deletion
    alert("deleted");

  }
})
  