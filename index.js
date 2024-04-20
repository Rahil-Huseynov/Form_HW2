// // Task-1
const form = document.getElementById('formId');

const result_container = document.getElementById('result_container');
const button = document.getElementById('button1');
const message_container = document.getElementById('message_container');

let result = [];

form.addEventListener('submit', (e) => {

    e.preventDefault();

    const data = new FormData(e.target);

    const formValues = {};

    for (let [key, value] of data.entries()) {
        formValues[key] = value;
    }
    formValues.id = Math.trunc(Math.random() * 1000);

    formValues.isComplete = false;

    result.push(formValues);

    message();
});

function message() {
    result_container.innerHTML = '';

    result.forEach((result) => {

        const allitemsmessage = document.createElement('div');
        const elementdiv = document.createElement('div');

        elementdiv.classList.add('elementdiv')

        const nameContainer = document.createElement('span');

        const dateContainer = document.createElement('span');

        const partition = document.createElement('div');

        const message_result_div = document.createElement('div');

        const messageContainer = document.createElement('div');

        nameContainer.textContent = `Name: ${result.name}`;

        dateContainer.textContent = `Date: ${new Date().toLocaleString()}`;

        messageContainer.textContent = `Message: ${result.message}`;

        elementdiv.appendChild(nameContainer);

        elementdiv.appendChild(dateContainer);

        message_result_div.appendChild(messageContainer)

        result_container.appendChild(allitemsmessage)

        allitemsmessage.appendChild(elementdiv);

        allitemsmessage.appendChild(partition);

        allitemsmessage.appendChild(message_result_div);

        allitemsmessage.classList.add('allitemsmessage')
        partition.classList.add('partition')
        messageContainer.classList.add('messageContainer')

        message_container.style.display = 'none'
    });
}



// Task-2


const form1 = document.getElementById('formId1');

const bold = document.getElementById('bold');

const underline = document.getElementById('underline');

const italics = document.getElementById('italics');

const left = document.getElementById('left');

const right = document.getElementById('right');

const justify = document.getElementById('justify');

const result_show_text = document.getElementById('result_show_text');

let tasks1 = [];

form1.addEventListener('submit', (e) => {

    e.preventDefault();

    const data = new FormData(e.target);

    const formValues = {};

    for (let [key, value] of data.entries()) {

        formValues[key] = value;

    }
    formValues.id = Math.trunc(Math.random() * 1000);

    formValues.isComplete = false;

    tasks1.push(formValues);

    select_type_words();
});

function select_type_words() {

    result_show_text.innerHTML = '';

    const p = document.createElement('p');
    tasks1.forEach((task) => {


        let text = task.textarea;

        if (bold.checked) {
            text = `<strong>${text}</strong>`;
        }

        if (underline.checked) {
            text = `<u>${text}</u>`;
        }

        if (italics.checked) {
            text = `<em>${text}</em>`;
        }

        if (left.checked) {
            p.style.textAlign = 'left';
        }
        else if (right.checked) {
            p.style.textAlign = 'right';
        }
        else if (justify.checked) {
            p.style.textAlign = 'center';
        }
        p.innerHTML = text;

    });
    result_show_text.appendChild(p);
}




// Task-3


const form2 = document.getElementById('formId2');

const answer = document.getElementById('answer');

const answer1 = document.getElementById('answer1');

const answer2 = document.getElementById('answer2');

const answer3 = document.getElementById('answer3');

const answer4 = document.getElementById('answer4');

const next = document.getElementById('next');

const finish = document.getElementById('finish');

const task1 = document.getElementById('task1')

const task2 = document.getElementById('task2')

let tasks2 = [];

form2.addEventListener('submit', (e) => {

    e.preventDefault();

    const data = new FormData(e.target);

    const formValues = {};

    for (let [key, value] of data.entries()) {
        formValues[key] = value;
    }

    formValues.id = Math.trunc(Math.random() * 1000);

    formValues.isComplete = false;

    tasks2.push(formValues);

    question();
});

function question() {
    let count = 0

    if (answer1.checked) {
        count++
    }

    if (answer4.checked) {
        count++
    }

    answer.innerHTML = `Result:${count} correct answer to 2 questions.`
}

next.addEventListener('click', () => {
    if (answer1.checked || answer2.checked) {
        finish.style.display = 'block'
        next.style.display = 'none'
        task2.style.display = 'block'
        task1.style.display = 'none'
    }
})

finish.addEventListener('click', () => {
    if (answer3.checked || answer4.checked) {
        finish.style.display = 'none'
        answer.style.display = 'block'
    }
})


// Task-4
const form3 = document.getElementById('formId3');

const search = document.getElementById('search');

const checkboxes = document.querySelectorAll('.seat input[type="checkbox"]');

const total_price = document.getElementById('total_price')

const sell_about = document.getElementById('sell_about')

const tbody = document.querySelector('tbody');

const select = document.getElementById('select')

const date = document.getElementById('date')
let tickets = [];

let totalprice = 0;

checkboxes.forEach(checkbox => {

    checkbox.addEventListener('change', () => {
        updateTickets();
    });
});


form3.addEventListener('submit', (e) => {

    e.preventDefault();

    const data = new FormData(e.target);

    const ticket = {};

    for (let [key, value] of data.entries()) {

        ticket[key] = value;
    }

    tickets.push(ticket);

    renderTickets();
});

function updateTickets() {

    tickets = [];

    checkboxes.forEach(checkbox => {

        if (checkbox.checked) {
            tickets.push({ seat: checkbox.id.replace('seat', '') });
        }
    });

    renderTickets();
}

function renderTickets() {

    tbody.innerHTML = '';


    tickets.forEach((ticket) => {
        const row = document.createElement('tr');

        const direction = document.createElement('td');

        const date_element = document.createElement('td');

        const seat = document.createElement('td');

        tbody.appendChild(row);

        row.appendChild(direction)

        row.appendChild(date_element)

        row.appendChild(seat)
        
        if (date.value) {
            date_element.innerHTML = date.value
        } else {
            date_element.innerHTML = 'Vaxt qeyd olunmayib'
        }

        if (ticket.seat) {
            seat.innerHTML = `${ticket.seat}`
        } else {
            seat.innerHTML = 'Oturacaq qeyd olunmayib'
        }

        if (select.value) {
            direction.innerHTML = select.value
        } else {
            direction.innerHTML = 'Səfər qeyd olunmayib'
        }

    });
    total_price.innerHTML = `Total price = ${totalprice}$`
 
}

search.addEventListener('click', () => {
    if (tickets.length > 0) {
        totalprice += 20 * tickets.length;
    }
})