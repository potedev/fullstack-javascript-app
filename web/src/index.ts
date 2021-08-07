import api from './js/utils/api'

const greetings = async () => {
    // const message: string = "Hello web CPROM"
    const message = await api.get('/');
    console.log('Axios response ->', message)
    console.log('Axios response data ->', message.data)
}

greetings();

const toggleThemeButton = document.getElementById('toggle-switch-theme-color')
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})




