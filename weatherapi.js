function clickfunctions() {
    submit = document.getElementById('submitforcountry');
    country = document.getElementById('searchcountry');
    hello = document.getElementById('country')
    form = document.getElementById('theform')
    holder = document.getElementById('holder')
    temperature = document.createElement('h3')

    async function get_weather_api(location) {
        variable = await fetch("http://api.openweathermap.org/data/2.5/weather?q="+location+"&appid=7be7fb64190a9f823cb480c4cd07046e", {mode: 'cors'})
            .then(function(response) {
                return response.json()
            })
    
            .then(function(response) {
                temperature.innerHTML = "Temperature in "+location+ " is " + ((response.main.temp) - 273).toFixed(0) + " Degrees Celsius"
                holder.appendChild(temperature)

            })
    }
 
    submit.addEventListener('click', handlesubmit);

    function handlesubmit() {
        country_searched = country.value;
        get_weather_api(country_searched);
        country.value = ''
    }

    
}
clickfunctions();