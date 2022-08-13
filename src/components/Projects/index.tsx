import ProjectCard from "../ProjectCard"

function Projects() {
    return (

        // container
        <div className="flex flex-col items-center justify-center w-full pb-10 gap-8">

            {/* title */}
            <h2 className="text-H2 text-WHITE">Last projects</h2>

            {/* cards */}
            <div className="flex flex-row gap-16">
                <ProjectCard
                    title="A simple title here, telling something about the last project"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet dapibus tempus. Sed fermentum arcu lectus, sed ullamcorper urna ullamcorper et."
                    imageLink="./src/assets/img/projects/lisbon.jpg"
                    buttonLink="https://www.google.com"
                >
                </ProjectCard>

                <ProjectCard
                    title="A simple title here, telling something about the last project"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet dapibus tempus. Sed fermentum arcu lectus, sed ullamcorper urna ullamcorper et."
                    imageLink="./src/assets/img/projects/lisbon.jpg"
                    buttonLink="https://www.google.com"
                >
                </ProjectCard>

                <ProjectCard
                    title="A simple title here, telling something about the last project"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet dapibus tempus. Sed fermentum arcu lectus, sed ullamcorper urna ullamcorper et."
                    imageLink="./src/assets/img/projects/lisbon.jpg"
                    buttonLink="https://www.google.com"
                >
                </ProjectCard>
            </div>

        </div>
    )
}

export default Projects