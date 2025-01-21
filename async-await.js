const fetchData = async () =>{
    try{
        const response = await fetch("https://catfact.ninja/fact")
        if (response.ok) {
            const data = await response.json(); // Parse the JSON response
            console.log(data);
        } else {
            console.log("Error: " + response.statusText);
        }
    }catch(error){
        console.log(error)
    }
}

fetchData()