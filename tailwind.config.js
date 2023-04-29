/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{html,js}"
];
export const theme = {
  fontFamily: {
    'Everything' : 'ProximaNova,arial,Helvetica Neue,sans-serif'
  },
  extend: {
    colors: {
      "Promoted-color": "#3A3C41",
      'Resto-Name': '#282C3F',
      'Rating-background': '#48C479',
      'Bad-rating-bacround': '#DB7C38',
      'Cuisine-grey': '#535665',
      'Swiggy-orange': '#fc8019',
      'Item-description': "rgb(40, 44, 53 / 45%)",
      'Cost': "#3E4152",
      'Hover-shimmer': '#EFEFEE',
      'shimmer-background': '#EBEBF4'
    }
  },
};
export const plugins = [];

