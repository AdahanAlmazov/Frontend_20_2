const tabs = document.querySelectorAll(".tabheader__item")
const tabsParent = document.querySelector(".tabheader__items")
const tabContent = document.querySelectorAll(".tabcontent")


const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = "none"
    })
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active")
    })
}

const showTabContent = (i = 0) => {
    tabContent[i].style.display = "block"
    tabs[i].classList.add("tabheader__item_active")
}


hideTabContent()
showTabContent(0)

let index= 0
const slider=()=>{
    index++
    if(index<4){
        hideTabContent()
        showTabContent(index)
    }else{
        index=0
        hideTabContent()
        showTabContent(index)
    }
}

setInterval(slider,1000)

tabsParent.addEventListener("click", (event) => {
    const target = event.target

    if(target.classList.contains("tabheader__item")){
        tabs.forEach((item, a) => {
            if(target === item){    
                
                hideTabContent()
                showTabContent(a)
            }
        })
    }
})


//modal

const modal = document.querySelector(".modal")
const modalTrigger = document.querySelector(".btn_white")
const closeModalBtn = document.querySelector(".modal__close")


let checkOne = 0

const openModal = () => {
    checkOne++
    modal.classList.add("show")
    modal.classList.remove("hide")
    document.body.style.overflow = "hidden"
}



modalTrigger.addEventListener("click", openModal)



const closeModal = () => {
    modal.classList.add("hide")
    modal.classList.remove("show")
    document.body.style.overflow = ""
}

modal.addEventListener('click',(e)=>{
    console.log(e.target)
    if(e.target.classList.contains('modal') || e.target.classList.contains('modal__close')){
        closeModal()
    }
})
window.addEventListener('scroll', () => {
    // const bottom = scrollTop + pageYoffset
    
    const documentHeight = document.documentElement.scrollHeight;
    
    const currentHeight = window.pageYOffset + document.documentElement.clientHeight;
    
    const isScrollEnd = Math.abs(documentHeight - currentHeight)<15;
    if(isScrollEnd && checkOne===0){
        openModal()
    }
}
)