import React from 'react';
import Notifications from "./notifications";
import ToggleLanguage from "./toggle-language";
import ToggleTheme from "./toggle-theme";
import User from "./user";
import LogoImage from "@/assets/images/logo.png";
import { Button } from '../ui/button';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

const Navbar = ({ Homenavbar }: { Homenavbar: boolean }) => {

    const { t } = useTranslation();

    return (
        <div>
            {Homenavbar === false && (
                <div className="flex w-full h-20 items-center justify-end bg-layout py-3 pr-9">
                    <div className="flex items-center gap-12">
                        <div className="flex items-center gap-10">
                            <ToggleLanguage />
                            <Notifications />
                            <ToggleTheme />
                        </div>
                        <User />
                    </div>
                </div>
            )}
            {Homenavbar === true && (
                <div className="flex w-full h-20 items-center justify-between bg-layout py-3 px-9">
                    <img className='w-16' src={LogoImage} alt="Qualist logo made up of the letters Q and A" />
                    <div className="btn-container flex items-center">
                        <ToggleLanguage />
                        <div className='px-10 flex items-center'><ToggleTheme /></div>
                        <Button
                            variant="link"
                            className="font-bold text-white no-underline transition ease-out duration-500 hover:bg-light-gray hover:bg-opacity-5 hover:no-underline p-5"
                            asChild
                        >
                            <Link to="/signin">{t("I'm already a client")}</Link>
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;