import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  const data = [
    {
      id:1,
      image:IMG1,
      title: 'Simple Movie Website',
      github:'https://github.com/susan5591/Simple-Movie-Web',
    },
    {
      id:2,
      image:IMG2,
      title: 'Multi-User To-Do List',
      github:'https://github.com/susan5591/Multi-user-todo',
    },
    {
      id:3,
      image:IMG3,
      title: 'To-Do List using react',
      github:'https://github.com/susan5591/Todo-React',
    },
    {
      id:4,
      image:IMG4,
      title: 'Online Birth Certificate',
      github:'https://github.com/susan5591/E-Governance-Project',
    },
    {
      id:5,
      image:IMG5,
      title: 'Online Liscense Regestration',
      github:'https://github.com/susan5591/E-Governance-Project',
    }
  ]
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {
          data.map(({id,image,title,github,demo})=>{
            return (
              <article className='portfolio_items' key={id}>
                <div className="portfolio_item_image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio_items_cta'>
                  <a href={github} className='btn btn-primary' target='_blank'>Github</a>
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