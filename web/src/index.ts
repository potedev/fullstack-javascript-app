const greetings = async () => {
    const message: string = "Hello web CPROM"
    console.log(typeof message)
    console.log(message)
}

greetings();

const toggleThemeButton = document.getElementById('toggle-switch-theme-color')
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})
console.log(toggleThemeButton);