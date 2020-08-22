'use strict'

export function triggerSearch() {
  const jsSearch = document.querySelector('.js-search')
  const searchElm = document.querySelector('.js-search-input')
  const searchedText = ''

  jsSearch.disabled = true

  jsSearch.addEventListener('click', () => {
    searchedText = searchElm.value ? searchElm.value : ''
    filterContent(searchedText)
  }, false)

  searchElm.addEventListener('search', () => {
    resetFilter()
  }, false)

  searchElm.addEventListener('keyup', () => {
    searchedText = searchElm.value ? searchElm.value : ''

    if (event.keyCode === 13 && searchedText) {
      filterContent(searchedText);
    }

    if(!searchedText) {
      resetFilter()
      jsSearch.disabled = true
    } else {
      jsSearch.disabled = false
    }
  }, false)
}

export function filterContent(searchedText) {
  const searchVal = searchedText.toLowerCase()
  const nodes = document.querySelector('.js-content').childNodes

  // console.log(nodes)
  nodes.forEach(node => {
    if (
      node.childNodes[2]
        .getAttribute('data-name')
        .toLowerCase()
        .includes(searchVal)
    ) {
      console.log('true')
      if (node.nodeName.toLowerCase() === 'div') {
        node.style.display = 'block'
      }
    } else {
      if (node.nodeName.toLowerCase() === 'div') {
        node.style.display = 'none'
      }
    }
  })
}

export function resetFilter(searchedText) {
  const cards = document.querySelectorAll('.users__content')

  cards.forEach(card => {
    if (card.nodeName.toLowerCase() === 'div') {
      card.style.display = 'block';
    }
  })
}
