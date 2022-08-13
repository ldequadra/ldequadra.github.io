import Button from "../Button"

interface ProjectCardProps {
    title: string;
    description: string;
    imageLink: string;
    buttonLink: string;
    children?: any;
}

function ProjectCard(props: ProjectCardProps, children: any) {
    return (
        // Card container
        <div className="flex flex-col w-80 shadow-md hover:shadow-xl hover:scale-[1.025] transition">

            {/* Image */}
            <img className="rounded-t-lg w-full h-48 object-cover" src={props.imageLink} alt="Project image" />

            {/* Content */}
            <div className="flex flex-col bg-WHITE h-60 gap-4 p-6 rounded-b-lg">

                {/* Title */}
                <span className="text-H5">{props.title}</span>

                {/* Description */}
                <span className="text-P2">{props.description}</span>

                <Button
                    appearance="primary"
                    href={props.buttonLink}
                    target="_blank"
                    iconAfter="fa-brands fa-github"
                >
                    Read more
                </Button>
            </div>

        </div>
    )
}

export default ProjectCard