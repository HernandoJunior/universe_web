import * as element from './elements.js'

//FUNCTIONS CHANGE MODES
export function changeToUniverseMode() {
  element.universeButton.addEventListener('click', (event) => {
    event.preventDefault()

    if(element.html.classList.contains('initial') || element.html.classList.contains('explorer')){
      document.documentElement.classList.remove('initial', 'explorer')
      document.documentElement.classList.add('universe')
      addDisplayInFirstClass()
      addDisplayInSecondClass()
      addDisplayInThirdClass()
    }
  })
}

export function changeToExplorerMode() {
  element.explorerButton.addEventListener('click', (event) => {
    event.preventDefault()

    if(element.html.classList.contains('initial') || element.html.classList.contains('universe')){
      document.documentElement.classList.remove('initial', 'universe')
      document.documentElement.classList.add('explorer')
      addDisplayInFirstClass()
      addDisplayInSecondClass()
      addDisplayInThirdClass()
    }
  })

} 

export function changeToInitialMode() {
  element.homeButton.addEventListener('click', (event) => {
    event.preventDefault()  

    if(element.html.classList.contains('universe') || element.html.classList.contains('explorer')){
      document.documentElement.classList.remove('explorer', 'universe')
      document.documentElement.classList.add('initial')
      addDisplayInFirstClass()
      addDisplayInSecondClass()
      addDisplayInThirdClass()
    }
  })

}

element.aboutButton.addEventListener('click', (event) => {
  event.preventDefault()

  if(element.html.classList.contains('initial') || element.html.classList.contains('explorer')){
    document.documentElement.classList.remove('initial', 'explorer')
    document.documentElement.classList.add('universe')
    addDisplayInFirstClass()
    addDisplayInSecondClass()
    addDisplayInThirdClass()
  }
})


//FUNCTIONS ADD/REMOVE CLASS 'DISPLAY' IN DIV MAIN
export function addDisplayInFirstClass(){
  if(!document.documentElement.classList.contains('initial')){
    element.firstpage.classList.add('display')
  } else {
    element.firstpage.classList.remove('display')
  }
}

export function addDisplayInSecondClass(){
  if(!document.documentElement.classList.contains('universe')){
    element.secondpage.classList.add('display')
  } else {
    element.secondpage.classList.remove('display')
  }
}

export function addDisplayInThirdClass(){
  if(!document.documentElement.classList.contains('explorer')){
    element.thirdpage.classList.add('display')
  } else {
    element.thirdpage.classList.remove('display')
  }
}