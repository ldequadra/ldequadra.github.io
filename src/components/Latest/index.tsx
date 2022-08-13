function Latest() {
    return (

        // container
        <div className="flex flex-col w-full h-72 px-32 gap-12">

            {/* header */}
            <div className="flex flex-row justify-between items-baseline">

                <h3 className="text-H3 text-WHITE ">Latest research</h3>

                <a
                    href="#"
                    className="h-fit w-fit text-BUTTON text-C300 hover:text-C500 transition"
                >
                    Read more
                    <i className="fa-solid fa-angles-right ml-2 text-[12px]"></i>
                </a>

            </div>

            {/* content */}
            <div className="flex flex-col gap-8">

                {/* item 1 */}
                <div className="flex flex-row gap-4">

                    <div className="rounded-full bg-O300 h-4 w-4"></div>

                    {/* texts */}
                    <div className="flex flex-col">
                        <a href="#" target="_blank" className="text-H5 text-WHITE">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
                        <span className="text-P2 text-N200">August, 2022</span>
                    </div>
                </div>

                {/* item 2 */}
                <div className="flex flex-row gap-4">

                    <div className="rounded-full bg-O300 h-4 w-4"></div>

                    {/* texts */}
                    <div className="flex flex-col">
                        <a href="#" target="_blank" className="text-H5 text-WHITE">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
                        <span className="text-P2 text-N200">July, 2022</span>
                    </div>
                </div>

                {/* item 3 */}
                <div className="flex flex-row gap-4">

                    <div className="rounded-full bg-O300 h-4 w-4"></div>

                    {/* texts */}
                    <div className="flex flex-col">
                        <a href="#" target="_blank" className="text-H5 text-WHITE">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
                        <span className="text-P2 text-N200">May, 2022</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Latest