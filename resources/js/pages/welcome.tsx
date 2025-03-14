import Banar from '../components/Banar';
import DigitalLocation from '../components/DigitalLocation';
import DigitalPortfolio from '../components/DigitalPortfolio';
import ExpanIdea from '../components/ExpanIdea';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Legends from '../components/Legends';
import NewBlogsPart from '../components/NewBlogsPart';
import SliderPart from '../components/SliderPart';
import Suporters from '../components/Suporters';

function App() {
    return (
        <div>
            <Header />
            <Banar />
            <DigitalLocation />
            <DigitalPortfolio />
            <Legends />
            <ExpanIdea />
            <SliderPart />
            <NewBlogsPart />
            <Suporters />
            <Footer />
        </div>
    );
}

export default App;
