
import { useTranslation } from 'react-i18next';
import  'i18next';


const Language = () => {
    const {t, i18n } = useTranslation();
   const changeLanguage = (lang) => {
       i18n.changeLanguage(lang);
    }
    return (
        <div className=" h-[120px] mx-auto flex w-full items-center justify-center hover:cursor-pointer max-w-[500px] px-4 py-10 md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1440px]">
        
            
                    <select onClick={(e) => changeLanguage(e.target.value)} className="bg-white w-[100px] h-[40px] flex justify-center items-center">
                       <option value="En" className="text-black">En</option>
                        <option value="Fa" className="text-fuchsia-400">Fa</option>
                    </select>
                    <div className='text-fuchsia-500 mx-10'>{t('welcome')} </div>
                   
        </div>
    );
};
 
export default Language;