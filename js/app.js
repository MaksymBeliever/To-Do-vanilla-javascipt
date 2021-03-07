'use strict';

const clear = document.querySelector('.clear'),
      dateElement = document.getElementById('date'),
      list = document.getElementById('list'),
      input = document.getElementById('input');

// Classes names
const CHECK = 'fa-check-circle',
      UNCHECK = 'fa-circle-thin',
      LINE_THROUGH = 'lineThrough';

const options = {weekday : 'long', month: 'short', day: 'numeric'};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString('en-GB', options);

function addToDo(toDo) {
    const item = `
        <li class = "item">
            <i class="fa fa-circle-thin co" job="complete" id="0"></i>
            <p class="text">${toDo}</p>
            <i class="fa fa-trash-o de" job="delete" id="0"></i>
        </li>
    `;

    const position = 'beforeend';

    list.insertAdjacentHTML(position, item);
}

addToDo('drink coffee'); 