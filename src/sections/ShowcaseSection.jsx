import React from 'react'

const ShowcaseSection = () => {
  return (
    <div id='work' className='app-showcase'>
        <div className='w-full'>
            <div className='showcaselayout'>
                {/* LEFT AREA */}
                <div className='first-project-wrapper'>
                    <div className='image-wrapper'>
                        <img src="/images/akhProject.png" alt="AKH Project" />
                    </div>
                    <div className='text-content'>
                        <h2>Purchase, Display, Visualization and Communication for Real Estate Homes made easy for AKH Construction Ltd. </h2>
                        <p>A web Application built with React.js and TailwindCSS for a sleek Design and User-Friendly experience.</p>
                    </div>
                </div>

                {/* RIGHT AREA */}
                <div className='project-list-wrapper overflow-hidden'>
                    <div className='project'>
                        <div className='image-wrapper bg-[#212121]'>
                            <img src="/images/pixelProject.png" alt="Pixel Codex Consulation Platform"/>
                        </div>
                        <h2>In-built Consultation Booking Platform</h2>
                    </div>
                    <div className='project'>
                        <div className='image-wrapper bg-[#1e1e1e]'>
                            <img src="/images/oryzonProject.png" alt="Pixel Codex Consulation Platform"/>
                        </div>
                        <h2>Oryzon Social Platform - Connect & Market</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShowcaseSection