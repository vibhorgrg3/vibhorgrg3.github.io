const input = document.querySelector('input');
var counter = 0;
function func1() {
    // console.log(document.querySelector('input').value);
    const todoItem = document.querySelector('input').value;

    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');

    li.classList.add(`task`);
    li.classList.add('px-2');
    deleteBtn.classList.add('btn');
    deleteBtn.classList.add('btn-danger');
    deleteBtn.classList.add('rounded-pill');

    deleteBtn.innerHTML = `remove`;

    deleteBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.target.parentNode.remove();
    })
    li.innerHTML = `<div><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">  ${todoItem} </div>`;
    li.appendChild(deleteBtn);
    document.querySelector('ul').appendChild(li);
    input.value = "";
    counter++;

}

function func2() {
    if (event.keyCode == 13) {
        func1();
    }

}
// function deleteHandler(e)

input.addEventListener("keydown", func2);
document.querySelector('button').addEventListener('click', func1);




