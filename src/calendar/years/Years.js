import React, { useState } from 'react'
import styles from '../styles.module.css'

function Years({
  year,
  setYear,
  setSelectScreen,
}) {

  const [years, setYears] = useState(() => {
    var max = (parseInt(year) + 6);
    var min = (max - 14);
    var list = [];
    for (var i = max; i >= min; i--) {
      list.push(i)
    };
    list.reverse();
    return list;
  });

  const onYearClick = (event) => {
    setYear(parseInt(event.target.getAttribute('value')));
    setSelectScreen(false);
  }

  const increaseYears = () => {
    setYears(() => {
      var max = (years[years.length - 1]  + 10);
      var min = (max - 5);
      var list = [];
      for (var i = max; i >= min; i--) {
        list.push(i)
      };
      list.reverse();
      return list;
    })
  }

  const decreaseYears = () => {
    setYears(() => {
      var max = (years[0] - 5);
      var min = (max - 5);
      var list = [];
      for (var i = max; i >= min; i--) {
        list.push(i)
      };
      list.reverse();
      return list;
    })
  }

  return (
    <div className={styles.selectScreen}>
      <div className={styles.selectArea} key={Math.random()}>
        <div className={styles.selectableDiv} onClick={decreaseYears}>...</div>
        <div className={styles.selectableDiv} value={years[0] - 2} onClick={onYearClick}>{years[0] - 2}</div>
        <div className={styles.selectableDiv} value={years[0] - 1} onClick={onYearClick}>{years[0] - 1}</div>
      </div>
      {
        years.map((month, i) => {
          if ((i) % 3 === 0) {
            return <div className={styles.selectArea} key={Math.random()}>
              <div className={styles.selectableDiv} value={years[i]} key={Math.random()} onClick={onYearClick}>{years[i]}</div>
              <div className={styles.selectableDiv} value={years[i + 1]} key={Math.random()} onClick={onYearClick}>{years[i + 1]}</div>
              <div className={styles.selectableDiv} value={years[i + 2]} key={Math.random()} onClick={onYearClick}>{years[i + 2]}</div>
            </div>
          }
        })
      }
      <div className={styles.selectArea} key={Math.random()}>
        <div className={styles.selectableDiv} value={years[years.length - 1] + 1} onClick={onYearClick}>{years[years.length - 1] + 1}</div>
        <div className={styles.selectableDiv} value={years[years.length - 1] + 2} onClick={onYearClick}>{years[years.length - 1] + 2}</div>
        <div className={styles.selectableDiv} onClick={increaseYears}>...</div>
      </div>
    </div>
  )
}

export default Years