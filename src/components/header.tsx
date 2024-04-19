
import Link from "next/link";
import Image from 'next/image';
import {useTranslations} from 'next-intl';

import Switcher from "./switcher"
 

import {unstable_setRequestLocale} from 'next-intl/server';

export default function Header({
  params: { locale },
}: {
  params: { locale: string };
}){
  const t = useTranslations('Header');
  unstable_setRequestLocale(locale);
  console.log(locale)
    return (
        <header className="fixed z-20 w-full bg-white">
          <div className="flex px-5 space-x-* h-16 items-center justify-between w-full">
            <div className="flex justify-start items-center md:w-[139px] w-fit h-[28px]">
              <div className="md:hidden">
                <Image src='/burger-menu.svg' alt="Burger menu" width={35} height={14} />
              </div>
              <div className="flex w-[102px] h-7 items-start justify-center">
                <Image src='/brandlogo.svg' alt="Logo company" width={90} height={24}/>
              </div>
              <Image src='/alpha.svg' alt="Logo alpha" width={35} height={14}/>
            </div>
            <div className="flex justify-end items-center  h-[43px] font-[570] text-sm font-[Inter, sans-serif]">
              <nav className="hidden md:block md:w-fit md:h-[19px] md:mr-3">
                <ul className="flex w-fit h-[19px]">
                  <li><Link href={`/${locale}#platform`} className="py-[5px] lg:px-3 lg:mr-6 px-1 focus:border focus:border-[#55bbeb] focus:rounded-md">{t('platform')}</Link></li>
                  <li><Link href='' className="py-[5px] lg:px-3 lg:mr-6 px-1">{t('features')}</Link></li>
                  <li><Link href='' className="py-[5px] lg:px-3 lg:mr-6 px-1">{t('faq')}</Link></li>
                  <li><Link href={`/${locale}#contacts`} className="py-[5px] lg:px-3 lg:mr-6 px-1 focus:border focus:border-[#55bbeb] focus:rounded-md">{t('contacts')}</Link></li>
                </ul>
              </nav>
              <Switcher/>
              <Link href='https://student.beyim.ai/authorization?lng=en' className="flex justify-end w-[113px] lg:w-[138px] h-[43px]">
                <button className="w-[113px] bg-[#55bbeb] text-white rounded-[10px] ml-[25px] text-[17px] font-[500]">{t('signIn')}</button>
              </Link>
            </div>
          </div>
          <div className="hidden">
          <nav className="hidden">
                <ul className="flex w-fit h-[19px]">
                  <li><Link href='/#paltform' className="py-[5px] px-3 mr-6">{t('platform')}</Link></li>
                  <li><Link href='' className="py-[5px] px-3 mr-6">{t('features')}</Link></li>
                  <li><Link href='' className="py-[5px] px-3 mr-6">{t('faq')}</Link></li>
                  <li><Link href={`/${locale}#contacts`} className="py-[5px] px-3 mr-6">{t('contacts')}</Link></li>
                </ul>
            </nav>
          </div>
        </header>
    )
}