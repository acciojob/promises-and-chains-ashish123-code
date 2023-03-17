//your JS code here. If required.
function getObject() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const person = {
          age: Number(document.getElementById('age').value),
          name: document.getElementById('name').value
        };
        if (person.age >= 18) {
          resolve(person);
        } else {
          reject(person);
        }
      }, 4000);
    });
  }
  
  document.getElementById('btn').addEventListener('click', (event) => {
    event.preventDefault();
    const ageInput = document.getElementById('age');
    const nameInput = document.getElementById('name');
    const age = Number(ageInput.value);
    const name = nameInput.value;
    if (age === '' || name === '') {
      alert('Please fill in both fields.');
      return;
    }
    getObject()
      .then((person) => {
        const extractedValue = person.age;
        const newObject = { extractedValue };
        alert(`Welcome, ${person.name}. You can vote.`);
        return newObject;
      })
      .then((finalObject) => {
        // Do something with the final object
        console.log(finalObject);
      })
      .catch((person) => {
        alert(`Oh sorry ${person.name}. You aren't old enough.`);
      });
  });
