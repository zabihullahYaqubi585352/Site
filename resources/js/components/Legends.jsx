import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
const Razeq = '/assets/LegendPhotos/abdulrazeq.webp';
const AhmadShah = '/assets/LegendPhotos/ahmadShah.webp';
const Arsalan = '/assets/LegendPhotos/arsalan.webp';
const Ehsan = '/assets/LegendPhotos/ehsan.webp';
const Hamid = '/assets/LegendPhotos/hamid.webp';
const khalid = '/assets/LegendPhotos/khaled.webp';
const Mostafa = '/assets/LegendPhotos/mostafa.webp';
const Nasim = '/assets/LegendPhotos/nasim.webp';
const Sebghat = '/assets/LegendPhotos/sebghat.webp';
const zabihullah = '/assets/LegendPhotos/zabihullah.webp';
const AhmadShahGif = '/assets/cpmpressed/AhmadShah.gif';
const ArsalanGif = '/assets/cpmpressed/Arsalan.gif';
const EhsanGif = '/assets/cpmpressed/Ehsan.gif';
const HamidGif = '/assets/cpmpressed/Hamid.gif';
const MostafaGif = '/assets/cpmpressed/Mostafa.gif';
const NasimGif = '/assets/cpmpressed/Nasim.gif';
const RazeqGif = '/assets/cpmpressed/Razeq.gif';
const SebghatGif = '/assets/cpmpressed/Sebghat.gif';
const zabihGif = '/assets/cpmpressed/Zabih.gif';

const SlideContents = [
    {
        name: 'Nasim Abdullah',
        image: Nasim,
        Gif: NasimGif,
        level: 'Full-Stack Developer',
    },

    {
        name: 'Mostafa Shakibani',
        Gif: MostafaGif,
        image: Mostafa,
        level: 'Full-Stack Developer',
    },
    {
        name: 'Zabihullah Yaqubi',
        Gif: zabihGif,
        image: zabihullah,
        level: 'Fronted Developer',
    },
    {
        name: 'Hamid Faqiri',
        image: Hamid,
        Gif: HamidGif,
        level: 'Backend Developer',
    },
    {
        name: 'Razeq Quarishi',
        Gif: RazeqGif,
        image: Razeq,
        level: 'Frontend Developer',
    },
    {
        name: 'Arsalan Asefi',
        image: Arsalan,
        level: 'Frontend Developer-Dsigner',
        Gif: ArsalanGif,
    },
    {
        name: 'Ehsan Haidary',
        image: Ehsan,
        level: 'Frontend Developer',
        Gif: EhsanGif,
    },
    {
        name: 'Ahmad khalid Behmanish',
        image: khalid,
        level: 'Managing Director',
        Gif: '',
    },
    {
        name: 'Ahmad Shah',
        image: AhmadShah,
        level: 'Frontend Developer-Designer',
        Gif: AhmadShahGif,
    },
    {
        name: 'Sebghat Amin',
        image: Sebghat,
        level: 'Frontend Developer',
        Gif: SebghatGif,
    },
];
const Legends = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplaySpeed: 2000,
        autoplay: true,
        pauseOnHover: true,
        cssEase: 'linear',

        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <div className="sm: mx-auto max-w-[500px] px-10 md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1440px]">
            <div className="mt-20">
                <div className="flex h-[50px] w-[220px] justify-center gap-2 rounded-3xl border border-[#2baa8d]">
                    {' '}
                    <span className="flex items-center justify-center text-xl text-[#2baa8d]">Our team</span>
                    <div className="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#2baa8d">
                            <path d="m243-240-51-51 405-405H240v-72h480v480h-72v-357L243-240Z" />
                        </svg>
                    </div>
                </div>

                <div className="max-w-full pt-4 pb-10">
                    <h1 className="w-[90%] text-6xl font-bold text-[#2baa8d] sm:text-4xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-6xl 2xl:leading-tight">
                        Meet the legents
                    </h1>
                </div>
            </div>
            <div className="mb-20">
                <Slider {...settings} className="flex">
                    {SlideContents.map((x, i) => (
                        <div key={i} className="slick-slider h-[450px] rounded-xl text-white">
                            <div className="group relative rounded-t-xl">
                                <img
                                    src={x.image}
                                    alt="Legends photo"
                                    className="full h-[300px] w-[350px] object-cover transition-opacity duration-300 group-hover:opacity-0"
                                />

                                <img
                                    src={x.Gif}
                                    alt="Legends gif"
                                    className="absolute top-0 left-0 hidden h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                />
                            </div>
                            <div className="  flex flex-col items-center justify-center bg-[#2baa8d] p-2">
                                <h4 className="text-xl font-semibold">{x.name}</h4>
                                <p className="mb-t text-lg font-semibold">{x.level}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};
export default Legends;
