import { Button } from '@/components/ui/button'
import MainImage from "@/assets/images/home.png";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import React from 'react'


const Main = () => {

    const { t } = useTranslation();

    return (

        <main className='ml-24 p-0 flex justify-center items-center'>

            <div className="left-side w-1/2">
                <h1 className='font-bold text-6xl text-dark-blue leading-tight dark:text-white'><span className='text-light-blue'>Qualist</span> - {t("Elevando o Padrão de Qualidade de Software")}</h1>
                <p className='text-dark-gray font-normal text-lg mt-2.5 mr-0 mb-12 ml-0 dark:text-light-gray'>
                    {t("Qualist é a ferramenta essencial para profissionais de QA que desejam transformar a gestão da qualidade de software. Com uma interface amigável e recursos avançados, o Qualist facilita a criação de checklists, a realização de auditorias e o gerenciamento de não conformidades, proporcionando uma experiência mais eficiente e precisa.")}
                </p>
                <Button className='h-12 px-10 text-lg font-normal dark:shadow-externo' type='submit'><Link to={"/signup"}>{t("Torne um cliente")}</Link></Button>
            </div>

            <div className="right-side w-1/2">
                <img className='w-[88%]' src={MainImage} alt="Woman using a Notebook" />
            </div>
        </main>
    )
}

export default Main