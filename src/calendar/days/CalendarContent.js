import React from 'react'
import Time from '../../time/Time'
import styles from '../styles.module.css'

function CalendarContent({
  getDayNames,
  beforeMonthDays,
  numbers,
  nextMonthDays,
  findDayOfWeek,
  lang,
  month,
  year,
  selectedDay,
  setSelectedDay,
  selectedMinute,
  setSelectedMinute,
  selectedHour,
  setSelectedHour,
  timeSelector,
  minuteInterval,
  disabledMinutes,
  disabledHours
}) {


  const orderOfDays = [1, 2, 3, 4, 5, 6, 0];

  return (
    <div className={styles.calendarContent}>
      <div className={styles.contentLeftSide} style={{ width: timeSelector ? '80%' : '100%'}}>
        <div className={styles.calendarDaysNames}>
          {
            getDayNames(lang, 'short').map((day, i) => {
              return <div className={styles.calendarDayName} key={i}>{day}</div>
            })
          }
        </div>
        <div className={styles.calendarDays}>
          {
            orderOfDays.map((day, i) => {
              return <div className={styles.calendarDayDiv} key={i}>
                {
                  beforeMonthDays.map((number, i) => {
                    if (findDayOfWeek(number, month-1, year) === day) {
                      return <div className={styles.beforeMonthDays} key={i}>{number}</div>
                    }
                  })
                }
                {
                  numbers.map((number, i) => {
                    if (findDayOfWeek(number, month, year) === day) {
                      if (number === selectedDay.getDate() && month === selectedDay.getMonth() && year === selectedDay.getFullYear()) {
                        return <div className={styles.selectedCalendarDay} key={i}>{number}</div>
                      } else {
                        return <div className={styles.calendarDay} key={i} onClick={() => setSelectedDay(new Date(year, month, number, selectedHour, selectedMinute))}>{number}</div>
                      }
                    }
                  })
                }
                {
                  nextMonthDays.map((number, i) => {
                    if (findDayOfWeek(number, month+1, year) === day) {
                      return <div className={styles.nextMonthDays} key={i}>{number}</div>
                    }
                  })
                }
              </div>
            })
          }
        </div>
      </div>
      {
        timeSelector ?
        <div className={styles.contentRightSide}>
            <Time
              year={year}
              month={month}
              day={selectedDay}
              setDay={setSelectedDay}
              selectedHour={selectedHour}
              setSelectedHour={setSelectedHour}
              selectedMinute={selectedMinute}
              setSelectedMinute={setSelectedMinute}
              minuteInterval={minuteInterval}
              disabledHours={disabledHours}
              disabledMinutes={disabledMinutes}
            />
        </div>
        :
        null
      }
    </div>
  )
}

export default CalendarContent