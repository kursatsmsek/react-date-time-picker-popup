import React from 'react'
import styles from '../styles.module.css'

function Month({
  year,
  lang,
  setMonth,
  setSelectScreen,
}) {

  const orderOfMonths = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

  const onMonthClick = (month) => {
    setMonth(month);
    setSelectScreen(false);
  }

  return (
    <div className={styles.selectScreen}>
      {
        orderOfMonths.map((month, i) => {
          if ((i) % 3 === 0) {
            return <div className={styles.selectArea} key={Math.random()}>
              <div className={styles.selectableDiv} key={Math.random()} onClick={() => onMonthClick(month)}>{new Date(year, month, 1).toLocaleString(lang, { month: 'long' })}</div>
              <div className={styles.selectableDiv} key={Math.random()} onClick={() => onMonthClick(month + 1)}>{new Date(year, month + 1, 1).toLocaleString(lang, { month: 'long' })}</div>
              <div className={styles.selectableDiv} key={Math.random()} onClick={() => onMonthClick(month + 2)}>{new Date(year, month + 2, 1).toLocaleString(lang, { month: 'long' })}</div>
            </div>
          }
        })
      }
    </div>
  )
}

export default Month