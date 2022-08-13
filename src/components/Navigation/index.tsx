import Button from "../Button"

function Navigation() {
    return (
        // container
        <div className="w-full h-32 px-32 flex flex-row items-center justify-between">

            {/* logo */}
            <a className="h-fit" href="https://www.ldequadra.com">
                <img className="w-60" src="./src/assets/img/logos/Horizontal-White.png" alt="ldequadra horizontal logo" />
            </a>

            {/* menu */}
            <div className="flex flex-row gap-4 items-center uppercase text-H5">
                <a href="#" className="text-WHITE px-2 py-1 rounded hover:bg-N300 transition">Home</a>
                <a href="#" className="text-WHITE px-2 py-1 rounded hover:bg-N300 transition">About</a>
                <a href="#" className="text-WHITE px-2 py-1 rounded hover:bg-N300 transition">Research</a>
                <a href="#" className="text-WHITE px-2 py-1 rounded hover:bg-N300 transition">Projects</a>

                <a
                    href="mailto:contact@ldequadra.com"
                    target="_blank"
                    className="bg-C300 text-N500 px-4 py-2 rounded flex flex-row w-min cursor-pointer whitespace-nowrap hover:bg-C500 transition"
                >
                    Contact
                </a>

            </div>

        </div>
    )
}

export default Navigation