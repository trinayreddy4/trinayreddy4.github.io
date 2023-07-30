const button=document.getElementById("wishlistadd");
const todoContainer=document.getElementById("todoList");
const textfield=document.getElementById("wishlisttext");
let todo;
let todoList=[];

function uuid()
{
    return `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxx`.replace(/[xy]/g,(param)=>{
        let number=Math.random()*16|0;
        let randomNumber=param=='x'?number:(number & 0x3|0x8);
        return randomNumber.toString(16);
    });
}

button.addEventListener("click",(event)=>{
        event.preventDefault();
        todo=textfield.value;
        if(todo.length>0)
        {
            todoList.push({id:`${uuid()}`,todo,isCompleted:false});
            textfield.value="";
            renderTodoList(todoList);
        }
        else
        {
            alert("Please enter the Wish To Proceed");
        }
    }
);

todoContainer.addEventListener("click",(e)=>{
    let key=e.target.dataset.key;
    let deletebtn=e.target.dataset.todokey;
    todoList=todoList.map(todo=> todo.id===key? {...todo,isCompleted:!todo.isCompleted}:todo);
    todoList=todoList.filter(todo=>todo.id!==deletebtn);
    renderTodoList(todoList);

})


function renderTodoList(todolist)
{
    todoContainer.innerHTML=todoList.map(todo => `<div ><input id="item-${todo.id}" type="checkbox" data-key="${todo.id}" ${todo.isCompleted==true?"checked":""}><label for="item-${todo.id}" data-key="${todo.id}" class="${todo.isCompleted===true?"checked-todo":""}">${todo.todo}</label><button class="button" ><span class="material-symbols-outlined" data-todokey="${todo.id}">
    delete
    </span></button></div>`)
}

