function fetchData() {
    return new Promise((resolve, reject) => {
        fetch("https://api.agify.io/?name=meelad")
            .then(response => response.json())  // Directly parse the response as JSON
            .then(data => resolve(data))  // Resolve the promise with the data
            .catch(error => reject("Error: " + error));  // Reject the promise on error
    });
}

fetchData()
    .then(data => {
        console.log("Data fetched:", data);  // Log the data if fetch is successful
    })
    .catch(error => {
        console.log(error);  // Log the error if something goes wrong
    });
