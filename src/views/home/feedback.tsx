import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import UserImage from "@/assets/images/user.jpg"

const Feedback = () => {
    return (
        <section className='px-5 my-52 md:px-10 lg:px-24 flex justify-center items-center'>

            <div className="left-side w-1/2 mr-20">
                <h2 className="text-3xl text-light-blue text-md">Avaliação</h2>
                <h1 className="font-bold text-3xl text-dark-blue leading-tight dark:text-white">Feedback dos nossos clientes</h1>
                <p className="text-dark-gray mt-5 dark:text-light-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <div className="right-side w-1/2">
                <Carousel
                    plugins={[
                        Autoplay({
                            delay: 5000,
                        }),
                    ]}
                >
                    <CarouselContent className="flex-auto flex">
                        <CarouselItem className="flex-none">
                            <div className="card w-[450px] h-96 p-10 rounded-lg bg-light-gray bg-opacity-10 flex flex-col items-center justify-center">
                                <div className="client flex items-center">
                                    <div className="avatar">
                                        <img className="w-20 h-20 rounded-full object-cover mr-5" src={UserImage} alt="" />
                                    </div>
                                    <div className="text">
                                        <h2 className="text-lg font-semibold text-light-blue">Paulo Henrique</h2>
                                        <p className="text-base text-dark-gray dark:text-white">Desenvolvedor Front-End</p>
                                    </div>
                                </div>
                                <div className="text mt-10 text-lg text-center text-dark-gray dark:text-white">“O maior dos critérios para escolha do Qualiex foi a usabilidade do sistema, que é muito boa e entrega tudo o que a gente precisa para nosso sistema de gestão.”</div>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="flex-none">
                            <div className="card w-[450px] h-96 p-10 rounded-lg bg-light-gray bg-opacity-10 flex flex-col items-center justify-center">
                                <div className="client flex items-center">
                                    <div className="avatar">
                                        <img className="w-20 h-20 rounded-full object-cover mr-5" src={UserImage} alt="" />
                                    </div>
                                    <div className="text">
                                        <h2 className="text-lg font-semibold text-light-blue">Paulo Henrique</h2>
                                        <p className="text-base text-dark-gray dark:text-white">Desenvolvedor Front-End</p>
                                    </div>
                                </div>
                                <div className="text mt-10 text-lg text-center text-dark-gray dark:text-white">“O maior dos critérios para escolha do Qualiex foi a usabilidade do sistema, que é muito boa e entrega tudo o que a gente precisa para nosso sistema de gestão.”</div>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="flex-none">
                            <div className="card w-[450px] h-96 p-10 rounded-lg bg-light-gray bg-opacity-10 flex flex-col items-center justify-center">
                                <div className="client flex items-center">
                                    <div className="avatar">
                                        <img className="w-20 h-20 rounded-full object-cover mr-5" src={UserImage} alt="" />
                                    </div>
                                    <div className="text">
                                        <h2 className="text-lg font-semibold text-light-blue">Paulo Henrique</h2>
                                        <p className="text-base text-dark-gray dark:text-white">Desenvolvedor Front-End</p>
                                    </div>
                                </div>
                                <div className="text mt-10 text-lg text-center text-dark-gray dark:text-white">“O maior dos critérios para escolha do Qualiex foi a usabilidade do sistema, que é muito boa e entrega tudo o que a gente precisa para nosso sistema de gestão.”</div>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>

        </section>
    )
}

export default Feedback