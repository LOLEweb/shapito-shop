const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up')
const popUpBody = document.getElementById('pop_up_body')

const openPopUpReg = document.getElementById('open_pop_up_reg')
const popUpReg = document.getElementById('pop_up_reg')
const closePopUpReg = document.getElementById('pop_up_close_reg')
const openPopUpUnReg = document.getElementById('open_pop_up_unreg')

tippy('[data-tippy-content]');

openPopUpReg.addEventListener('click', function (e) {
    e.preventDefault();
    popUpReg.classList.add('active_reg')
    popUp.classList.remove('active')
})

closePopUpReg.addEventListener('click', () => {
    popUpReg.classList.remove('active_reg')
})

openPopUpUnReg.addEventListener('click', function (e) {
    popUpReg.classList.remove('active_reg')
    popUp.classList.add('active');
})


/*  */

openPopUp.addEventListener('click', function (e) {
    e.preventDefault();
    popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active')
})

/* tab */

const tabItems = Array.from(document.querySelectorAll('.tab-item'))
const contentItems = Array.from(document.querySelectorAll('.content-item'))

const clearActiveClass = (element, className = 'is-active') => {
    element.find(item => item.classList.remove(`${className}`))
}

const setActiveClass = (element, index, className = 'is-active') => {
    element[index].classList.add(`${className}`)
}

const checkoutTabs = (item, index) => {
    item.addEventListener('click', () => {

        if (item.classList.contains('is-active')) return
        console.log(item)

        clearActiveClass(tabItems)
        clearActiveClass(contentItems)

        setActiveClass(tabItems, index)
        setActiveClass(contentItems, index)
    })
}

tabItems.forEach(checkoutTabs)