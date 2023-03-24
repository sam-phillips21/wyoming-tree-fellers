
import './App.css';
// import CarouselFadeExample from './Main.js'; 
import {Route, Routes } from 'react-router-dom' 
import Main from './Main'
import { Carousel } from 'react-bootstrap';
import Images from './Images.js'

const App = () => {

  // const [user, setUser] = useState(null)

  return (
    <>
    <div className='header'>

      <h2>Wyoming Tree Fellers</h2>

    </div>

    <div className='header'>

<h3> 307-699-5808 {<br />} wyomingtreefellers@gmail.com {<br />}     </h3>


{<br />}



</div>



    <Carousel className='carousel-text' fade>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={Images.Photo1}
            alt="PeteTree"
          />
          <Carousel.Caption>
            <h3>It's all about Safety!</h3>
            <p>
              Tree Care Done Right
            </p>
          </Carousel.Caption>
        </Carousel.Item> 
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={Images.Photo2}
            alt="TreeCare"
          />
          <Carousel.Caption>
            <h3>Locally Owned and Operated</h3>
            <p>We've got tons of Experience!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={Images.Photo3}
            alt="Trees"
          />

          <Carousel.Caption>
            <h3>From felling to removal.</h3>
            <p>fghfgh</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={Images.Photo4}
            alt="Trees2"
          />

          <Carousel.Caption>
            <h3>Leave reviews for your favorite restaurants.</h3>
            <p> </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={Images.Photo5}
            alt="Landscape"
          />

          <Carousel.Caption>
            <h3>Emergency Services Available!</h3>
            <p> </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="App">
      <header className="App-header">
    
        

        <p>
          Everyday we take a dangerous job make it safe to ensure the well being of our employees and our client's personal property. 
        </p>

        <h3>Contact us at: 307-699-5808</h3>

        <href>wyomingtreefellers@gmail.com</href>
      </header>
    </div>

    </>
				
  )
}
  


export default App
