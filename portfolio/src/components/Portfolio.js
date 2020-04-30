import React from 'react';
import Flip from 'react-reveal/Flip';
import Card from './CustomCard';
import { FaReact, FaMobileAlt } from 'react-icons/fa';
import './Portfolio.css';

const portfolio = [
    {
        _id: 'reactjs',
        rprojects: [
        {
            name: 'MapScout (Junior Dev)',
            purpose: 'Bits of Good',
            date: 'January 2020 - May 2020',
            status: 'Delivered',
            link: 'https://www.mapscout.io/pacts',
            image: 'https://sharathpalathingal.s3.amazonaws.com/PACTSLogo.png',
            description: 'MapScout is an interactive resource map that helps people seeking aid.',
        },
        {
            name: 'VYBES',
            purpose: 'Client, Personal Blog',
            date: 'March 2020',
            status: 'Delivered',
            link: 'http://vybes.me',
            image: 'https://therealsharath.github.io/vybes/static/media/vybeslogo.17a4b3fa.png',
            description: "This simple website is designed to showcase Vybes's best work and highlight his style.",
        },
        {
            name: "Benji's Animal Shelter",
            purpose: 'Bits of Good',
            date: 'January 2020',
            status: 'Completed',
            link: 'https://github.com/therealsharath/final-project',
            image: 'https://sharathpalathingal.s3.amazonaws.com/BenjisLogo.png',
            description: 'A sample project in order to maintain an inventory of pets waiting to be apodted.',
        },
        {
            name: 'The Short Answer',
            purpose: 'Personal Project',
            date: 'December 2019 - Present',
            status: 'Ongoing',
            link: 'https://github.com/therealsharath/theshortanswer',
            image: 'https://sharathpalathingal.s3.amazonaws.com/The+short+answer.png',
            description: 'A website that helps international students apply to US higher educational institutions.',
        },
        ]
    },
    {
        _id: 'native',
        rprojects: [
        {
            name: 'MileSnap',
            purpose: 'HackGT6',
            date: 'October 2019',
            status: 'Completed',
            link: 'https://github.com/therealsharath/hackgt6',
            image: 'https://sharathpalathingal.s3.amazonaws.com/MileSnapLogo.png',
            description: 'MileSnap is an application that allows a user to take a picture of a gas station pricing sign and recieve the fuel type and its corresponding price for any type of sign, regardless of orientation or sign format.',
        },
        {
            name: 'WaterSMRT',
            purpose: 'Global Leadership Project',
            date: 'November 2019',
            status: 'Completed',
            link: 'https://github.com/therealsharath/watersmrt',
            image: 'https://sharathpalathingal.s3.amazonaws.com/WaterSMRTLogo.png',
            description: "WaterSMRT is an application that monitors water usage in a residence, providing real-time predictions and recommendations on how to better optimize your home's water consumption patterns.",
        },
        {
            name: 'ALRT',
            purpose: 'SwampHacks',
            date: 'February 2020',
            status: 'Compelted',
            link: 'https://devpost.com/software/alrt-rvmxgk',
            image: 'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/926/973/datas/original.png',
            description: "ALRT (Automated Life Rescue Tracker) is an application that aims to tackle the challenge of finding victims of natural disasters when weather conditions cause power and connection loss.",
        },
        ]
    },
]

function Portfolio() {
    return(
        <div id="portfolio" className="portHome">
            <div className="port">
                <FaReact className="portIcon"/>
                <h2 className="portTitle">React Projects</h2>
            </div>
            <div className="projects">
            {portfolio[0].rprojects.map(portfolioProject => (
                <Flip top>
                    <Card image={portfolioProject.image} name={portfolioProject.name} purpose={portfolioProject.purpose} 
                    date={portfolioProject.date} status={portfolioProject.status} link={portfolioProject.link} description={portfolioProject.description}/>
                </Flip>
            ))}
            </div>

            <div className="port">
                <FaMobileAlt className="portIcon"/>
                <h2 className="portTitle">React Native Projects</h2>
            </div>
            <div className="projects">
            {portfolio[1].rprojects.map(portfolioProject => (
                <Flip top>
                    <Card image={portfolioProject.image} name={portfolioProject.name} purpose={portfolioProject.purpose} 
                    date={portfolioProject.date} status={portfolioProject.status} link={portfolioProject.link} description={portfolioProject.description}/>
                </Flip>
            ))}
            </div>
        </div>
    )
}

export default Portfolio;