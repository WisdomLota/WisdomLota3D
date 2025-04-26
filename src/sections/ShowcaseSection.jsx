import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {

    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);  
    const project3Ref = useRef(null);

    useGSAP(() => {
        
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current]

        projects.forEach((card, index) => {
            gsap.fromTo(card, {
                y: 50,
                opacity: 0
            }, 
            {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.3 * (index + 1),
                scrollTrigger: {
                    trigger: card,
                    start: "top bottom-=100"
                }
            })
        })

        //fade in the whole project section nicely
        gsap.fromTo(sectionRef.current, { opacity: 0 }, {opacity:1, duration:1.5}) 
    }, [])

  return (
    <section ref={sectionRef} id='work' className='app-showcase'>
        <div className='w-full'>
            <div className='showcaselayout'>
                {/* LEFT AREA */}
                <a href='https://akh-construction-ltd.vercel.app/' target="_blank" className='first-project-wrapper mr-2 cursor-pointer' ref={project1Ref}>
                    <div className='image-wrapper'>
                        <img src="/images/akhProject.png" alt="AKH Project" />
                    </div>
                    <div className='text-content'>
                        <h2>Purchase, Display, Visualization and Communication for Real Estate Homes made easy for AKH Construction Ltd. </h2>
                        <p>A web Application built with React.js and TailwindCSS for a sleek Design and User-Friendly experience.</p>
                    </div>
                </a>

                {/* RIGHT AREA */}
                <div className='project-list-wrapper overflow-hidden'>
                    <a href='https://pixel-codex-spw.vercel.app/' target='_blank' className='project mr-2 cursor-pointer' ref={project2Ref}>
                        <div className='image-wrapper bg-[#212121]'>
                            <img src="/images/pixelProject.png" alt="Pixel Codex Consulation Platform"/>
                        </div>
                        <h2>In-built Consultation Booking Platform</h2>
                    </a>
                    <a href='https://oryzon-website.vercel.app/' target='_blank' className='project mr-2 cursor-pointer' ref={project3Ref}>
                        <div className='image-wrapper bg-[#1e1e1e]'>
                            <img src="/images/oryzonProject.png" alt="Pixel Codex Consulation Platform"/>
                        </div>
                        <h2>Oryzon Social Platform - Connect & Market</h2>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection