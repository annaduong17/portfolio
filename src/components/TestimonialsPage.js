import Testimonial from "./Testimonial";
import '../styles/TestimonialsPage.scss';

function TestimonialsPage() {
  const testimonialsArr = [
    {
      name: 'Eric Tjon',
      title: 'Software Engineer',
      image: '/images/eric-avatar.jpeg',
      recommendation: 'I\'ve been lucky to work with Anna, who is an amazing software engineer and an empathetic collaborator. She demonstrated her strong work ethic with her willingness to tackle complex engineering tasks. Also she has an incredible eye for styles and color palettes. Her frontend skills gave our product an exceptionally polished look. In addition to her coding skills, Anna is a great person to have on the team. Her positive attitude brightens the mood and brings a sense of optimism into problem solving. She also knows the right questions to ask during code reviews when solutions are unclear and encourages straightforward syntax. Any team would be fortunate to have Anna\'s wonderful contributions.'
    },
    {
      name: 'Esther Witbeck',
      title: 'Software Engineer',
      image: '/images/esther-avatar.jpeg',
      recommendation: 'Anna is dedicated. She went above and beyond working with our team on Vueable Query, both with product and promotion. She spent long hours refining features, improving them with her emphasis on aesthetics and UX and especially the clear skill her code evinces. Anna exudes curiosity. She\'s never afraid to dive directly into new and unfamiliar technologies, surfacing with new insights for her team and work. Maybe most importantly, Anna is positive. Nothing gets in the way of her optimism; she brightened every day and every standup with her enthusiasm. I credit Anna\'s commitment and infectious good moods for much of what we were able to accomplish.'
    },
    {
      name: 'Brandon Yoon',
      title: 'Software Engineer',
      image: '/images/brandon-avatar.jpeg',
      recommendation: 'Anna is an exceptional software engineer that can contribute to any team. I have worked on several occasions with her, but I was most impressed with her during our time working on Vueable Query. She displayed a knack for learning and understanding new technologies in order to develop key features for our product. Anna did not take any shortcuts and went above and beyond fulfilling her tasks by writing clean and effective code. But aside from having the discipline to self-navigate her way through obstacles, she is open-minded to learn from others, which drives intellectual conversations that benefit all parties. She goes out of her way to make sure that the team works under a friendly and positive environment. Her resiliency to overcome roadblocks and passion to expand her skill sets as a software engineer were a valuable asset to our team. My experience working with Anna shows that she possesses tremendous potential and can have an immediate impact on any team.'
    }
  ]

  const renderedItems = testimonialsArr.map((testimonial, i) => {
    return (
      <Testimonial 
        name={testimonial.name}
        title={testimonial.title}
        image={testimonial.image}
        recommendation={testimonial.recommendation}
      />
    )
  })

  return (
    <div id="testimonials-page" className="testimonials-page page-margin page-padding">
      <h2 className="heading">Testimonials</h2>
      <div className="testimonials">{renderedItems}</div>
    </div>
  );
}

export default TestimonialsPage;