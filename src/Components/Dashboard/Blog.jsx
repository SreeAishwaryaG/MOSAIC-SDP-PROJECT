import React, { useState } from 'react';
import styled from 'styled-components';
import Headbar from '../Dashboard/Headbar';

// Color Scheme Variables
const primaryColor = '#F2613F';
const secondaryColor = '#FFF5EE';
const accentColor = '#e25732';
const backgroundColor = '#F9F9F9';
const textColor = '#333';
const cardShadowColor = 'rgba(0, 0, 0, 0.1)';

// Styled Components
const PageContainer = styled.div`
  background-color: ${backgroundColor};
  min-height: 100vh;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BlogHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  max-width: 800px;
`;

const BlogTitle = styled.h1`
  color: ${primaryColor};
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-shadow: 1px 1px 2px ${cardShadowColor};
  animation: fadeInDown 1s ease-in-out;
`;

const BlogSubtitle = styled.p`
  color: ${textColor};
  font-size: 1.5rem;
  animation: fadeIn 1.5s ease-in-out;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
`;

const BlogCard = styled.div`
  background-color: ${secondaryColor};
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 15px ${cardShadowColor};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${primaryColor};
    transform: scaleX(0);
    transform-origin: top left;
    opacity: 0.2;
    transition: transform 0.5s ease;
    z-index: 0;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);

    &:before {
      transform: scaleX(1);
    }
  }
`;

const CardTitle = styled.h2`
  color: ${textColor};
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-weight: 600;
  position: relative;
  z-index: 1;
`;

const CardContent = styled.p`
  color: ${textColor};
  font-size: 1rem;
  line-height: 1.6;
  position: relative;
  z-index: 1;
`;

const NewPostSection = styled.div`
  background-color: ${secondaryColor};
  padding: 2.5rem;
  border-radius: 15px;
  margin-top: 4rem;
  box-shadow: 0 4px 15px ${cardShadowColor};
  max-width: 800px;
  width: 100%;
`;

const NewPostTitle = styled.h2`
  color: ${primaryColor};
  font-size: 2rem;
  margin-bottom: 1.5rem;
  font-weight: bold;
  text-shadow: 1px 1px 2px ${cardShadowColor};
`;

const NewPostInput = styled.textarea`
  width: 100%;
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid ${primaryColor};
  font-family: 'Roboto', sans-serif;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  transition: border 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: ${accentColor};
    box-shadow: 0 0 10px ${accentColor};
    outline: none;
  }
`;

const SubmitButton = styled.button`
  background-color: ${primaryColor};
  color: #fff;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${accentColor};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }
`;

// Blog Component
const BlogPage = () => {
  const [blogs, setBlogs] = useState([
    { id: 1, title: 'Introduction to Our Platform', content: 'Discover the features and benefits of our club management system.' },
    { id: 2, title: 'How to Join a Club', content: 'Step-by-step guide to finding and joining clubs that match your interests.' },
    { id: 3, title: 'Upcoming Events', content: 'Stay updated on the latest events happening in your favorite clubs.' },
  ]);

  const [newBlog, setNewBlog] = useState('');

  const handleNewBlogChange = (e) => {
    setNewBlog(e.target.value);
  };

  const handleNewBlogSubmit = () => {
    if (newBlog.trim() !== '') {
      setBlogs([...blogs, { id: blogs.length + 1, title: 'New Blog Post', content: newBlog }]);
      setNewBlog('');
    }
  };

  return (
    <PageContainer>
      <Headbar />
      <BlogHeader>
        <BlogTitle>Our Blog</BlogTitle>
        <BlogSubtitle>Stay updated with the latest news and articles</BlogSubtitle>
      </BlogHeader>
      <BlogGrid>
        {blogs.map((blog) => (
          <BlogCard key={blog.id}>
            <CardTitle>{blog.title}</CardTitle>
            <CardContent>{blog.content}</CardContent>
          </BlogCard>
        ))}
      </BlogGrid>
      <NewPostSection>
        <NewPostTitle>Create a New Post</NewPostTitle>
        <NewPostInput
          rows="5"
          value={newBlog}
          onChange={handleNewBlogChange}
          placeholder="Share your thoughts or experiences..."
        />
        <SubmitButton onClick={handleNewBlogSubmit}>Submit</SubmitButton>
      </NewPostSection>
    </PageContainer>
  );
};

export default BlogPage;
