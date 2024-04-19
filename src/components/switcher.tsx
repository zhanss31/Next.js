'use client';
import Link from "next/link";

export default function Switcher(){
    
    const onSelectChange =() =>{
        
    }
    return(
        <ul className="flex items-center w-fit h-[42px]">
                <li><Link href='' className="p-[2px] lg:mr-3 lg:p-[5px] mr-1">Қаз</Link></li>
                <li><Link href='/ru' id ='ru' className="p-[2px] lg:mr-3 lg:p-[5px] mr-1" onClick={onSelectChange}>Рус</Link></li>
                <li><Link href='/en' id ='en' className="p-[2px] lg:mr-3 lg:p-[5px] mr-1">Eng</Link></li>
                <li><Link href='' className="p-[2px] lg:mr-3 lg:p-[5px] mr-1">العربية</Link></li>
        </ul>
    )
}