import { countryManager } from "../manager/countryManager.js";

export const  countryFormmater = (countryData) => {
    const {
      sISOCode,
      sName,
      sCapitalCity,
      sPhoneCode,
      sContinentCode,
      sCurrencyISOCode,
      sCountryFlag,
      Languages,
      currencyName,
    } = countryData;
  
    const transformedData = {
      code: sISOCode,
      name: sName,
      capitalCity: sCapitalCity,
      phoneCode: parseInt(sPhoneCode),
      continent: {
        code: sContinentCode,
        name: countryManager.getContinentFromCode(sContinentCode),
      },
      currency: {
        code: sCurrencyISOCode,
        name: currencyName,
      },
      flag: sCountryFlag,
      languages: Languages.map((lang) => ({
        code: lang.sISOCode,
        name: lang.sName,
      })),
    };
    return transformedData;
  }