// js/dashboard_main.js
import $ from 'jquery';
import _ from 'lodash';

let count = 0;

function updateCounter() {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}

$(document).ready(function () {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="startBtn">Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  // Debounce the updateCounter function to prevent spamming
  $('#startBtn').on('click', _.debounce(updateCounter, 1000));
});