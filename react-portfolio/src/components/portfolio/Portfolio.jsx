import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/IMG2.png';
import IMG2 from '../../assets/IMG4.png';
import IMG3 from '../../assets/IMG1.png';
import IMG4 from '../../assets/IMG3.png';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Keeper App',
    github: 'https://github.com/Sahar11/keeper',
    demo: 'https://dribble.com/shots/16673715-Crypto-currency-dasboards-and-financial-data-visualization'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Jungle-Rails',
    github: 'https://github.com/Sahar11/jungle-rails',
    demo: 'https://dribble.com/shots/16673715-Crypto-currency-dasboards-and-financial-data-visualization'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Tweeter',
    github: 'https://github.com/Sahar11/tweeter',
    demo: 'https://dribble.com/shots/16673715-Crypto-currency-dasboards-and-financial-data-visualization'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Tiny App',
    github: 'https://github.com/Sahar11/tinyapp',
    demo: 'https://dribble.com/shots/16673715-Crypto-currency-dasboards-and-financial-data-visualization'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container" >
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img className="images" src={image} alt={title} />
            </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta items">
          <a href={github} className='btn '>Github</a>
          {/* <a href={demo} className= 'btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>
          
        </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio