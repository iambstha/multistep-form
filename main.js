const tabsForms = document.querySelector('.tabs-forms')
const arrTabsForm = Array.from(document.querySelectorAll('.tabs-form'))
const arrSelect = Array.from(document.querySelectorAll('.select-step'))
const arrBtns = Array.from(document.querySelectorAll('.btn'))
const arrBackBtns = Array.from(document.querySelectorAll('.back-btn'))
let width = tabsForms.clientWidth;
let xValue = 0,yValue = 0, i = 0;

arrTabsForm.map(tabs => {
    tabs.style.transform = `translateX(${xValue}px)`
    tabs.style.width = `${width}px`
    xValue += width;
})

xValue = width;
arrBtns.map(btn => {btn.addEventListener('click', () => {
    btn.style.pointerEvents = 'none'
    setTimeout(() => {
        if(btn.dataset.shoot === 'right'){
            arrSelect.forEach(a => {a.classList.remove('active')})
            arrSelect[arrBtns.indexOf(btn) + 1].classList.add('active')
            arrTabsForm.map(tabs => {
                tabs.style.transform = `translateX(${-xValue}px)`
                tabs.style.transition = `0.3s ease`
                xValue -= width;
            })
            xValue = (arrBtns.indexOf(btn) + 2) * width;
        }
        btn.style.cursor = 'pointer'
    }, 500);
})})