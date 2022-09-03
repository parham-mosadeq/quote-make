import React, { useEffect, useState } from 'react';
// *function
import { getAuthors } from '../services/Api';
//* Styles
import styles from '../styles/authors.module.css';

const Authors = () => {
  const [author, setAuthor] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [inputSearch, setInputSearch] = useState('');
  const paginate = [];

  // ! destructuring from author
  const { results, totalPages, page, totalCount } = author;

  //* Getting the data from api and passing current page for pagination
  useEffect(() => {
    const fetchData = async () => {
      setAuthor(await getAuthors(currentPage));
    };
    fetchData();
    //* clearing interval after every useEffect call
    return () => {
      clearInterval(fetchData());
    };
  }, [currentPage]);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const filteredBySearch = results
    ? results.filter((item) =>
        item.name.toLocaleLowerCase().includes(inputSearch)
      )
    : null;
  // ! creating a number navigation for pages
  for (let i = 0; i <= totalCount / 20; i++) {
    paginate.push(i + 1);
  }
  return (
    <div className={styles.mainContainer}>
      <input
        className={styles.search}
        type='text'
        placeholder='search by name'
        value={inputSearch}
        onChange={(e) =>
          setInputSearch(e.target.value.trim().toLocaleLowerCase())
        }
      />
      <div className={styles.pageInfoContainer}>
        <p>total Pages: {totalPages}</p>
        <i>current page: {page}</i>
      </div>

      <button className='btn btn-secondary ml-3' onClick={handlePrev}>
        perv
      </button>

      <button className='btn btn-secondary m-3' onClick={handleNext}>
        next
      </button>
      {results
        ? filteredBySearch.map((item) => {
            const { _id, link, bio, slug, description, name } = item;
            return (
              <div key={_id} className={styles.secContainer}>
                <div className={styles.authorContainer}>
                  <p className={styles.name}>{name}</p>
                  <span>{description}</span>

                  <div className={styles.authorsWikipedia}>
                    <span>wikipedia: </span>
                    <a href={link}>{slug ? slug.split('-').join(' ') : null}</a>
                  </div>
                  <div className={styles.authorsBio}>
                    <p>BIO :{bio}</p>
                  </div>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Authors;
