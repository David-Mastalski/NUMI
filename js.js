const desktopNavWrapper = document.querySelector('.js-navigation')
const nav = document.querySelector('.js-nav')
const navCtaWrapper = document.querySelector('.js-nav-cta-wrapper')
const mobileNavWrapper = document.querySelector('.mobile-nav-wrapper')
const dropDownWrapper = document.querySelector('.dropdown-nav-links-wrapper')
const pageDocument = document.querySelector('.page-wrapper')

//Buttons
const resourceBtn = document.querySelector('.resource-btn')
const hamburgerMenuBtn = document.querySelector('.hamburger-btn')


const checkWidth = () => {
    const width = window.innerWidth

    if(width < 988){
        mobileNavWrapper.append(nav,navCtaWrapper)
    }else{
        desktopNavWrapper.append(nav,navCtaWrapper)
    }
}

checkWidth()
window.addEventListener('resize', checkWidth)
resourceBtn.addEventListener('click', () => {
    dropDownWrapper.classList.toggle('dropdownOn')
})

hamburgerMenuBtn.addEventListener('click', () => {
    mobileNavWrapper.classList.toggle('showMobileNav')

    if((!mobileNavWrapper.classList.contains('showMobileNav')) && dropDownWrapper.classList.contains('dropdownOn')){
        dropDownWrapper.classList.remove('dropdownOn')
    }
})

pageDocument.addEventListener('click', () => {
    if(dropDownWrapper.classList.contains('dropdownOn')){
        dropDownWrapper.classList.remove('dropdownOn')
    }
    if(mobileNavWrapper.classList.contains('showMobileNav')){
        mobileNavWrapper.classList.remove('showMobileNav')
    }
})