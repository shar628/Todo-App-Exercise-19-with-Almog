const changeColor = document.querySelector('.button-change-color')
let colorDark = false;
changeColor.addEventListener('click', function (e) {
    console.log('ni');
    document.querySelector('.todo-container').style.backgroundColor = 'red';
    document.body.style.backgroundColor = colorDark ? 'yellow' : 'green';
    document.querySelector('.container').style.backgroundColor = colorDark ? 'grey' : 'white';

    colorDark = !colorDark;
}
)
const todos = [];


const addTodoInput = document.querySelector('.input1')

addTodoInput.addEventListener('keyup', function (e) {
    inputValue = e.target.value;
    console.log(inputValue);
    if (e.key === 'Enter') {
        console.log('HIGH');
        console.log(inputValue);
        console.log(e);
        console.log(todos);
        let paragraph = document.createElement('p');
        paragraph.innerText = inputValue;
        areaTodo.appendChild(paragraph);
    }
});

const areaTodo = document.querySelector('.area-container');

const addTodoList = () => {

}

const buttonAdd = document.querySelector('.button-add');

buttonAdd.addEventListener('click', function (e) {
    const newTodo = { title: inputValue, isCompleted: false, id: Date.now() };
    todos.push(newTodo);
    console.log(todos);
    let paragraph = document.createElement('p');
    paragraph.innerText = inputValue;
    areaTodo.appendChild(paragraph);
    addTodoInput.value = '';
    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = 'underline';
    })
    paragraph.addEventListener('dblclick', function () {
        areaTodo.removeChild(paragraph);
    })
});
