
/**
 * Components
 */
import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: '/images/react.webp',
      title: 'Lorem ipsum dolor sit amet',
      tags: ['Test', 'Test', 'Test'],
      projectLink: 'https://github.com/AlinStroie'
    },
    {
      imgSrc: '/images/react.webp',
      title: 'Lorem ipsum dolor sit amet',
      tags: ['Test', 'Test'],
      projectLink: 'https://github.com/AlinStroie'
    },
    {
      imgSrc: '/images/react.webp',
      title: 'Lorem ipsum dolor sit amet',
      tags: ['Test', 'Test'],
      projectLink: ''
    },
    {
      imgSrc: '/images/react.webp',
      title: 'Lorem ipsum dolor sit amet',
      tags: ['Test', 'Test'],
      projectLink: 'https://github.com/AlinStroie'
    },
    {
      imgSrc: '/images/react.webp',
      title: 'Lorem ipsum dolor sit amet',
      tags: ['Test', 'Test'],
      projectLink: 'https://github.com/AlinStroie'
    },
    {
      imgSrc: '/images/react.webp',
      title: 'Lorem ipsum dolor sit amet',
      tags: ['Test', 'Test'],
      projectLink: 'https://github.com/AlinStroie'
    },
  ];


  const Work = () => {
    return (
        <section id="work" className="section">
            <div className="container">
                <h2 className="headline-2 mb-8">My portfolio highlights</h2>
                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                        <ProjectCard 
                            key={key}
                            imgSrc={imgSrc}
                            title={title}
                            tags={tags}
                            projectLink={projectLink} // Pass projectLink here
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work