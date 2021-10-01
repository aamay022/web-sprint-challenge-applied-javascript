const Header = (title, date, temp) => {
  
  const headerElem = document.createElement('div')
  const dateElem = document.createElement('span')
  const titleElem = document.createElement('h1')
  const tempElem = document.createElement('span')

  headerElem.classList.add('header')
  dateElem.classList.add('date')
  tempElem.classList.add('temp')

  dateElem.textContent = date
  titleElem.textContent = title
  tempElem.textContent = temp

  headerElem.appendChild(dateElem)
  headerElem.appendChild(titleElem)
  headerElem.appendChild(tempElem)

  return headerElem

  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {

  const newHeader = Header('How to become rich', 'October 1, 2010', '34°')
  document.querySelector(selector).appendChild(newHeader) 

  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
