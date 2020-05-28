document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();

  // true -> at the end to be asynchronous
  xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {
    if(this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(response)

      let output = ''

      if (response.type === "success") {
        // response is not an arr but its value - depending on the API
        response.value.forEach(function (joke) {
          output += `
          <li>${joke.joke}</li>
          `;
        });
      } else {
        output += "<li>Something went wrong</li>";
      }
      document.querySelector('.jokes').innerHTML = output
    }
  }

  xhr.send();
  e.preventDefault();
}