const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__item')
const footerYear = document.querySelector('.footer__year')

const handleNav = () => {
	nav.classList.toggle('nav--active')

	if (!nav.classList.contains('nav--active')) {
		handleObserver()
	}

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active')
		})
	})

	handleNavItemsAnimation()
}
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

const handleNavItemsAnimation = () => {
	let delayTime = 0

	allNavItems.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

const deleteAnimation = () => {
	allNavItems.forEach(item => {
		item.classList.remove('nav-items-animation')
	})
}

handleCurrentYear()
navBtn.addEventListener('click', handleNav)

