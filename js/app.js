const btnEl1 = document.querySelector('.btnAlt1');
const btnEl2 = document.querySelector('.btnAlt2');
const btnEl3 = document.querySelector('.btnAlt3');
const btnEl4 = document.querySelector('.btnAlt4');
const btnEl5 = document.querySelector('.btnAlt5');
const btnEl6 = document.querySelector('.btnAlt6');

const divRowEl = document.querySelectorAll('.row');
const projectEl = document.querySelector('.project-container');
const col6El = document.querySelectorAll('.col-6');
let screenSize = window.matchMedia("(max-width: 760px)");

function mediaQuery(screenSize) {
    if(screenSize.matches) {
        for(let item of divRowEl) {
            item.classList.remove('row');
            item.classList.add('row-mobile')
        }
        for (let col of col6El) {
            col.classList.remove('col-6');
            col.classList.add('col-mobile');
        }
        projectEl.classList.add('project-mobile');
    } else {
        for(let item of divRowEl){
            item.classList.add('row');
        }
        for (let col of col6El) {
            col.classList.add('col-6');
        }
        projectEl.classList.remove('project-mobile');
    }
}

function hover() {
// Adding Event Listeners
    btnEl1.addEventListener("mouseover", () => btnEl1.classList.add('btnHover'));
    btnEl1.addEventListener("mouseout", () => btnEl1.classList.remove('btnHover'));
    btnEl2.addEventListener("mouseover", () => btnEl2.classList.add('btnHover'));
    btnEl2.addEventListener("mouseout",() => btnEl2.classList.remove('btnHover'));
    btnEl3.addEventListener("mouseover", () => btnEl3.classList.add('btnHover'));
    btnEl3.addEventListener("mouseout",() => btnEl3.classList.remove('btnHover'));
    btnEl4.addEventListener("mouseover", () => btnEl4.classList.add('btnHover'));
    btnEl4.addEventListener("mouseout",() => btnEl4.classList.remove('btnHover'));
    btnEl5.addEventListener("mouseover", () => btnEl5.classList.add('btnHover'));
    btnEl5.addEventListener("mouseout",() => btnEl5.classList.remove('btnHover'));
    btnEl6.addEventListener("mouseover", () => btnEl6.classList.add("btnHover2"));
    btnEl6.addEventListener("mouseout",() => btnEl6.classList.remove('btnHover2'));
}


hover();
mediaQuery(screenSize);
screenSize.addListener(mediaQuery);