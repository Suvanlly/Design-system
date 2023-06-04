import { Carousel } from "./components/carousel/Carousel";
import carouselItems from './components/carousel/json/carousel-items.json'

function App() {
  return (
    <div className="App">
      <Carousel intervalInSeconds={2} imagePosition="right" carouselItems={carouselItems}/>
    </div>
  );
}

export default App;
