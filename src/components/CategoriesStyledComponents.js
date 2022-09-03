//* Styled
import styled from 'styled-components';

export const Paragraph = styled.p`
  font-size: 20px;
  font-weight: light;
  color: #0d9eff;
`;

export const Container = styled.div`
  * {
    overflow-x: hidden;
  }
  width: 90vw;
  text-align: center;
  margin: 4rem auto;
  padding: 2rem;
`;

export const SearchInputStyle = styled.input`
  border: none;
  border-radius: 8px;
  text-align: center;
  padding: 0.45rem 0.234rem;
  margin-bottom: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  transition: box-shadow 0.2s ease;

  ::placeholder {
    color: #0d9eff;
    text-transform: capitalize;
    letter-spacing: 1.3px;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  }

  :hover {
    cursor: pointer;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  text-align: left;
  align-items: center;
`;

export const LifeFilter = styled.div`
  background-color: green;
  padding: 0.4rem 0.8rem;
  border-radius: 10px;

  color: #fff;

  label {
    padding-left: 1rem;
  }
  text-transform: uppercase;

  [type='checkbox'] {
    border: none;
    cursor: pointer;

    :checked {
      background-color: #2196f3;
    }
  }
`;

export const Happiness = styled.div`
  background-color: yellow;
  padding: 0.4rem 0.8rem;
  border-radius: 10px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  color: #000;

  label {
    padding-left: 1rem;
  }
  text-transform: uppercase;

  [type='checkbox'] {
    border: none;
    cursor: pointer;

    :checked {
      background-color: #2196f3;
    }
  }
`;

export const Technology = styled.div`
  background-color: lightblue;
  padding: 0.4rem 0.8rem;
  border-radius: 10px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  color: #000;

  label {
    padding-left: 1rem;
  }
  text-transform: uppercase;

  [type='checkbox'] {
    border: none;
    cursor: pointer;
    :checked {
      background-color: #2196f3;
    }
  }
`;
export const Range = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 1rem;

  span {
    font-size: 12px;
    color: #777;
  }

  label {
    font-size: 14px;
    text-transform: capitalize;
    letter-spacing: 1.3px;
  }

  [type='range'] {
    cursor: pointer;
    width: 50%;
  }
`;

export const Article = styled.article`
  color: #488;
  text-decoration: underline;
  letter-spacing: 1.4px;
  line-height: 2;
`;

export const History = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: brown;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  gap: 1rem;
  color: #fff;

  span {
    font-size: 12px;
    color: #777;
  }

  label {
    font-size: 14px;
    text-transform: capitalize;
    letter-spacing: 1.3px;
  }

  [type='checkbox'] {
    cursor: pointer;
  }
`;

export const Sport = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #0d9eff;
  padding: 0.4rem 0.8rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 8px;
  gap: 1rem;
  color: #fff;

  span {
    font-size: 12px;
    color: #777;
  }

  label {
    font-size: 14px;
    text-transform: capitalize;
    letter-spacing: 1.3px;
  }

  [type='checkbox'] {
    cursor: pointer;
  }
`;

export const CivilRights = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #9a1ffa;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  gap: 1rem;
  color: #fff;

  span {
    font-size: 12px;
    color: #777;
  }

  label {
    font-size: 14px;
    text-transform: capitalize;
    letter-spacing: 1.3px;
  }

  [type='checkbox'] {
    cursor: pointer;
  }
`;
