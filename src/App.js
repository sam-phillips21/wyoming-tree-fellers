
import './App.css';
// import CarouselFadeExample from './Main.js'; 
// import {Route, Routes } from 'react-router-dom' 
// import Main from './Main'
import { Carousel } from 'react-bootstrap';
import Images from './Images.js'

const App = () => {


  return (
    <>
      <div className='header'>
        <h3>Wyoming Tree Fellers {<br />}
        307-699-5808 {<br />} 
        wyomingtreefellers@gmail.com {<br />}     
        </h3>

      </div>

    <Carousel className='carousel-text' fade>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={Images.Photo1}
            alt="PeteTree"
          />
          {/* <Carousel.Caption>
            <p>
              Tree Care, Climbing and Removal
            </p>
          </Carousel.Caption> */}
        </Carousel.Item> 
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={Images.Photo2}
            alt="TreeCare"
          />
          {/* <Carousel.Caption>
            <h3>Locally Owned and Operated</h3>
            <p>Liscenced and Insured!</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={Images.Photo3}
            alt="Trees"
          />

          {/* <Carousel.Caption>
            <h3>From felling to removal.</h3>
            <p></p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={Images.Photo4}
            alt="Trees2"
          />

          {/* <Carousel.Caption>
            <h3>Contact us for an Estimate!.</h3>
            
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={Images.Photo5}
            alt="Landscape"
          />

          {/* <Carousel.Caption>
            <h3>Emergency Services Available!</h3>
            <p> </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>

      <div className="App">
      <header className="App-services">

        <h2>Services {<br />} </h2>
          <p>
            Liscenced and Insured {<br />}
            Tree removal professionals {<br />} 

            Tree and shrub trimming and pruning {<br />} 

            Forest fire fuel reduction experts {<br />}
            Firewood Services  {<br />} 

            24-Hour Emergency Services {<br />}
             

          </p>

        <h3>Contact us for your free estimate at: 307-699-5808</h3>

        <href>wyomingtreefellers@gmail.com</href>
      </header>
    </div>

    </>
				
  )
}
  


export default App
