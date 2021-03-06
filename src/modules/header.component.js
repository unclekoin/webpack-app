import $ from 'jquery';

$('<h1 />')
  .text('Hello, World from JQuery')
  .css({
    textAlign: 'center',
    color: 'red'
  })
  .appendTo($('header'))

console.log('Header component');
