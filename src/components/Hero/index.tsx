import Button from "../Button"

function Hero() {
    return (
        // container
        <div className="bg-N400 w-full h-[420px] flex flex-col px-32 gap-8 justify-center">

            {/* Display text */}
            <span className="w-[1000px] text-D text-C300">I'm Luiz de Quadra, electrical engineering student and web developer</span>

            {/* description */}
            <span className="w-[1000px] text-H5 text-WHITE">In constant development and aware on the growing technological advance and constant globalization, always researching new topics and ways to improve old projects with modern concepts.</span>

            {/* buttons */}
            <div className="flex flex-row gap-2">
                <Button
                    appearance="primary"
                    href="https://github.com/ldequadra"
                    target="_blank"
                    iconAfter="fa-brands fa-github"
                >
                    GitHub
                </Button>

                <Button
                    appearance="secondary"
                    href="https://linkedin.com/in/ldequadra"
                    target="_blank"
                    iconAfter="fa-brands fa-linkedin"
                >
                    LinkedIn
                </Button>
            </div>

        </div>
    )
}

export default Hero