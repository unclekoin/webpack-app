import $ from 'jquery';

$('<h1 />')
  .text('Hello, World from JQuery')
  .css({
    textAlign: 'center',
    color: 'blue'
  })
  .appendTo($('header'))

console.log('Header component');
