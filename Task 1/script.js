let input = document.getElementById('inputTask');
let toDoList = document.getElementById('list');

function addTodo() {
    let li = document.createElement('li');
    li.innerText = input.value;
    
    //------Delete--------------
    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });
    

    li.appendChild(deleteBtn);
    toDoList.appendChild(li);  
    input.value = "";
  }
  //-------Delete All------------
  function DeleteAll() {
    list.innerHTML = "";
  }
  