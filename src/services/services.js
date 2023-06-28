import http from "http"




export const fetchCountries = () => {
    return new Promise((resolve, reject) => {
      const url = 'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso/ListOfCountryNamesByName/JSON/debug?';
      let countries = [];
  
      http.get(url, (response) => {
        let data = '';
  
        response.on('data', (chunk) => {
          data += chunk;
        });
  
        response.on('end', async () => {
          // Parse the received data
          const parsedData = await JSON.parse(data);
          countries = parsedData;
          resolve(countries);
        });
      }).on('error', (error) => {
        reject(error);
      });
    });
  };

export const fetchCurrency = (currency) => {
  const url = `http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso/CurrencyName/JSON/debug?sCurrencyISOCode=${currency}`;

  return new Promise((resolve, reject) => {
    http.get(url, (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', async() => {
        const parsedData = await JSON.parse(data);
        resolve(parsedData);
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
};

export const fetchCountryFromISO =  (isoCode) => {
  const url = `http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso/FullCountryInfo/JSON/debug?sCountryISOCode=${isoCode}`;

  return new Promise((resolve, reject) => {
    http.get(url, (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', async () => {
        const parsedData = await JSON.parse(data);
        resolve(parsedData);
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
};


export const fetchContinents = ()=>{
  const url = `http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso/ListOfContinentsByName/JSON`;

  return new Promise((resolve, reject) => {
    http.get(url, (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', async () => {
        const parsedData = await JSON.parse(data);
        resolve(parsedData);
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
}