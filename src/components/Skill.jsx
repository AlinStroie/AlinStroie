

/**
 * Components
 */
import SkillCard from "./SkillCard";

const skillItem = [
    {
      imgSrc: '/images/figma.svg',
      label: 'Lorem Ipsum',
      desc: 'Lorem Ipsum'
    },
    {
      imgSrc: '/images/css3.svg',
      label: 'Lorem Ipsum',
      desc: 'Lorem Ipsum'
    },
    {
      imgSrc: '/images/javascript.svg',
      label: 'Lorem Ipsum',
      desc: 'Lorem Ipsum'
    },
    {
      imgSrc: '/images/nodejs.svg',
      label: 'Lorem Ipsum',
      desc: 'Lorem Ipsum'
    },
    {
      imgSrc: '/images/expressjs.svg',
      label: 'Lorem Ipsum',
      desc: 'Lorem Ipsum'
    },
    {
      imgSrc: '/images/mongodb.svg',
      label: 'Lorem Ipsum',
      desc: 'Lorem Ipsum'
    },
    {
      imgSrc: '/images/react.svg',
      label: 'Lorem Ipsum',
      desc: 'Lorem Ipsum'
    },
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'Lorem Ipsum',
      desc: 'Lorem Ipsum'
    },
  ];

const Skill = () => {
    return (
        <section className="section">
            <div className="container">

            <h2 className="headline-2">
                Essential tools I use
            </h2>

            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
                Discover the powerful tools and technologies 
                I use to create exceptional, 
                high-performing websites & applications.
            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({imgSrc, label, desc }, key) => 
                    (
                        <SkillCard 
                        key = {key}
                        imgSrc = {imgSrc}
                        label = {label}
                        desc = {desc}
                        /> 
                    ))
                }
            </div>

            </div>
        </section>
    )
}

export default Skill