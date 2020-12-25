import {
  IChartData, ICountryInformation, ISummaryData, ISummaryResponse, IChartCountry,
} from '../interfaces/redux/appStore';

export const getCovidSummary = async (): Promise<ISummaryData[] | null> => {
  try {
    const responseRaw = await fetch('https://api.covid19api.com/summary');

    if (responseRaw.ok) {
      const response: ISummaryResponse = await responseRaw.json();
      const summaryData: Array<ISummaryData> = response.Countries;
      const {
        NewConfirmed,
        TotalConfirmed,
        NewDeaths,
        TotalDeaths,
        NewRecovered,
        TotalRecovered,
      } = response.Global;
      const date = response.Date;

      const global: ISummaryData = {
        Country: 'GLOBAL',
        CountryCode: '',
        Slug: '',
        NewConfirmed,
        TotalConfirmed,
        NewDeaths,
        TotalDeaths,
        NewRecovered,
        TotalRecovered,
        date,
      };
      return [...summaryData, global];
    }
    console.log('fetchError');
    return null;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const getCountryInfo = async (): Promise<ICountryInformation[] | null> => {
  try {
    const responseRaw = await fetch(
      'https://restcountries.eu/rest/v2/all?fields=name;population;flag;latlng;alpha2Code',
    );
    if (responseRaw.ok) {
      const response: Array<ICountryInformation> = await responseRaw.json();
      return response;
    }
    console.log('fetchError');
    return null;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const getChartData = async (code: string = 'us'): Promise<IChartData[] | null> => {
  try {
    const responseRaw = await fetch(`https://api.covid19api.com/country/${code}`);

    if (responseRaw.ok) {
      const response: any = await responseRaw.json();
      const chartData: Array<IChartData> = response.map((country: IChartCountry) => ({
        month: country.Date,
        Confirmed: country.Confirmed,
        Deaths: country.Deaths,
        Recovered: country.Recovered,
      }));

      return chartData;
    }
    console.log('fetchError');
    return null;
  } catch (e) {
    console.log(e);
    return null;
  }
};
