
import countryList from 'react-select-country-list';
import { FilterFunc } from 'rc-select/lib/Select';

export const getAllCountriesOptions = () => {
  const allCountriesObject: {[key: string]: string} =  countryList().getValueList();
  const allOptions = [];

  for(let key in allCountriesObject) {
    allOptions.push({label: allCountriesObject[key], value: allCountriesObject[key]});
  }

  return allOptions;
};



export const filterOptionFn : FilterFunc<{ label: string; value: string; }> = (input: string, option) => {
  const includes = option?.label.toLocaleLowerCase().includes( input.toLocaleLowerCase() );
  return includes? true : false;
}


export const getSomeDemoCitiesOptions = () => {
  const cities = [...Array(10)].map((nothing: undefined, index: number) => {
    const label = `City ${index + 1}`;
    return {
      label: label,
      value: label
    }
  });

  return cities;
};