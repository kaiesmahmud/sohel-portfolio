import React from 'react';
//icons
import {GiGlobe} from 'react-icons/gi'

const Gigs = () => {
    const gigs = [
        {
            id:1,
            name:'Digital Marketing',
            platforms:['Social Media Management (SMM)','Search Engine Optimization (SEO)',
            "Search Engine Optimization (SEO)",'Graphic Design','Content Writing','Facebook Ads','Instagram Ads','Instagram Ads',
        'YouTube marketing',"Email marketing"],
            experience:'I have 3+ years practical experience with digital marketing and completed several projects in the past few years.',
            about:'Develop a comprehensive digital marketing strategy that aligns with the company overall goals.Monitor relevant industry trends and adjust strategies accordingly.Develop content plans for social media campaigns that are tailored to reach target  audiences.Manage the creation of website content; ensure accuracy and quality control.Track website traffic and analyse results to determine effectiveness of campaigns.Utilise SEO/SEM techniques to optimise website visibility across search engine platforms.Create email campaigns that align with key objectives and target customer segments.Identify potential partners and influencers for collaboration opportunitie '
        },
        {
            id:2,
            name:'Search Engine Optimization(SEO) ',
            platforms:['Ahrefs: SEO Keyword Tool','Google Search Console','SEMRush','KWFinder','Moz Pro','Ubersuggest',
            'Answer The Public','SpyFu',],
            experience:'I have 1+ years practical experience with SEO and completed several projects in the past few years',
            about:'I will research and analyse competitor websites. Develop SEO strategies to increase organic search engine visibility. Monitor search engine rankings and adjust SEO strategies accordingly. Track website analytics and provide regular reports. Create keyword lists ad optimise content for target keywords. Collaborate with content writers and web designers to optimise content for SEO purposes.n Stay up to date with the latest SEO trends and best practices '
        },
        {
            id:4,
            name:'Social Media Marketing Manager',
            platforms:['Facebook','Instagram',"Twitter",'Snapshot','LinkedIn',"Reddit",'viber','Imo','Google Plus',"Youtube",'Pinterest','Digg','PhotoBucket','BlackPlanet'],
            experience:"I've got 1+ year experience on a very wide variety of web platforms ",
            about:'I will plan, create, manage and execute content across multiple social media channels. Develop strategies to increase followership and engagement on all major channels. Monitor and respond to comments on social media posts with customer service in mind'
        },
        {
            id:3,
            name:'Wordpress Theme Customization and Development',
            platforms:['Wordpress','Theme',"WebDesign",'Customization','PHP','Payment Gateway','API',"Authentication",'Google Auth','NoSQL Database','CRUD Operations'],
            experience:'I have 1+ years practical experience with WordPress and completed several projects in the past few years',
            about:'Develop new WordPress websites and applications from scratch. Customise existing themes and plugins to meet customer requirements. Debug existing code and troubleshoot any technical issues that arise. Write clean, well-documented code that follows best practices. Utilise version control systems such as Git for website development. Optimise website performance for speed and scalability. Collaborate with other developers on larger projects'
        },
        {
            id:5,
            name:'B2B & B2C Lead Generation',
            platforms:['Snov.io','Zoominfo.com','Rocketreach','Hunter.io','Skrapp','Prospect.io','Reply.io','AeroLeads','Datanyze'
            ],
            experience:'I have 1+ years of experience in website backend dev fields',
            about:'Research and identify target customers, create lead lists, and develop outreach strategies to engage them. Develop customer personas to understand the needs of potential customers. Create campaigns (email, social media, etc.) to expand brand recognition. Monitor performance of campaigns and adjust as needed in order to maximise ROI. Utilise various forms of digital marketing (SEO/SEM) to increase website traffic and lead generation. Track success metrics such as total leads generated, cost per lead/conversion rate, etc. Collaborate with other departments in order to better understand customer needs and develop solutions'
        },
        
    ]
    return (
        <div className='m-10 lg:m-20 p-5 flex flex-wrap justify-center items-center gap-5'>
            {
                gigs.map(ob=>(
                    <div key={ob.id} className=' border p-5 w-[100%] lg:w-[40%] rounded bg-slate-900 hover:bg-black transition-all ease-in duration-300'>
                        <div className='flex justify-start gap-5 items-center pb-5'>
                            <div className='text-3xl lg:text-5xl'><GiGlobe/></div>
                            <h1 className='text-xl lg:text-2xl font-light'>{ob.name}</h1>
                        </div>
                        <div>
                            <p className='font-light opacity-80'> <span className='font-semibold'>Experience: </span>
                            {ob.experience}     
                            </p>
                            <div className='text-xs my-2 font-extralight flex flex-wrap items-center gap-2 '>
                                {
                                    ob?.platforms.map(ob=>
                                    <div className='text-xs rounded px-2 py-1 bg-black hover:border bg-opacity-70'>{ob}</div>)
                                }
                            </div>
                            <p className='font-extralight opacity-80'>
                            {ob.about}     
                            </p>
                        </div>
                    </div>

                ))
            }

        </div>
    );
};

export default Gigs;