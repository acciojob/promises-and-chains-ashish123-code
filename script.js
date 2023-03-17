//your JS code here. If required.
const form = document.querySelector('form');
  const ageInput = document.getElementById('age');
  const nameInput = document.getElementById('name');
  const submitButton = document.getElementById('btn');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const age = ageInput.value.trim();
    const name = nameInput.value.trim();

    if (age === '' || name === '') {
      alert('Please enter valid details');
      return;
    }

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (age >= 18) {
          resolve(name);
        } else {
          reject(name);
        }
      }, 4000);
    });

    promise
      .then((name) => {
        alert(`Welcome, ${name}. You can vote.`);
      })
      .catch((name) => {
        alert(`Oh sorry ${name}. You aren't old enough.`);
      });
  });