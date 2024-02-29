import axios from 'axios';

async function blockCountries() {
  try {
    const ipAddress = window?.location?.hostname;
    const response = await axios.get(`http://ip-api.com/json/?fields=status,country,countryCode`);
    const { status, country, countryCode } = response.data;

    // List of blocked countries
    const blockedCountries = ['IN', 'PK', 'BD', 'IR', 'VN', 'PH', 'IQ', 'AF', 'KR', 'NP', 'LK', 'RU', 'CN', 'BT'];

    // IP address exception
    const exceptionIPAddress = '110.93.226.77';

    if (status === 'success' && blockedCountries.includes(countryCode)) {
      // Redirect to bahooinc.com if the country is in the blocked list and not the exception IP address
      window.location.replace('http://bahooinc.com');
    }
  } catch (error) {
    console.error('Error occurred while fetching country information:', error);
  }
}

export default blockCountries;
