import { usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
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

type FlashProps = {
    success?: string;
    [key: string]: any;
};

function App() {
    const { flash } = usePage().props as { flash?: FlashProps };
    console.log('Page props:', usePage().props);
    useEffect(() => {
        if (flash?.success) {
            toast.success(flash.success);
        }
    }, [flash]);

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
            <ToastContainer />
        </div>
    );
}

export default App;
