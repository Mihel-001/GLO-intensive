//находим активные зоны аккордеона
const contents = document.querySelectorAll('.program-line__content')

//Перебираем их в цикле 
contents.forEach((elem) => {
    //находим элементы заголовка и описания
    const title = elem.querySelector('.program-line__title')
    const descr = elem.querySelector('.program-line__descr')

    //вешаем на заголовок перехватчик и если ловим  клик - меняем у описания класс active
    title.addEventListener('click', () => {
        descr.classList.toggle('active')
    })
})