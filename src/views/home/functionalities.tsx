import React from 'react'
import { ListFuncItems } from "./list-func-items";
import { useTranslation } from "react-i18next";

const Functionalities = () => {

    const { t } = useTranslation();

    return (
        <section className='px-5 md:px-10 lg:px-24'>
            <div className='mt-52'>
                <h1 className='font-bold text-3xl text-dark-blue leading-tight text-center dark:text-white'>{t("Discover Qualist’s")} <span className='text-light-blue'>{t("Features")}</span></h1>
                <p className='text-dark-gray text-center mt-5 dark:text-light-gray'>{t("Below, we present the main features that make Qualist the")} <br /> {t("ideal choice for simplifying and optimizing your software quality audits.")}</p>
            </div>

            <div className='flex flex-wrap justify-center mt-20'>
                {ListFuncItems.map((item) => (
                    <div className=' flex flex-col items-center bg-gray-100 p-12 rounded-lg m-5 bg-light-gray bg-opacity-10 w-full md:w-1/2 lg:w-1/4'>
                        <item.icon className="text-7xl text-light-gray dark:text-white"/>
                        <h2 className='font-bold text-xl text-light-blue mt-5 text-center'>{t(item.text)}</h2>
                        <p className='text-dark-gray text-center mt-5 dark:text-light-gray'>{t(item.description)}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Functionalities