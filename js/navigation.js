// Shortcut to toggle word wrap: Alt + Z

let $links = document.querySelectorAll('a') // All the tags <a> 
let $routes = document.querySelectorAll('[data-route]') // All the tags with the attribute "data-route"

function listenForLinksClick() {
  $links.forEach($link => {
    $link.onclick = (event) => {
      event.preventDefault() // Stop the default behaviour, that would redirect the user to another page
      let href = $link.getAttribute('href')
      console.log("You clicked on a link where href is", href)
      displayOneSectionAndHideOthers(href)
    }
  })
}

function displayOneSectionAndHideOthers(href) {
  // Loop on each $route of $routes
  $routes.forEach($route => {
    let dataRoute = $route.getAttribute('data-route')
    // If the attribute "data-route" is the same as `href`, display the block
    if (dataRoute === href) {
      $route.style.display = 'block'
    }
    else {
      $route.style.display = 'none'
    }
  })
}

listenForLinksClick()
displayOneSectionAndHideOthers("/")
