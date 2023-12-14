

fetch(`http://localhost:3000/weather?location=vancouver`).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error)
        } else {
            console.log(data)
            //console.log(data.orecast)
        }
    })
})


console.log('the JavaScript file has been loaded')

