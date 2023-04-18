const cors_api_url = 'https://cors-anywhere.herokuapp.com/';

export const enableCors = (url) => {
  return `${cors_api_url}${url}`;
};
