import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello There,<br/>
           I'm Prasanna Vasudevan
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Full-stack developer / Front-end-developer / Back-end-developer
        </SectionText>
        <Button><a href='https://drive.google.com/file/d/1KOzbhYDXj3R8O66n6xf7HQSeFBayFGzF/view?usp=drive_link'  style={{color:"white" }}>Resume</a></Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;