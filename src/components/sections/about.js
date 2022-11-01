import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 1000px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: 35% 60%;
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'Modern C++',
    'Robot Operating System (ROS)',
    'Python',
    'Point Cloud Library (PCL)',
    'OpenCV',
    'Web Ontology Language (OWL)',
    'Indoor SLAM',
    'Semantic Web Reasoning Language (SWRL)',
    'Docker',
    'Unified Robot Description Format (URDF)',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="non-numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              I am currently located in Bonn, Germany and am a recent graduate of the Master's in{' '}
              <a
                href="https://www.h-brs.de/en/inf/study/master/autonomous-systems"
                target="_blank"
                rel="noreferrer">
                Autonomous Systems
              </a>{' '}
              program at the Hochschule Bonn-Rhein-Sieg, Germany. I have been a member of the{' '}
              <a
                href="https://mas-group.inf.h-brs.de/?page_id=622"
                target="_blank"
                rel="noreferrer">
                b-it-bots@Home
              </a>{' '}
              team and participated in the{' '}
              <a href="https://athome.robocup.org/" target="_blank" rel="noreferrer">
                RoboCup@Home
              </a>{' '}
              international league competitions that provided opportunities to translate my academic
              knowledge into practical experiences of working with robots.
            </p>

            {/* <p>
              Previously, I worked for 4+ years for a large MNC in the automobile industry developing 
              software for the in-vehicle infotainment systems. I gained rich 
              experience of developing highly optimized C++ applications for embedded
              systems with limited computing power while being a part of diverse and multi-cultural
              team spread across three continents.
            </p> */}

            <p>
              My professional career spans the automotive navigation and indoor mobile robotics
              domains. I have a rich experience of working in different environments ranging from an
              academic research project and a small startup to a large multinational company. Being
              a part of diverse and multi-cultural teams spread across several continents has helped
              me develop professional soft skills that enable me to easily interact and integrate
              with people, both within and outside the team.
            </p>

            <p>Here are a few technologies I've been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>

          <div>
            <br></br>

            <h3>Hobbies</h3>
            <p>
              Besides programming, I love to cook traditional Indian cuisine, go out for long walks,
              and watch mystery shows.
            </p>
          </div>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/sushant.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
