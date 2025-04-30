import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './TextStroke.css';
import './i18n';
const framarz = '/assets/testimonials/framarz.webp';
const mobin = '/assets/testimonials/mobin.webp';
const rahmani = '/assets/testimonials/rahmani.webp';

const SliderPart = () => {
    const { t, i18n } = useTranslation();
    const testimonials = t('testimonials', { returnObjects: true });
    const isRTL = i18n.dir() === 'rtl';
    const imageList = [framarz, mobin, rahmani];
    if (!Array.isArray(testimonials)) {
        testimonials = [
            {
                url: framarz,
                text: "As a leading importer of large vehicles, faced management challenges in finance and logistics. The implementation of the Transport ERP system in the company's accounting program brought about significant transformation. This system integrated all processes. It improved team productivity, enabled better profit and loss analysis. Additionally, the system's diverse functionalities and strong support from the development team.",
                name: 'Faramarz Fayzi',
                level: 'Financial Manager',
                location: ' Munib Soheib Khatibi Company',
            },

            {
                url: mobin,
                text: 'Working with Al-Kharazmi Company was a great experience. They created an easy-to-use and reliable accounting system that perfectly fits our needs. It has improved our efficiency, saved us time, and made managing our finances much easier. Their team was professional, helpful, and always available to answer questions. We highly recommend them to anyone looking for a good accounting software solution.',
                name: 'Mobin Siddiqui',
                level: ' CEO',
                location: 'Anardarah Petroleum Company',
            },

            {
                url: rahmani,
                text: "  I would like to take this time to appreciate Alkharazmi programming company for their great services and professionalism. Nanonet Educational Academy's website is designed and developed by this brilliant company. My experience as Nanonet manager was really pleasing and productive with Alkharazmi Company in all aspects of the project including price and maintenance. I hope success and betterment for all members Alkharazmi's company. .",
                name: 'Ebrahim Rahmani',
                level: ' Manager',
                location: 'Nano Net Academy',
            },
        ];
    }

    const [current, setCurrent] = useState(0);
    const prevSlide = () => setCurrent((current) => (current == 0 ? testimonials.length - 1 : current - 1));

    const nextSlide = () => setCurrent((current) => (current == testimonials.length - 1 ? 0 : current + 1));

    return (
        <section className="sm: mx-auto max-w-[500px] overflow-x-hidden px-10 py-10 md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1440px]">
            <div className="sm: relative mx-auto mb-[40px] block max-w-[500px] overflow-hidden md:max-w-[800px] lg:mb-[80px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1440px]">
                <div className="w-[10000px]">
                    <div className={`group float-left mx-[15px] block h-full ${isRTL ? 'loop-scrool-ltr' : 'loop-scrool-ltr'}`}>
                        <h2 className="flex items-center text-3xl font-bold text-white uppercase hover:text-[#2baa8d] lg:text-6xl xl:text-8xl 2xl:text-9xl">
                            <a href="" className="inline-flex items-center gap-[8px] outline-0">
                                CLIENT'STESTIMONIAL
                            </a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="50px"
                                viewBox="0 -960 960 960"
                                width="50px"
                                fill="#2baa8d"
                                className="lg:h-[80px] lg:w-[180px] xl:h-[100px] xl:w-[100px] 2xl:h-[130px] 2xl:w-[130px]"
                            >
                                <path d="M364-195v-113h208.5l-404-404.5L248-792l404 404.5V-596h113v401H364Z" />
                            </svg>
                        </h2>
                    </div>
                    <div className={`group float-left mx-[15px] block h-full ${isRTL ? 'loop-scrool-ltr' : 'loop-scrool-ltr'}`}>
                        <h2 className="flex items-center text-3xl font-bold uppercase lg:text-6xl xl:text-8xl 2xl:text-9xl">
                            <a href="" className="text-strokeH1 inline-flex items-center gap-[8px] text-transparent outline-0 hover:stroke-[#2baa8d]">
                                CLIENT'STESTIMONIAL
                            </a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="50px"
                                viewBox="0 -960 960 960"
                                width="50px"
                                fill="transparent"
                                className="stroke-[#2baa8d] stroke-[10] lg:h-[80px] lg:w-[180px] xl:h-[100px] xl:w-[100px] 2xl:h-[130px] 2xl:w-[130px]"
                            >
                                <path d="M364-195v-113h208.5l-404-404.5L248-792l404 404.5V-596h113v401H364Z" />
                            </svg>
                        </h2>
                    </div>
                    <div className={`float-left mx-[15px] block h-full ${isRTL ? 'loop-scrool-ltr' : 'loop-scrool-ltr'}`}>
                        <h2 className="flex items-center text-3xl font-bold text-white uppercase hover:text-[#2baa8d] lg:text-6xl xl:text-8xl 2xl:text-9xl">
                            <a href="" className="inline-flex items-center gap-[8px] outline-0">
                                CLIENT'STESTIMONIAL
                            </a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="50px"
                                viewBox="0 -960 960 960"
                                width="50px"
                                fill="#2baa8d"
                                className="lg:h-[80px] lg:w-[180px] xl:h-[100px] xl:w-[100px] 2xl:h-[130px] 2xl:w-[130px]"
                            >
                                <path d="M364-195v-113h208.5l-404-404.5L248-792l404 404.5V-596h113v401H364Z" />
                            </svg>
                        </h2>
                    </div>
                    <div className={`group float-left mx-[15px] block h-full ${isRTL ? 'loop-scrool-ltr' : 'loop-scrool-ltr'}`}>
                        <h2 className="flex items-center text-3xl font-bold uppercase lg:text-6xl xl:text-8xl 2xl:text-9xl">
                            <a href="" className="text-strokeH1 inline-flex items-center gap-[8px] text-transparent outline-0 hover:stroke-[#2baa8d]">
                                CLIENT'STESTIMONIAL
                            </a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="50px"
                                viewBox="0 -960 960 960"
                                width="50px"
                                fill="transparent"
                                className="stroke-[#2baa8d] stroke-[10] lg:h-[80px] lg:w-[180px] xl:h-[100px] xl:w-[100px] 2xl:h-[130px] 2xl:w-[130px]"
                            >
                                <path d="M364-195v-113h208.5l-404-404.5L248-792l404 404.5V-596h113v401H364Z" />
                            </svg>
                        </h2>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-8 py-20 2xl:flex-row">
                <div className="grid max-w-[1200px] grid-cols-3 gap-8 max-lg:grid-cols-1">
                    <div className="mx-4 flex items-center justify-start">
                        <img src={imageList[current]} alt="testimonial" />
                    </div>
                    <div className="col-span-2 flex flex-col gap-4">
                        <div className="mx-4">
                            <svg xmlns="http://www.w3.org/2000/svg" height="80" width="80" viewBox="0 0 448 512">
                                <path
                                    fill="#2baa8d"
                                    d="M448 296c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 32 0 32 0 72zm-256 0c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 32 0 32 0 72z"
                                />
                            </svg>
                        </div>

                        <div className="mx-4">
                            <h4 className="mx-3 text-xl text-white">{testimonials[current].text}</h4>
                        </div>
                        <div className="mx-4">
                            <h5 className="mx-3 pb-4 text-2xl text-white">{testimonials[current].name}</h5>
                            <p className="mx-3 text-xl text-white">{testimonials[current].level}</p>
                            <p className="mx-3 text-xl text-white">{testimonials[current].location}</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-start gap-8 px-4 py-10 max-2xl:flex-row">
                    <button
                        onClick={prevSlide}
                        className="group flex h-[90px] w-[90px] -rotate-90 items-center justify-center rounded-full border border-gray-600 hover:bg-[#2baa8d] max-2xl:rotate-0"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 320 512">
                            <path
                                fill="#454d5a"
                                className="group-hover:fill-white"
                                d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                            />
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="group flex h-[90px] w-[90px] rotate-90 items-center justify-center rounded-full border border-gray-600 hover:bg-[#2baa8d] max-2xl:rotate-180"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 320 512">
                            <path
                                fill="#454d5a"
                                className="group-hover:fill-white"
                                d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};
export default SliderPart;
