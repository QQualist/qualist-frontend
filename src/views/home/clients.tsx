import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useTranslation } from "react-i18next";
import Client1 from "@/assets/images/client-1.png"
import Client2 from "@/assets/images/client-2.png"
import Client3 from "@/assets/images/client-3.png"
import Client4 from "@/assets/images/client-4.png"
import Client5 from "@/assets/images/client-5.png"
import Client6 from "@/assets/images/client-6.png"
import Client7 from "@/assets/images/client-7.png"

const Clients = () => {

    const { t } = useTranslation();

    const carouselItems = [
        { src: Client1, alt: "" },
        { src: Client2, alt: "" },
        { src: Client3, alt: "" },
        { src: Client4, alt: "" },
        { src: Client5, alt: "" },
        { src: Client6, alt: "" },
        { src: Client7, alt: "" },
    ];

    return (
        <section className='bg-layout h-96 flex items-center justify-center px-24'>
            <div className="content w-full">
                <h1 className='font-bold text-white leading-tight text-center text-lg md:text-2xl lg:text-3xl'><span className='text-light-blue'>+1000</span> {t("professionals are already simplifying")} <br /> {t("their audits with Qualist.")}</h1>
                <p className='text-white text-center mt-8 lg:mt-16'>{t("Some of our clients")}</p>

                <Carousel
                    className="flex justify-center mt-14"
                    plugins={[
                        Autoplay({
                            delay: 5000,
                        }),
                    ]}
                >
                    <CarouselContent>
                        {carouselItems.map((item, index) => (
                            <CarouselItem key={index} className="basis-1/2 xl:basis-1/3">
                                <img className="w-48" src={item.src} alt={item.alt} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>


            </div>
        </section>
    )
}

export default Clients