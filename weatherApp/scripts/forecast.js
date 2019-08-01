const ln='bn';
class ForeCast
{
    
    constructor()
    {
        this.key='AxOSoGAGKWXXJJRDTWXpyXR1V7i6okE4';;
        this.base='http://dataservice.accuweather.com/locations/v1/cities/search';
        this.base2='http://dataservice.accuweather.com/currentconditions/v1/';
    }
    async updateCity(city){
  
        const getCityDet=await this.CitySearch(city);   
        const getWeatherDetails=await this.CityCall(getCityDet.Key);   
    //object short hand literal
        return{  getCityDet,getWeatherDetails };  
    
    }
    
    async CitySearch(city){
     
        const query=`?apikey=${this.key}&q=${city}`;
        const response1=await fetch(this.base+query);
        const data=await response1.json();
        return data[0];
    }

    async CityCall(id){

         const query=`${id}?apikey=${this.key}&language=${ln}`;    
         const response1=await fetch(this.base2+query);
         const data=await response1.json();  
         return data[0];
    
    }
  
}


