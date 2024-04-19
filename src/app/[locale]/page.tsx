
import { getImageProps} from 'next/image'
import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';

function getBackgroundImage(srcSet = '') {
  const imageSet = srcSet
    .split(', ')
    .map((str) => {
      const [url, dpi] = str.split(' ')
      return `url("${url}") ${dpi}`
    })
    .join(', ')
  return `image-set(${imageSet})`
}

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}){
  const t = useTranslations('Main');
  unstable_setRequestLocale(locale);
  const {
    props: { srcSet },
  } = getImageProps({ alt: 'Fone image', width: 50, height: 50, src: '/GradientMain2.webp'})
  const backgroundImage = getBackgroundImage(srcSet)
  const style = {height: '100vh', width: 'auto', backgroundImage}
  return(
    <main id='platform' className ='bg-cover font-[500] text-[30px] font-[Inter, sans-serif]' style={style}>
      <div className='relative'>
        <div className='absolute w-full h-screen flex justify-center items-center text-center'>
          <h1 className='w-[450px] md:text-[45px] text-center text-[30px]'>{t('title')}</h1>
        </div>

        <div className='absolute w-full h-screen flex justify-center mr- gap-20'>
          <div className='flex items-end my-10'>
            <Image height={100} width={100} src='/iconContent1.svg' alt='first icon'></Image>
          </div>
          <div className='flex items-end my-10'>
            <Image height={100} width={100} src='/iconContent2.svg'alt='second icon'></Image>
          </div>
          <div className='flex items-end my-10'>
            <Image height={100} width={100} src='/iconContent3.svg' alt='third icon'></Image>
          </div>
        </div>
      </div>
    </main>
  )
}