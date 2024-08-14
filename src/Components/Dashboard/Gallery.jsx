import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import Headbar from './Headbar';
import AchievementCard from './Achievements'; // Import the AchievementCard component
import image1 from '../assets/pexels-cottonbro-7395455.jpg';
import image2 from '../assets/pexels-prismattco-2372945.jpg';
import image3 from '../assets/pexels-champion-of-champions-2492480-14363874.jpg';
import image4 from '../assets/pexels-vladvictoria-12478054.jpg';
import image5 from '../assets/pexels-pixabay-163532.jpg';
import image6 from '../assets/pexels-pixabay-248559.jpg';
import image7 from '../assets/pexels-aburrell-225956.jpg';
import image from '../assets/pexels-roma-shvetsov-6928126-6115766.jpg';
const slide = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

const GalleryContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-top: 8rem;
  margin-bottom: 5rem;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
  font-family: 'Roboto', sans-serif;
  color: #0C0C0C;
`;

const Description = styled.p`
  text-align: center;
  margin-bottom: 2rem;
  font-family: 'Roboto', sans-serif;
  color: #333;
`;

const Slider = styled.div`
  display: flex;
  animation: ${slide} 15s linear infinite;
  &:hover {
    animation-play-state: paused;
  }
`;

const ImageCard = styled.div`
  flex: 0 0 auto;
  width: 300px;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
  margin-right: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  // Add more image paths as needed
];

const achievements = [
  {
    title: 'Poetry Slam Win',
    description: 'The Literature Club dazzled the audience at the Inter-College Poetry Slam with their evocative and powerful verses. Their performances left a lasting impact and secured them the top prize. Kudos to all the poets!',
    image: image1,
  },
  {
    title: 'Annual Concert',
    description: 'The Music Club delivered an unforgettable performance at the annual concert, captivating the audience with a blend of classical and contemporary pieces. Their dedication and passion for music shone through in every note. Bravo, Music Club!',
    image: image2,
  },
  {
    title: 'Campus Marathon',
    description: 'The Sports Club organized a campus-wide marathon, encouraging students and staff to participate in a day of fitness and fun. The event was a huge success, promoting health and community spirit. Great job, Sports Club!',
    image: image3,
  },
  {
    title: 'Album Release',
    description: 'The Music Club proudly released their first album, showcasing the incredible talent of their members. The album features a variety of genres and original compositions, receiving rave reviews from the campus community. Well done, Music Club!',
    image: image,
  },
  // Add more achievements as needed
];

const Gallery = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let animationId;

    const animateSlider = () => {
      animationId = requestAnimationFrame(() => {
        const scrollWidth = slider.scrollWidth;
        const currentScroll = slider.scrollLeft;

        if (currentScroll >= scrollWidth - slider.clientWidth) {
          slider.scrollLeft = 0;
        } else {
          slider.scrollLeft += 1;
        }

        animateSlider();
      });
    };

    animateSlider();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div>
      <Headbar />
      <GalleryContainer>
        <Title>Welcome to our gallery!</Title>
        <Description>Explore our collection of moments and achievements captured in photographs.</Description>
        <Slider ref={sliderRef}>
          {images.map((image, index) => (
            <ImageCard key={index}>
              <Image src={image} alt={`Gallery Image ${index + 1}`} />
            </ImageCard>
          ))}
        </Slider>
      </GalleryContainer>
      <div>
        <Title>Achievements</Title>
        <Description>Here are some of the achievements by our members.</Description>
        <CardContainer>
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              image={achievement.image}
              title={achievement.title}
              description={achievement.description}
            />
          ))}
        </CardContainer>
      </div>
    </div>
  );
};

export default Gallery;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
`;
