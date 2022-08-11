document.querySelector('.b').addEventListener('click', () => {
    let data = document.querySelector('.s').value;
    document.querySelector('.out').innerHTML = data;

});

switch (select_type) { 
    case '1': // если value == 1 (выбрали встречу по проекту), то
        document.getElementById('select_2').removeAttribute('disabled'); // включи второй select, т.е. удали атрибут disabled
        counter = projects.length; // счётчик для количества проектов
        
        while (0 != counter){ // по итогу этого while в select появятся все проекты
            let optionLast = document.createElement('option');   // вписать в html у второго select новый <option></..>
            optionLast.setAttribute('value', projects[counter-1]); // value каждого option равен названию проекта
            optionLast.innerHTML = projects[counter-1]; // внутри нового option написать название проекта из массива проектов. Минус 1, т.к. нумерация в массиве с 0 элемента
            select_2.append(optionLast); // нашли по id нужный select, перед </select> вставили "<option> Project[0] </option>
            counter--;
            // console.log(document.getElementById('select_2')); // проверка 
        }
        break;
    case '2':
        document.getElementById('select_2').removeAttribute('disabled');
        counter = event.length; 
        while (0 != counter){
            let optionLast = document.createElement('option')
            optionLast.setAttribute('value', event[counter-1]);
            optionLast.innerHTML = event[counter-1]; 
            select_2.append(optionLast);
            counter--;
        }
}
counter = selected_type_of_meeting.length; // счётчик для количества 

// проверка на клик
// select_click.addEventListener('click', function() {  // ('что слушать' , 'call back')
//     //console.log('click')
// })



        // const value_1 = document.getElementById('#1');
        // console.log(value_1);

        // s1.onclick = function {
        //     console.log('Loter');
        // }

        // document.querySelector('.b').addEventListener('click', () => {
        //     let data = document.querySelector('.s').value;
        //     document.querySelector('.out').innerHTML = data;
        // });