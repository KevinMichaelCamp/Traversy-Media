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


// SELECTING DOM OBJECTS

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

// var itemList = document.querySelector('#items');

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

// firstChild /lastChild - includes whitespace - don't use

// firstElementChild / lastElementChild - use instead of firstChild

// nextSibling / previousSibling- includes whitespace
// nextElementSibling /  previousElementSibling  - use instead




// createElement

// var newDiv = document.createElement('div');
// newDiv.className = 'hello';
// newDiv.id = "hello1";
// newDiv.setAttribute('title', 'Hello-div');

// var newDivText = document.createTextNode('Hello World');
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// container.insertBefore(newDiv, h1);
// console.log(newDiv);



// EVENT OBJECT

// var button = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick(e) {
//     // document.getElementById('header-title').textContent = "Changed";
//     // console.log(e);
//     // console.log(e.target);
//     // console.log(e.target.id);
//     // console.log(e.target.className);
//     // console.log(e.target.classList);
//     // console.log(e.type);

//     // var output = document.getElementById('output');
//     // output.innerHTML =  '<h3>' + e.target.classList + '</h3>';
//     console.log(e.altKey);
// }


// MOUSE EVENTS

var button = document.getElementById('button');
var box = document.getElementById('box');
var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');

// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);
// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);
// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);
box.addEventListener('mousemove', runEvent);

// KEY EVENTS
itemInput.addEventListener('keydown', runEvent);
itemInput.addEventListener('keyup', runEvent);
itemInput.addEventListener('keypress', runEvent);

function runEvent(e) {
    console.log('EVENT TYPE: ' + e.type);
    // output.innerHTML = '<h3>MouseX: ' + e.offsetX + '</h3><h3>MouseY: ' + e.offsetY + '</h3>';
    box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
    console.log(e.target.value);
}


// OTHER EVENTS
// focus, blur, cut, paste, input, change