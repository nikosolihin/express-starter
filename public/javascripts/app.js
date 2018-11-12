import axios from 'axios';
import '../stylesheets/style.scss';

const title = document.querySelector('h1');
const input = document.querySelector('input');

const submitForm = e => {
  e.preventDefault();
  title.innerText = `Hello, ${input.value || 'Bob Marley'}!`;
}

document.querySelector('.form').addEventListener('submit', submitForm);