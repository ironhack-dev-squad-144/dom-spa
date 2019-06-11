let $links = document.querySelectorAll('a');
let $routes = document.querySelectorAll('[data-route]');

function listenForLinksClick() {
  $links.forEach( $link => {
    $link.onclick = (event) => { //this is a parameter event 
      event.preventDefault(); //Stop the default behaviour, that would redirect to another page
      let href = $link.getAttribute('href');
      console.log('You clicked on a link where href is ',href);
      displayOneSectionAndHideOthers(href);
    }
  }) //foreach only works with querySelectorAll!!!
}

function displayOneSectionAndHideOthers(href) {
  $routes.forEach($route => {
    let dataRoute = $route.getAttribute('data-route');
    if (dataRoute === href) {
      $route.style.display = 'block';
    } else {
      $route.style.display = 'none'
    }
  });
}

listenForLinksClick()
displayOneSectionAndHideOthers('/')
