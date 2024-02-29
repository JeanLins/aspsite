function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  trocarImagemComScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}
window.addEventListener('scroll', onScroll)

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  // verificar se a seção passou da linha
  // quais dados vou precisar?
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  // verificar se a base está abaixo da linha alvo

  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetline = sectionEndsAt >= targetLine

  // limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  var navigation = document.getElementById('navigation')

  if (navigation) {
    // Verifica se o elemento foi encontrado no DOM
    if (window.scrollY > 0) {
      navigation.classList.add('scroll')
    } else {
      navigation.classList.remove('scroll')
    }
  }
}

// Função para trocar o src da imagem com base no scroll
function trocarImagemComScroll() {
  // Condição para verificar se o scroll é maior que 0
  if (window.scrollY > 0) {
    // Obtém a referência da imagem pelo ID
    var imagem = document.getElementById('logoImage')

    // Novo caminho do arquivo src
    var novoSrc = './assets/asp-logo-branco.png'

    // Troca o src da imagem
    imagem.src = novoSrc
  } else {
    // Obtém a referência da imagem pelo ID
    var imagem = document.getElementById('logoImage')

    // Novo caminho do arquivo src
    var blunovoSrc = './assets/asp-logo-azul.png'

    // Troca o src da imagem
    imagem.src = blunovoSrc
  }
}

/*function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}*/

function showBackToTopButtonOnScroll() {
  if (scrollY > 400) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card
  #about, 
  #about header, 
  #about .content`)


  function openPopup() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("popup").style.display = "block";
    document.body.classList.add("no-scroll"); // Adiciona a classe para bloquear o scroll
  }
  
  function closePopup() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("popup").style.display = "none";
    document.body.classList.remove("no-scroll"); // Remove a classe para permitir o scroll novamente
  }