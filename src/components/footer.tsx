import Image from 'next/image';
import {useTranslations} from 'next-intl';

export default function Footer(){
    const t = useTranslations('Footer');
    return(
        <footer className='flex w-full h-fit justify-between lg:px-[155px] px-[100px] py-[50px]'>
            <div id='contacts' className='flex flex-col justify-center gap-2 font-[600] text-zinc-500 text-base font-[Inter, sans-serif] lg:ml-20 ml-5'>
                <h2>{t('contacts')}</h2>
                <p>8777-777-77-77</p>
                <p>insta:beyim.ai</p>
                <p>© 2024 BeyimTech</p>

            </div>
            <div>
                <Image width ={150} height= {150}src='/logoNis.svg' alt='Логотип Ниша'></Image>
            </div>
        </footer>
    )
}