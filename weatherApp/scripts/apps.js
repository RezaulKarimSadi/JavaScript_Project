const citySearch=document.querySelector('form');

const details=document.querySelector('.details');
const card=document.querySelector('.card');
const time=document.querySelector('img.time');
const icon=document.querySelector('.icon img');


const f=new ForeCast();


const updateUi=(data)=>{


    //we xan override this using destruction
    //destruction means that the property and the value with the same name
    //we can assign it a multiple property 

    //   const cityDetails=data.getCityDet;
    //   const weather=data.getWeatherDetails;
    
    //applying destruction
    const {getCityDet,getWeatherDetails}=data;

    
     details.innerHTML=`
     
     <h5 class="my-3">${getCityDet.EnglishName}</h5>
     <div class="my-3">${getWeatherDetails.WeatherText}</div>
     <div class="display-4 my-4">
       <span>${getWeatherDetails.Temperature.Metric.Value}°C</span>
     </div>`;


     if(card.classList.contains('d-none'))
     {
         card.classList.remove('d-none');
     }

     let timesrc=getWeatherDetails.IsDayTime?'img/day.svg':'img/night.svg';



     time.setAttribute('src',timesrc);


     const iconimg=`img/icons/${getWeatherDetails.WeatherIcon}.svg`;
     icon.setAttribute('src',iconimg);
}


citySearch.addEventListener('submit',e=>{

    e.preventDefault();


    const cityName=citySearch.city.value.trim();
    citySearch.reset();
    localStorage.setItem('city',cityName);
    f.updateCity(cityName).then(c=>{
        
        updateUi(c);
    }).catch(er=>{
        console.log(er);
    });
    
});


if(localStorage.getItem('city'))
{
    f.updateCity(localStorage.getItem('city')).then(c=>{
        
        updateUi(c);
    }).catch(er=>{
        console.log(er);
    });;
}

