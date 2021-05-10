import React from 'react'
import services2 from  '../../assets/services2.png'
function Services () {
  return (
    <section className = 'services'>
        <div className = 'services__item'>
          <img className = 'services__item--img' src={services2}/>
          <p className = 'services__item--p'>This is services</p>
        </div>
        <div className = 'services__item'>
          <img className = 'services__item--img' src={services2}/>
          <p className = 'services__item--p'>This is services</p>
        </div>
        <div className = 'services__item'>
          <img className = 'services__item--img' src={services2}/>
          <p className = 'services__item--p'>This is services</p>
        </div>
    </section>
  )
}
export default Services