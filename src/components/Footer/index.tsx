// import TextField from "../TextField"
import Button from "../Button"

function Footer() {
    return (
        // container
        <div className="flex flex-col w-full px-16 py-8 gap-8">

            {/* Top content */}
            <div className="w-full flex flex-col gap-4">

                {/* Logo */}
                <div className="w-40">
                    <img src="./src/assets/img/logos/Horizontal-White.svg" alt="Horizontal ldequadra logo" />
                </div>

                {/* Links */}
                <div className="flex flex-row items-center gap-4 uppercase text-H6 text-WHITE">
                    <a href="https://ldequadra.com">Website</a>
                    <a target="_blank" href="https://github.com/ldequadra">Github</a>
                    <a target="_blank" href="https://linkedin.com/in/ldequadra">Linkedin</a>
                    <a target="_blank" href="https://instagram.com/ldequadra">Instagram</a>
                </div>
            </div>


            {/* Separator */}
            <div className="h-[1px] w-full bg-N300"></div>


            {/* Bottom content */}
            <div className="flex flex-row w-full items-center justify-between text-N200 text-P2">

                <span>Copyright © 2022 ldequadra - All Rights Reserved</span>
                <a href="#" className="text-DETAIL whitespace-nowrap">Credits</a>

            </div>

        </div>
    )
}

export default Footer