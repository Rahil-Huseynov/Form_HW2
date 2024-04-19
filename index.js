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
const direction = document.getElementById('direction');
const search = document.getElementById('search');
const seat1 = document.getElementById('seat1');
const seat2 = document.getElementById('seat2');
const seat3 = document.getElementById('seat3');
const seat4 = document.getElementById('seat4');
const seat5 = document.getElementById('seat5');
const seat6 = document.getElementById('seat6');
const seat7 = document.getElementById('seat7');
const seat8 = document.getElementById('seat8');
const seat9 = document.getElementById('seat9');
const seat10 = document.getElementById('seat10');
const seat11 = document.getElementById('seat11');
const seat12 = document.getElementById('seat12');
const seat13 = document.getElementById('seat13');
const seat14 = document.getElementById('seat14');
const seat15 = document.getElementById('seat15');
const seat16 = document.getElementById('seat16');
const seat17 = document.getElementById('seat17');
const seat18 = document.getElementById('seat18');
const seat19 = document.getElementById('seat19');
const seat20 = document.getElementById('seat20');
const seat21 = document.getElementById('seat21');
const seat22 = document.getElementById('seat22');
const seat23 = document.getElementById('seat23');
const seat24 = document.getElementById('seat24');
const seat25 = document.getElementById('seat25');
const seat26 = document.getElementById('seat26');
const seat27 = document.getElementById('seat27');
const seat28 = document.getElementById('seat28');

const total_price = document.getElementById('total_price')
const tbody = document.querySelector('tbody');

let tickets = [];

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
let totalprice = 0

function renderTickets() {
    tbody.innerHTML = '';


    tickets.forEach((ticket) => {

        const row = document.createElement('tr');

        const direction = document.createElement('td');

        const date = document.createElement('td');

        const seat = document.createElement('td');

        tbody.appendChild(row);

        row.appendChild(direction)

        row.appendChild(date)

        row.appendChild(seat)

        if (seat1.checked) {
            ticket.seat = 1
            seat1.setAttribute("disabled", "")
        }

        if (seat2.checked) {
            ticket.seat = 2
            seat2.setAttribute("disabled", "")
        }

        if (seat3.checked) {
            ticket.seat = 3
            seat3.setAttribute("disabled", "")

        }

        if (seat4.checked) {
            ticket.seat = 4
            seat4.setAttribute("disabled", "")
        }

        if (seat5.checked) {
            ticket.seat = 5
            seat5.setAttribute("disabled", "")

        }

        if (seat6.checked) {
            ticket.seat = 6
            seat6.setAttribute("disabled", "")

        }
        if (seat7.checked) {
            ticket.seat = 7
            seat7.setAttribute("disabled", "")

        }
        if (seat8.checked) {
            ticket.seat = 8
            seat8.setAttribute("disabled", "")

        }
        if (seat9.checked) {
            ticket.seat = 9
            seat9.setAttribute("disabled", "")

        }
        if (seat10.checked) {
            ticket.seat = 10
            seat10.setAttribute("disabled", "")

        }
        if (seat11.checked) {
            ticket.seat = 11
            seat11.setAttribute("disabled", "")

        }
        if (seat12.checked) {
            ticket.seat = 12
            seat12.setAttribute("disabled", "")

        }
        if (seat13.checked) {
            ticket.seat = 13
            seat13.setAttribute("disabled", "")

        }
        if (seat14.checked) {
            ticket.seat = 14
            seat14.setAttribute("disabled", "")

        }
        if (seat15.checked) {
            ticket.seat = 15
            seat15.setAttribute("disabled", "")

        }
        if (seat16.checked) {
            ticket.seat = 16
            seat16.setAttribute("disabled", "")

        }
        if (seat17.checked) {
            ticket.seat = 17
            seat17.setAttribute("disabled", "")

        }
        if (seat18.checked) {
            ticket.seat = 18
            seat18.setAttribute("disabled", "")

        }
        if (seat19.checked) {
            ticket.seat = 19
            seat19.setAttribute("disabled", "")

        }
        if (seat20.checked) {
            ticket.seat = 20
            seat20.setAttribute("disabled", "")

        }
        if (seat21.checked) {
            ticket.seat = 21
            seat21.setAttribute("disabled", "")

        }
        if (seat22.checked) {
            ticket.seat = 22
            seat22.setAttribute("disabled", "")

        }
        if (seat23.checked) {
            ticket.seat = 23
            seat23.setAttribute("disabled", "")

        }
        if (seat24.checked) {
            ticket.seat = 24
            seat24.setAttribute("disabled", "")

        }
        if (seat25.checked) {
            ticket.seat = 25
            seat25.setAttribute("disabled", "")

        }
        if (seat26.checked) {
            ticket.seat = 26
            seat26.setAttribute("disabled", "")

        }
        if (seat27.checked) {
            ticket.seat = 27
            seat27.setAttribute("disabled", "")

        }
        if (seat28.checked) {
            ticket.seat = 28
            seat28.setAttribute("disabled", "")

        }
        
        if(ticket.date){
            date.innerHTML = `${ticket.date}`
        }else{
            date.innerHTML =  'Vaxt qeyd olunmayib'  
        }

        if(ticket.seat){
            seat.innerHTML = `${ticket.seat}`
        }else{
            seat.innerHTML =  'Oturacaq qeyd olunmayib'  
        }


        
        if(ticket.direction){
            direction.innerHTML = `${ticket.direction}`
        }else{
            direction.innerHTML =  'Vaxt qeyd olunmayib'  
        }

    });
    total_price.innerHTML = `Total price = ${totalprice}$`
}

search.addEventListener('click', () => {
    if (seat1.checked || seat2.checked || seat3.checked || seat4.checked || seat5.checked || seat6.checked || seat7.checked || seat8.checked || seat9.checked || seat10.checked || seat11.checked || seat12.checked || seat13.checked || seat14.checked || seat15.checked || seat16.checked || seat17.checked || seat18.checked || seat19.checked || seat20.checked || seat21.checked || seat22.checked || seat23.checked || seat24.checked || seat25.checked || seat26.checked || seat27.checked || seat28.checked) {
        totalprice += 20
    }
})

