import React from 'react'
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'
import styles from '../styles.module.css'

function CalendarHeader({
  setSelectScreen,
  setShowMonths,
  year,
  lang,
  setMonth,
  month,
  setYear,
}) {
  return (
    <div className={styles.calendarHeader}>
        <div className={styles.calendarCurrentYear}
        onClick={() => {
          setSelectScreen(true);
          setShowMonths(false);
        }}>
          {year}
        </div>
        <div className={styles.calendarCurrentMonth}
        onClick={() => {
          setSelectScreen(true);
          setShowMonths(true);
        }}>
          {
            new Date(year, month, 1).toLocaleString(lang, { month: 'long' })
          }
        </div>
        <div className={styles.calendarBeforeNext}>
          <MdNavigateBefore onClick={() => {
            if (month === 0) {
              setYear(year - 1);
              setMonth(11);
            } else {
              setMonth(month - 1);
            }
          }} />
          <MdNavigateNext onClick={() => {
            if (month === 11) {
              setYear(year + 1);
              setMonth(0);
            } else {
              setMonth(month + 1);
            }
          }} />
        </div>
    </div>
  )
}

export default CalendarHeader