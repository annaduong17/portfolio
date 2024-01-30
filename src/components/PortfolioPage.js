import PortfolioItem from './PortfolioItem';
import '../styles/PortfolioPage.scss';

function PortfolioPage() {
  const portfolioItems = [
    {
      type: 'experience',
      name: 'Vueable Query',
      description: 'Open source developer tool that reports on Tanstack Query activities and performance metrics for Vue.js apps',
      features: [
        'a timeline to visualize query history', 
        'a text panel to display all relevant queries under their query key',
        'highlighting on click and hover',
        'tool tip displayed on hover'
      ],
      techStack: [
        'JavaScript',
        'Vue.js',
        'Pinia',
        'D3.js',
        'SCSS'
      ],
      images: [
        '/images/vueable-query-2.png',
        '/images/vueable-query-3.png'
      ],
      button: 'Visit Site',
      link: 'https://www.vueablequery.com/'
    },
    {
      type: 'project',
      name: 'E-commerce App',
      description: 'An app that displays shoes for sale',
      features: [
        'Open a lightbox gallery by clicking on the large product image', 
        'Switch the large product image by clicking on the small thumbnail images',
        'Add items to the cart and delete items',
        'Cart icon updates with total number of items'
      ],
      techStack: [
        'JavaScript',
        'React.js',
        'SCSS'
      ],
      images: [
        '/images/e-commerce-1.png',
        '/images/e-commerce-2.png',
        '/images/e-commerce-3.png',
        '/images/e-commerce-4.png'
      ],
      button: 'View Github Repo',
      link: 'https://github.com/annaduong17/e-commerce'
    },
    {
      type: 'project',
      name: 'Expenses Chart',
      description: 'A component that visualizes weekly spending using a bar graph',
      features: [
        'View the bar chart and hover over the individual bars to see the correct amounts for each day', 
        'See the bar with the highest amount highlighted in a different color to the other bars',
        'See the selected bar\'s opacity change on hover',
        'See dynamically generated bar heights based on the data in the local JSON file'
      ],
      techStack: [
        'JavaScript',
        'React.js',
        'SCSS'
      ],
      images: [
        '/images/expenses-chart-1.png',
        '/images/expenses-chart-2.png'
      ],
      button: 'View Github Repo',
      link: 'https://github.com/annaduong17/expenses-chart'
    },
    {
      type: 'project',
      name: 'Age Calculator',
      description: 'An app that calculates the current age based on provided birthdate',
      features: [
        'View an age in years, months, and days after submitting a valid date through the form', 
        'Receive validation errors if any field is empty when the form is submitted',
        'Receive validation errors if the day number is not between 1-31',
        'Receive validation errors if the month number is not between 1-12', 
        'Receive validations errors if the date is in the future'
      ],
      techStack: [
        'JavaScript',
        'React.js',
        'SCSS'
      ],
      images: [
        '/images/age-calculator-1.png',
        '/images/age-calculator-2.png'
      ],
      button: 'View Github Repo',
      link: 'https://github.com/annaduong17/age-calculator'
    },
    {
      type: 'project',
      name: 'Newsletter',
      description: 'A newsletter sign-up form with success message',
      features: [
        'Add user\'s email and submit the form', 
        'See a success message with user\'s email after successfully submitting the form',
        'See form validation errors if the field is left empty',
        'See form validation errors if the email address is not formatted correctly'
      ],
      techStack: [
        'JavaScript',
        'React.js',
        'SCSS'
      ],
      images: [
        '/images/newsletter-1.png',
        '/images/newsletter-2.png',
        '/images/newsletter-3.png'
      ],
      button: 'View Github Repo',
      link: 'https://github.com/annaduong17/newsletter'
    },
    {
      type: 'project',
      name: 'FAQ Accordion',
      description: 'A page that displays frequently asked questions and answers',
      features: [
        'Hide/show the answer to a question when the question is clicked', 
        'Only one answer is open at a time',
        'Navigate the questions and hide/show answers using keyboard navigation alone'
      ],
      techStack: [
        'JavaScript',
        'React.js',
        'SCSS'
      ],
      images: [
        '/images/faq-accordion-1.png',
        '/images/faq-accordion-2.png'
      ],
      button: 'View Github Repo',
      link: 'https://github.com/annaduong17/faq-accordion'
    },
  ]

  const renderedItems = portfolioItems.map((item, index) => {
    return (
        <PortfolioItem
          key={index}
          type={item.type} 
          name={item.name}
          description={item.description}
          features={item.features}
          techStack={item.techStack}
          images={item.images}
          button={item.button}
          link={item.link}
        />
    )
  });

  return (
    <div id='portfolio-page' className='portfolio-page page-margin page-padding'>
      <div className='projects flex-wrap'>{renderedItems}</div>
    </div>
  );
}

export default PortfolioPage;