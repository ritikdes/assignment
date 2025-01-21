function fetchData(callback) {
    setTimeout(() => {
      fetch("https://api.agify.io/?name=meelad")
        .then(response => response.json())
        .then(data => callback(null, data))  // Success: pass data to the callback
        .catch(error => callback(new Error("Error fetching data!"), null));  // Failure: pass error to the callback
    }, 2000);  // Simulating a delay of 2 seconds
  }
  
  // Using the callback
  fetchData((error, data) => {
    if (error) {
      console.error(error);  // Handle the error
    } else {
      console.log(data);  // Handle the fetched data
    }
  });
  