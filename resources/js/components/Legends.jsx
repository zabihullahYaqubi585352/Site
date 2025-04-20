import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './i18n';
const Razeq = '/assets/LegendPhotos/abdulrazeq.webp';
const AhmadShah = '/assets/LegendPhotos/ahmadShah.webp';
const WaliAhmad = '/assets/LegendPhotos/WaliAhmad.webp';
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
const WaliAhmadGif = '/assets/cpmpressed/WaliAhmad.gif';

const SlideContents = [
    {
        name: 'team.nasim',
        image: Nasim,
        Gif: NasimGif,
        level: 'roles.fullstack',
    },
    {
        name: 'team.waliAhmad',
        image: WaliAhmad,
        Gif: WaliAhmadGif,
        level: 'roles.frontend',
    },

    {
        name: 'team.mostafa',
        Gif: MostafaGif,
        image: Mostafa,
        level: 'roles.fullstack',
    },
    {
        name: 'team.zabihullah',
        Gif: zabihGif,
        image: zabihullah,
        level: 'roles.frontend',
    },
    {
        name: 'team.hamid',
        image: Hamid,
        Gif: HamidGif,
        level: 'roles.backend',
    },
    {
        name: 'team.razeq',
        Gif: RazeqGif,
        image: Razeq,
        level: 'roles.frontend',
    },
    {
        name: 'team.arsalan',
        image: Arsalan,
        level: 'roles.frontendDesigner',
        Gif: ArsalanGif,
    },
    {
        name: 'team.ehsan',
        image: Ehsan,
        level: 'roles.frontend',
        Gif: EhsanGif,
    },
    {
        name: 'team.khalid',
        image: khalid,
        level: 'roles.manager',
        Gif: '',
    },
    {
        name: 'team.ahmadShah',
        image: AhmadShah,
        level: 'roles.frontendDesigner',
        Gif: AhmadShahGif,
    },
    {
        name: 'team.sebghat',
        image: Sebghat,
        level: 'roles.frontend',
        Gif: SebghatGif,
    },
];
const Legends = () => {
    const { t, i18n } = useTranslation();
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
                    <span className="flex items-center justify-center text-xl text-[#2baa8d]">{t('ourTeam')}</span>
                    <div className="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#2baa8d">
                            <path d="m243-240-51-51 405-405H240v-72h480v480h-72v-357L243-240Z" />
                        </svg>
                    </div>
                </div>

                <div className="max-w-full pt-4 pb-10">
                    <h1 className="w-[90%] text-6xl font-bold text-[#2baa8d] sm:text-4xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-6xl 2xl:leading-tight">
                        {t('meetTheLegend')}
                    </h1>
                </div>
            </div>
            <div className="mb-20">
                <Slider {...settings} className="flex">
                    {SlideContents.map((x, i) => (
                        <div key={i} className="slick-slider h-[450px] rounded-xl text-white">
                            <div className="group relative rounded-t-xl">
                                {x.image && (
                                    <img
                                        src={x.image}
                                        alt="Legends photo"
                                        className="full h-[300px] w-[350px] object-cover transition-opacity duration-300 group-hover:opacity-0"
                                    />
                                )}

                                {x.Gif && (
                                    <img
                                        src={x.Gif}
                                        alt="Legends gif"
                                        className="absolute top-0 left-0 hidden h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                    />
                                )}
                            </div>
                            <div className="flex flex-col items-center justify-center bg-[#2baa8d] p-2">
                                <h4 className="text-xl font-semibold">{t(x.name)}</h4>
                                <p className="mb-t text-lg font-semibold">{t(x.level)}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};
export default Legends;
