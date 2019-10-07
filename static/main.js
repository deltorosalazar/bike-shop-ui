// Navbar
const toggle = document.querySelector('.nav__toggle')
const nav = document.querySelector('.nav')

const handleClickToggle = () => {
  nav.toggleAttribute('open')
}

toggle.addEventListener('click', handleClickToggle)

