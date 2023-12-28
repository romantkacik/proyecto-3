import './style.css'

// HEADER--// HEADER--// HEADER--// HEADER--// HEADER--// HEADER--// HEADER--

const header = document.querySelector('#headerContainer')

const logo = document.createElement('img')
logo.classList.add('logo')
logo.src =
  './assets/ori_3656462_84tmornwfc450bz5wxdswbhvh7qbe6mnml564a62_monogram-cv-logo-design.jpg'
const navbar = document.createElement('div')
navbar.className = 'navbar'
const paginaPrincipal = document.createElement('a')
paginaPrincipal.textContent = '{Pagina principal}'
const experiencia = document.createElement('a')
experiencia.textContent = '{Experiencia}'
const proyectos = document.createElement('a')
proyectos.textContent = '{Proyectos}'

navbar.appendChild(paginaPrincipal)
navbar.appendChild(experiencia)
navbar.appendChild(proyectos)
header.appendChild(logo)
header.appendChild(navbar)

// MAIN--// MAIN--// MAIN--// MAIN--// MAIN--// MAIN--// MAIN--// MAIN--// MAIN--

const main = document.querySelector('#mainContainer')

const imgUser = document.createElement('img')
imgUser.classList.add('imgUser')
imgUser.src = './assets/Copia de IMG_20220809_172540_323.jpeg'

const userInfo = document.createElement('article')
userInfo.className = 'userInfo'

const userName = document.createElement('h1')
userName.textContent = 'ROMÁN LUCIANO TKACIK'
userName.className = 'userName'
const userDescription = document.createElement('p')
userDescription.textContent =
  'Es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
userDescription.className = 'userDescription'
const userSkills = document.createElement('p')
userSkills.className = 'userSkills'
userSkills.textContent =
  'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor.'

userInfo.appendChild(userName)
userInfo.appendChild(userDescription)
userInfo.appendChild(userSkills)
main.appendChild(imgUser)
main.appendChild(userInfo)

// FOOTER--/// FOOTER--/// FOOTER--/// FOOTER--/// FOOTER--/

const footer = document.querySelector('#footerContainer')

const logosFooter = document.createElement('div')
logosFooter.className = 'logosFooter'

const logoLinkedin = document.createElement('img')
logoLinkedin.className = 'linkedin'
logoLinkedin.src = './assets/linkedin-logo-linkedin-symbol-linkedin-icon-free-free-vector.jpg'

const logoGithub = document.createElement('img')
logoGithub.className = 'github'
logoGithub.src = './assets/25231.png'

logosFooter.appendChild(logoLinkedin)
logosFooter.appendChild(logoGithub)
footer.appendChild(logosFooter)

const linkLinkedin = document.createElement('a')
linkLinkedin.href = 'https://www.linkedin.com/in/rom%C3%A1n-luciano-tkacik-b81881203/'
linkLinkedin.appendChild(logoLinkedin)

const linkGithub = document.createElement('a')
linkGithub.href = 'https://github.com/romantkacik'
linkGithub.appendChild(logoGithub)

logosFooter.appendChild(linkLinkedin)
logosFooter.appendChild(linkGithub)
