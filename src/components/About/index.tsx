function About() {
    return (
        // container
        <div className="flex items-center justify-center w-full h-[320px]">

            <div className="border border-N300 rounded-lg h-[200px] w-[1000px] gap-8 items-center flex flex-row">

                {/* Image */}
                <div className="relative mb-10">
                    <img src="./src/assets/img/about-illustration.png" alt="About me illustration" />
                </div>

                {/* Texts */}
                <div className="text-WHITE flex flex-col w-[600px] gap-4">

                    <span className="text-H4">About me</span>

                    <p
                        className="text-P2"
                    >
                        An electrical engineering student with technical courses and experience around multinational companies. Focused on technology improvement, security, control and flexibility for global projects with modern resources.
                    </p>


                    <a
                        href="#"
                        className="group w-fit text-BUTTON text-C300 hover:text-C500 transition"
                    >
                        Read more about my skills
                        <i className="fa-solid fa-arrow-right ml-2 text-[12px] group-hover:ml-3"></i>
                    </a>

                </div>
            </div>

        </div>
    )
}

export default About