'use strict';

const clear = document.querySelector('.clear'),
      dateElement = document.getElementById('date'),
      list = document.getElementById('list'),
      input = document.getElementById('input');

// Classes names
const CHECK = 'fa-check-circle',
      UNCHECK = 'fa-circle-thin',
      LINE_THROUGH = 'lineThrough';

let LIST = [], 
    id = 0;

const options = {weekday : 'long', month: 'short', day: 'numeric'};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString('en-GB', options);

function addToDo(toDo, id, done, trash) {
    if (trash) {
        return;
    }

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : '';

    const item = `
        <li class = "item">
            <i class="fa ${DONE} co" job="complete" id ="${id}"></i>
            <p class="text ${LINE}">${toDo}</p>
            <i class="fa fa-trash-o de" job="delete" id ="${id}></i>
        </li>
    `;

    const position = 'beforeend';

    list.insertAdjacentHTML(position, item);
}

document.addEventListener('keyup', function(event) {
    if (event.keyCode == 13) {
        const toDo = input.value;

        if(toDo) {
            addToDo(toDo, id, false, false);

            LIST.push({
                name: toDo,
                id: id,
                done: false,
                trash: false
            });

            id++;
        }
        input.value = '';
    }
});
