
import './App.css';
// import CarouselFadeExample from './Main.js'; 
import {Route, Routes } from 'react-router-dom' 
import Main from './Main'
import { Carousel } from 'react-bootstrap';

const App = () => {

  // const [user, setUser] = useState(null)

  return (
    <>
    <div className='header'>

      <h2>Wyoming Tree Fellers</h2>

    </div>

    <div className='header'>

<h3> 307-699-5808 {<br />} wyomingtreefellers@gmail.com  </h3>


{<br />}

<h3>   </h3>

</div>



    <Carousel className='carousel-text' fade>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            // src={FoodImages.Fusion}
            alt="Avocados"
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
            src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
            // src={FoodImages.Seafood}
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
            // src={FoodImages.Italian}
            alt="Trees2"
          />

          <Carousel.Caption>
            <h3>Leave reviews for your favorite restaurants.</h3>
            <p> fdsgfdsgds</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            // src={FoodImages.Japanese}
            alt="Landscape"
          />

          <Carousel.Caption>
            <h3>Emergency Services Available!</h3>
            <p> dfgdfg</p>
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
