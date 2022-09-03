import React, { useEffect, useState } from 'react';
//* function
import { getAllQuotes } from '../services/Api';
//* Components
import Loading from './Loading';
//* Styles
import styled from 'styled-components';

const Container = styled.div`
  margin: 1rem;
  padding: 0.5rem;
  position: relative;
  @media (min-width: 990px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    min-height: 100vh;
  }

  @media (min-width: 1170px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    min-height: 100vh;
  }
`;

const Authors = styled.div`
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.5);
  margin: 2rem 0;
  border-radius: 8px;
  max-width: 400px;
  max-height: 500px;
  padding: 4rem;

  i {
    box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.3);
    transition: all 0.2s linear;
    display: block;
    padding: 0.4rem 0.8rem;
    border-radius: 10px;
  }

  i:hover {
    box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.6);
  }
`;

const Author = styled.p`
  color: navy;
  letter-spacing: 1.4px;
`;

const Tags = styled.div`
  text-transform: capitalize;
  margin: 1rem 0;

  div {
    color: green;
    background-color: azure;
    padding: 0.4rem;
    border-radius: 15px;
    margin-bottom: 1rem;
  }

  span {
    letter-spacing: 1.2px;
    color: #0a5e05;
  }
`;

const Buttons = styled.button`
  display: block;
  width: 20%;
  margin: 1rem auto;
  border: 0;
  border-radius: 9px;
  background-color: lightblue;
  text-transform: uppercase;
  color: #555;
  cursor: pointer;

  position: fixed;
  bottom: 0;
  left: 0;
`;

const ButtonsRight = styled.button`
  display: block;
  width: 20%;
  margin: 1rem auto;
  border: 0;
  border-radius: 9px;
  background-color: lightblue;
  text-transform: uppercase;
  color: #555;
  cursor: pointer;
  position: fixed;
  bottom: 0;
  right: 0;
`;

const Quotes = () => {
  const [allQuotes, setAllQuotes] = useState([]);
  const [updatePage, setUpdatePage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      setAllQuotes(await getAllQuotes(updatePage));
    };
    fetchData();
  }, [, updatePage]);

  const { results } = allQuotes;

  const handleNext = () => {
    setUpdatePage(updatePage + 1);
  };
  const handlePrev = () => {
    setUpdatePage(updatePage - 1);
  };

  return (
    <Container>
      {results ? (
        results.map((item) => {
          const { _id, author, content, tags } = item;
          const [a, b] = tags;
          return (
            <Authors key={_id}>
              <Author>{author}</Author>
              <i>{content}</i>
              <Tags tags={(a, b)}>
                <div>tags:</div>
                <span>
                  #{a}&#{b}
                </span>
              </Tags>
            </Authors>
          );
        })
      ) : (
        <Loading />
      )}
      <Buttons onClick={handlePrev}>prev </Buttons>
      <ButtonsRight onClick={handleNext}>next </ButtonsRight>
    </Container>
  );
};

export default Quotes;
