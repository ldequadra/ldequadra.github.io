import Button from "../Button"

function Contact() {
    return (

        // container
        <div className="w-full h-72 flex flex-col gap-8 bg-C300 justify-center items-center">

            <h2 className="text-H2 font-bold text-N500 text-center">Let's talk</h2>

            <p className="text-P1 text-N500 w-[880px] text-center">Different projects with different perspectives. Each one has it own details and skill level and that allows me to learn more in each build. If you want to talk and maybe develope something together, send me a message.</p>

            <a
                href="mailto:contact@ldequadra.com"
                target="_blank"
                className="bg-N400 text-WHITE text-BUTTON px-4 py-2 rounded flex flex-row justify-center items-center w-min cursor-pointer whitespace-nowrap hover:bg-N500 transition"
            >
                Send email
                <i className="fa-solid fa-envelope ml-2 text-[12px]"></i>
            </a>

        </div>

    )
}

export default Contact