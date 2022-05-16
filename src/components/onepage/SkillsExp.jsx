import { useRef, useEffect } from 'react'
import Image from 'next/image';
import { useSelector } from 'react-redux';

const SkillsExp = () => {
    const slider = useRef()
    const images = [...Array(25).keys()];

    const skills = useSelector(e => e.portfolio.Skills)

    useEffect(() => {
        slider.current.scrollLeft += 50
    }, [50])

    const sectors = [
        "civil construction",
        "agriculture",
        "ecology",
        "agroecology",
        "education",
        "agriculture",
        "education",
        "health",
        "healthy lifestyle",
        "physiotherapy",
        "history",
        "martial arts",
        "digital marketing",
        "SEO",
        "copywriting",
        "design"
    ]


    return (
        <div id='#skills' className="mb-12 mx-auto lg:m-24 text-center">
            <div className='mb-24'>

                {/* <h3 className="text-[3rem] font-bold mb-10 underline leading-[4rem] mx-4">Experience</h3> */}
                <div className="mx-6 grid grid-cols-1 md:grid-cols-2 gap-[5rem] text-center">

                    <div className='border rounded-3xl py-16 px-8 bg-green-400 bg-opacity-20'>

                        <h3 className='text-3xl font-bold underline mb-[2rem] mx-10'>teamwork</h3>
                        <p className=''>
                            I have experience in teamwork and collaborations with agile methodologies such as scrum, I tend to be one of the most capable within the groups of dev collaborators, because of my commitment to the work and my wide range of knowledge and preparation.
                        </p>

                    </div>

                    <div className='border rounded-3xl pt-12 pb-8 px-8 bg-blue-400 bg-opacity-20'>
                        <h3 className='text-3xl font-bold underline mb-[2rem] mx-10'>know other sectors</h3>
                        <ul className='text-center grid grid-cols-2'>
                            {sectors.map((e, i) => (
                                <li key={i}>{e}</li>
                            ))}

                        </ul>


                    </div>
                </div>
            </div>

            <div className='mb-24'>

                <div className="border-b mx-[5%] mb-16">
                    <h3 className="text-center text-[3rem] font-bold mb-6 underline leading-[4rem] mx-4">
                        Technical skills
                    </h3>
                </div>



                <div className='my-16'>

                    <div className='flex items-center justify-center w-full h-full '>
                        <button className='bg-gray-500 mx-2' onClick={() => slider.current.scrollLeft -= 400}>
                            <svg class='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800' fillRule='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 19l-7-7 7-7'></path></svg>
                        </button>
                        <div ref={slider} class='overflow-hidden scroll-smooth h-full flex items-start justify-start'>
                            {skills.map((e, i) => (
                                <div key={i} className='snapt-start flex-shrink-0 mx-4 w-full md:w-1/3'>

                                    <div className="flex justify-center">
                                        <div className='bg-gray-400 p-5 rounded-full'>
                                            <Image width={50} height={50} src={`/images/skills/${e.name}.svg`} alt={`images${i}`} className='object-cover object-center w-full' />
                                        </div>
                                    </div>

                                    <h5>{e.name}</h5>
                                    <p className="">
                                        {e.description}</p>
                                </div>
                            ))}
                        </div>
                        <button className='bg-gray-500 mx-2' onClick={() => slider.current.scrollLeft += 400}>
                            <svg class='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800' fillRule='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 5l7 7-7 7'></path></svg>
                        </button>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default SkillsExp