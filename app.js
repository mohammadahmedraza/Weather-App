const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const div = document.querySelector(".parent")

btn.addEventListener("click", checkWeather)

function checkWeather(){
    div.innerHTML = ""
    fetch(`https://api.weatherapi.com/v1/current.json?key=e53a44f74a304b26bed120934241811&q=${input.value}&aqi=no`)
.then((res)=> res.json())
.then((res)=>{
    console.log(res);
    div.innerHTML += `<div class="row d-flex justify-content-center py-2">
      <div class="col-md-8 col-lg-6 col-xl-5">
        <div class="card text-body">
          <div class="card-body p-4">
            <div class="d-flex">
              <h6 class="flex-grow-1">${res.location.name}, ${res.location.country}</h6>
              <h6>Feels Like: <span class="highlight">${res.current.feelslike_c}<sup>o</sup>C</span></h6>
            </div>
    
            <div class="d-flex flex-column text-center mt-5 mb-4">
              <h6 class="display-4 mb-0 font-weight-bold">${res.current.temp_c}<sup>o</sup>C</h6>
              </div>
    
            <div class="d-flex align-items-center">
              <div class="flex-grow-1" style="font-size: 1rem;">
                <div><i class="fas fa-wind fa-fw" style="color: #666;"></i> <span class="ms-1">${res.current.wind_kph} Km/h</span></div>
                <div><i class="fas fa-tint fa-fw" style="color: #666;"></i> <span class="ms-1">${res.current.humidity}% Humidity</span></div>
                <div><i class="fas fa-compress-arrows-alt fa-fw" style="color: #666;"></i> <span class="ms-1">${res.current.pressure_in} hPa</span></div>
                </div>
              <div>
                <img src="${res.current.condition.icon}" width="100px">
              </div>
            </div>
    
          </div>
        </div>
      </div>
    </div>`
    
    input.value = "";
  

}).catch((err)=>{
    console.error(err);
    div.innerHTML += "<h1>City not found</h1>"
})
}