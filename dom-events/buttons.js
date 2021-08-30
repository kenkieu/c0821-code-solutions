function handleClick(event) {
  console.log('button clicked');
  console.log('value of event:', event);
  console.log('value of event.target:', event.target);
}
var $clickButton = document.querySelector('.click-button');
$clickButton.addEventListener('click', handleClick);

function handleMouseOver(event) {
  console.log('button hovered');
  console.log('value of event:', event);
  console.log('value of event.target:', event.target);
}
var $hoverButton = document.querySelector('.hover-button');
$hoverButton.addEventListener('mouseover', handleMouseOver);

function handleDoubleClick(event) {
  console.log('button double clicked');
  console.log('value of event:', event);
  console.log('value of event.target:', event.target);
}
var $dblClickButton = document.querySelector('.double-click-button');
$dblClickButton.addEventListener('dblclick', handleDoubleClick);
