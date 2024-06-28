import Logo from "@/assets/images/logo.png"

const Footer = () => {
    return (

        <footer className="px-5 md:px-10 lg:px-24 flex justify-between items-center bg-layout h-64">

            <div className="left-container">
                <div className="logo"><img src={Logo} alt="" /></div>
                <p className="text-white font-light w-64 my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="right-container text-white text-end">
                <h2 className="text-lg mb-5">Contact Us</h2>

                <div className="contact-container flex">

                    <div className="contact">
                        <h3>Address</h3>
                        <p className="text-medium-gray">Avenida Lorem, 123, 1º andar, sala 123 - Curitiba - PR</p>
                    </div>

                    <div className="contact mx-20">
                        <h3>Email</h3>
                        <p className="text-medium-gray">qualist.support@gmail.com</p>
                    </div>

                    <div className="contact">
                        <h3>Phone</h3>
                        <p className="text-medium-gray">(41) 97352-9649</p>
                    </div>

                </div>
            </div>

        </footer>

    )
}

export default Footer