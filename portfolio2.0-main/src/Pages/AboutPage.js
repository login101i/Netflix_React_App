import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} progress={'55%'} width={'55%'} />
                <SkillsSection skill={'React Js'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Node Js'} progress={'40%'} width={'40%'} />
               
                <SkillsSection skill={'ExpressJs'} progress={'45%'} width={'45%'} />
                <SkillsSection skill={'HTML/CSS'} progress={'76%'} width={'76%'} />
              
                <SkillsSection skill={'MongoDB/Postman'} progress={'59%'} width={'59%'} />

                <SkillsSection skill={'Wordpress'} progress={'75%'} width={'75%'} />
                <SkillsSection skill={'Chrome Dev Tools'} progress={'25%'} width={'25%'} />


            </div>

        </div>
    )
}

export default AboutPage;
