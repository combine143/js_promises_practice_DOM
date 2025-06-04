'use strict';

const body = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  body.addEventListener('click', () => {
    resolve();
  });

  setTimeout(() => {
    reject(new Error('First promise was rejected'));
  }, 3000);
});

promise1
  .then(() => {
    const div = document.createElement('div');

    div.setAttribute('data-qa', 'notification');
    div.className = 'success';
    div.textContent = 'First promise was resolved';
    body.append(div);
  })
  .catch((error) => {
    const div = document.createElement('div');

    div.setAttribute('data-qa', 'notification');
    div.className = 'error';
    div.textContent = error.message;
    body.append(div);
  });

const promise2 = new Promise((resolve, reject) => {
  body.addEventListener('click', () => {
    resolve();
  });

  body.addEventListener('contextmenu', () => {
    resolve();
  });
});

promise2.then(() => {
  const div = document.createElement('div');

  div.setAttribute('data-qa', 'notification');
  div.className = 'success';
  div.textContent = 'Second promise was resolved';
  body.append(div);
});

const promises = new Promise((resolve, reject) => {
  body.addEventListener('contextmenu', () => {
    resolve();
  });
});

const promises1 = new Promise((resolve, reject) => {
  body.addEventListener('click', () => {
    resolve();
  });
});

const promise3 = Promise.all([promises1, promises]);

promise3.then(() => {
  const div = document.createElement('div');

  div.setAttribute('data-qa', 'notification');
  div.className = 'success';
  div.textContent = 'Third promise was resolved';
  body.append(div);
});
