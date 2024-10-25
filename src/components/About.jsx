
const aboutItems = [
    {
      label: 'Project done',
      number: 0
    },
    {
      label: 'Years of experience',
      number: 0
    }
  ];

const About = () => {
    return (
        <section
        id="about" 
        className="section"
        >

            <div className="container">

                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                        Welcome! Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nunc a dolor pulvinar dolor aliquet euismod non ullamcorper lectus. 
                        Morbi et enim in odio facilisis auctor. 
                        Suspendisse consequat neque eget odio suscipit, et dictum tellus semper. 
                    </p>

                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {
                            aboutItems.map(({label, number}, key) => (
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                    <span className="text-sky-400 font-semibold
                                    md:text-3xl">+</span>
                                </div>

                                <p className="text-sm text-zinc-400">{label}</p>
                            </div>
                                
                            ))        
                        }

                        
                    </div>
                </div>

            </div>

        </section>
    )
}



export default About