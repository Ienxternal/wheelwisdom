

// The data for your images
const carImage = [

{
      title: '1969 Ford Mustang Boss 302',
      filename: '1969-ford-mustang-boss-302.jpeg',
  },
  {
    title: '',
    filename: '',
  },
  {
    title: '',
    filename: '',
  },
  {
    title: '',
    filename: '',
  },
  {
    title: '',
    filename: '',
  },
  {
    title: '',
    filename: '',
  },
  {
    title: '',
    filename: '',
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
  