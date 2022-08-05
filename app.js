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



    const ul2 = document.createElement('ul')
    todos.forEach((tdo) => {
        const li = document.createElement('li')
        const deleteButton = document.createElement('button')

        li.innerText = tdo
        deleteButton.innerText = "delete  " + tdo

        deleteButton.addEventListener('click', () => {
            li.parentElement.removeChild(li)
            deleteButton.parentElement.removeChild(deleteButton)
        })

        // ul2.appendChild(li)
        // ul2.appendChild(deleteButton)

        areaTodo.appendChild(li)
        areaTodo.appendChild(deleteButton)

    })
    // document.body.appendChild(ul2)



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

// const ul = document.createElement('ul')
// const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// numArr.forEach((number) => {
//     const li = document.createElement('li')
//     const deleteButton = document.createElement('button')

//     li.innerText = number
//     deleteButton.innerText = "delete " + number

//     deleteButton.addEventListener('click', () => {
//         li.parentElement.removeChild(li)
//         deleteButton.parentElement.removeChild(deleteButton)
//     })

//     ul.appendChild(li)
//     ul.appendChild(deleteButton)
// })
// document.body.appendChild(ul)



// const div = document.createElement('div');
// div.className = 'foo';

// // our starting state: <div class="foo"></div>
// console.log(div.outerHTML);

// // use the classList API to remove and add classes
// div.classList.remove("foo");
// div.classList.add("anotherclass");

// // <div class="anotherclass"></div>
// console.log(div.outerHTML);

// // if visible is set remove it, otherwise add it
// div.classList.toggle("visible");

// // add/remove visible, depending on test conditional, i less than 10
// div.classList.toggle("visible", i < 10);

// console.log(div.classList.contains("foo"));

// // add or remove multiple classes
// div.classList.add("foo", "bar", "baz");
// div.classList.remove("foo", "bar", "baz");

// // add or remove multiple classes using spread syntax
// const cls = ["foo", "bar"];
// div.classList.add(...cls);
// div.classList.remove(...cls);

// // replace class "foo" with class "bar"
// div.classList.replace("foo", "bar");