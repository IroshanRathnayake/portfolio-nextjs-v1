'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';
import { getId } from '@/lib/utils/helper';

import { AuthorImage, Link, ListItem, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            Hi, my name is Iroshan Rathnayake, an Associate Software Engineer at
            Ekara Digital in New Zealand, and CS undergraduate at{' '}
            <Link
              href="https://www.uwu.ac.lk/"
              target="_blank"
              className="text-accent"
            >
              Uva Wellassa University, Sri Lanka
            </Link>
            .
            <br /> I'm a passionate full-stack developer with a love for
            exploring new tech stacks, from Angular and React to machine
            learning with TensorFlow and PyTorch.
          </p>
          <p>
            Currently, I’m focused on building scalable and efficient solutions,
            and have had the privilege of contributing to projects such as{' '}
            <Link
              href="https://ceylon.ai/"
              target="_blank"
              className="text-accent"
            >
              Ceylon AI
            </Link>
            , where I worked on both backend and frontend development using
            cutting-edge technologies like Spring Boot, React, and machine
            learning models.
          </p>
          <p>
            My main goal these days is to continue enhancing my skills in
            full-stack development, machine learning, and mobile development
            while exploring exciting freelance opportunities.
          </p>

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="grid w-2/3 grid-cols-2 gap-1 text-sm">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <AuthorImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
