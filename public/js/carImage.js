

// The data for your images
const carImage = [

{
    title: '1969 Ford Mustang Boss 302',
    filename: '1969-ford-mustang-boss-302.jpeg',
  },
  {
    title: '1955 Mercedes Benz 300sl gullwing t7',
    filename: '1955_mercedes-benz_300sl-gullwing_t7.jpg',
  },
  {
    title: '1970 Corvette Chronology',
    filename: '1970-corvette-chronology.jpg',
  },
  {
    title: '2017 Ford F350',
    filename: '2017-Ford-F350.png',
  },
  {
    title: '1969 Volkswagon Beetle',
    filename: '1969-volkswagon-beetle.jpg',
  },
  {
    title: '2019 Honda Civic Hatchback',
    filename: '2019-civic-hatchback-front.png',
  },
  {
    title: '1981 Datsun B-210',
    filename: '1981 Datsun B-210.jpg',
  },
];
  // Get the Handlebars template from your HTML file or load it via AJAX
  const source = document.getElementById('template').innerHTML;
  
  // Compile the template
  const template = Handlebars.compile(source);
  
  // Pass the data to the template function
  const renderedHtml = template(data);
  
  // Insert the rendered HTML into your page
  document.getElementById('container').innerHTML = renderedHtml;
  