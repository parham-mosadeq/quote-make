import React, { useEffect, useState } from 'react';

//* function
import { getQuotes } from '../services/Api';
//* Components
import Loading from './Loading';
//* Styles
import {
  Paragraph,
  Container,
  SearchInputStyle,
  InputContainer,
  LifeFilter,
  Happiness,
  Technology,
  Article,
  Range,
  History,
  Sport,
  CivilRights,
} from './CategoriesStyledComponents';

const Categories = () => {
  const [quotes, setQuotes] = useState([]);
  const [query, setQuery] = useState('sport');
  const [range, setRange] = useState(0);
  const [filtered, setFiltered] = useState('');
  const [filteredAuthor, setFilteredAuthor] = useState('');
  const [filteredIdx, setFilteredIdx] = useState('');
  const [inputSearch, setInputSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setQuotes(await getQuotes(query));
    };
    fetchData();
    return function () {
      clearInterval(fetchData());
    };
  }, [query]);

  const { results } = quotes;

  const filterByLength = (selectedLength) => {
    let contents = [];
    results.map((item) => {
      return contents.push(item);
    });

    contents.forEach((item, idx = 1) => {
      if (item.length === selectedLength) {
        setFilteredIdx(`${idx} match found`);
        setFiltered(item.content);
        setFilteredAuthor(item.author);
      }
      if (selectedLength === 0) {
        setFilteredIdx();
        setFiltered();
        setFilteredAuthor();
      }
    });
    return contents;
  };

  const filteredBySearch = results
    ? results.filter((item) =>
        item.author.trim().toLocaleLowerCase().includes(inputSearch)
      )
    : null;

  const checked = (type, e) => {
    setQuery(type);
    setFilteredIdx('');
    setFiltered('');
    setFilteredAuthor('');
    setRange(0);
    if (!e) {
      setQuery('sport');
    }
  };

  return (
    <Container>
      <section>
        <SearchInputStyle
          type='text'
          placeholder='search'
          value={inputSearch}
          onChange={(e) =>
            setInputSearch(e.target.value.trim().toLocaleLowerCase())
          }
        />
        <InputContainer>
          <LifeFilter>
            <input
              onChange={(e) => {
                checked('life', e.target.checked);
              }}
              type='checkbox'
              name='life'
            />
            <label htmlFor='life'>life</label>
          </LifeFilter>
          <Happiness>
            <input
              type='checkbox'
              onChange={(e) => {
                checked('happiness', e.target.checked);
              }}
              name='happiness'
            />
            <label htmlFor='happiness'>happiness</label>
          </Happiness>
          <Technology>
            <input
              type='checkbox'
              onChange={(e) => {
                checked('technology', e.target.checked);
              }}
              name='technology'
            />
            <label htmlFor='technology'>technology</label>
          </Technology>
          <CivilRights>
            <input
              type='checkbox'
              onChange={(e) => {
                checked('civil-rights', e.target.checked);
              }}
              name='civil-rights'
            />
            <label htmlFor='civil-rights'>civil rights</label>
          </CivilRights>
          <History>
            <input
              type='checkbox'
              onChange={(e) => {
                checked('history', e.target.checked);
              }}
              name='history'
            />
            <label htmlFor='history'>history </label>
          </History>
          <Sport>
            <input
              type='checkbox'
              onChange={(e) => {
                checked('sport', e.target.checked);
              }}
              name='sport'
            />
            <label htmlFor='sport'>sport </label>
          </Sport>
          <Range>
            <input
              type='range'
              name='length'
              value={range}
              onChange={(e) => {
                setRange(+e.target.value);
                filterByLength(+e.target.value);
              }}
              min={0}
              max={100}
            />
            <span>{range}</span>
            <label htmlFor='length'>length</label>
          </Range>
        </InputContainer>
      </section>
      <Article>
        <div>
          <span>{filteredIdx}</span>
          <Paragraph>{filteredAuthor}</Paragraph>
          {filtered}
        </div>
        {results ? (
          filteredBySearch.map((item) => {
            const { _id, author, content } = item;
            return (
              <div key={_id}>
                <Paragraph>{author}</Paragraph>
                <i>{content}</i>
              </div>
            );
          })
        ) : (
          <Loading />
        )}
      </Article>
    </Container>
  );
};

export default Categories;
