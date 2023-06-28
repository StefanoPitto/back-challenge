import { fetchContinents, fetchCountries, fetchCountryFromISO, fetchCurrency } from "../services/services.js"
import { countryFormmater } from "../utils/countryFormmater.js";


class CountryManager {


    constructor() {
        this.continents={};
        this.getContinents();
    }

    getCountries = async (page, pageSize) => {
        const countries = await fetchCountries();
        
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;
      
        let slicedCountries = countries.slice(startIndex, endIndex);
        try {
          const resolvedCountries = await Promise.all(
            slicedCountries.map(async (country) => {
              let firstResponse = await fetchCountryFromISO(country.sISOCode);
              let secondResponse = await fetchCurrency(firstResponse.sCurrencyISOCode);
              return { ...firstResponse, currencyName: secondResponse };
            })
          );
      
          let toReturn = resolvedCountries.map((country) => countryFormmater(country));
          return toReturn;
        } catch (error) {
          throw new Error('An error occurred when fetching countries information');
        }
      };
      

    getContinents = async ()=> {

        try{
            const continents = await fetchContinents();
            this.continents = continents.reduce((obj, item) => {
                obj[item.sCode] = item.sName;
                return obj;
            }, {});
                      
          
        
        }catch(error){
            console.log(error)
        }
        
    }

    getContinentFromCode = (code)=>{
        return this.continents[code];
    }


}

export const countryManager = new CountryManager();