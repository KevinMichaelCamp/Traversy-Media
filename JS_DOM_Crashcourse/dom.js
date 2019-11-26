// EXAMNINE THE DOCUMENT OBJECT

// console.dir(document)
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[10])
// console.log(document.forms)
// console.log(document.links)
// console.log(document.images)


// getElementById

// var headerTitle = document.getElementById('header-title');
// headerTitle.textContent = "Hello";
// headerTitle.innerText = "Hello";
// headerTitle.innerHTML = "<h3>Hello</h3>";
// headerTitle.style.borderBottom = "solid 3px #000";


// GetElementsByClassname

// var items = document.getElementsByClassName('list-group-item');
// console.log(items[2]);
// items[1].textContent = "Hello 2"
// items[1].style.fontWeight = "bold"


// GetElementsByTagName

// var li = document.getElementsByTagName('li');
// console.log(li);


// querySelector

// var header = document.querySelector('#main-header');
// console.log(header);
// header.style.borderBottom = '2pt solid black';

// var input = document.querySelector('input');
// input.value = 'Hello world'

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';


// querySelectorAll

// var titles = document.querySelectorAll('.title');
// console.log(titles);

// var odd = document.querySelectorAll('li:nth-child(odd)');

// for(var i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = "#f4f4f4";
// }


// TRAVERSING THE DOM

var itemList = document.querySelector('#items');

// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// itemList.parentNode.parentNode

// parentElement - similar to parentNode
// console.log(itemList.parentElement);

// childNodes - also selects whitespace - don't use
// console.log(itemList.childNodes);

// children - use instead of childNodes
// console.log(itemList.children);
// console.log(itemList.children[1]);

// firstChild - includes whitespace - don't use
// lastChild - includes whitespace - don't use

// firstElementChild - use instead of firstChild