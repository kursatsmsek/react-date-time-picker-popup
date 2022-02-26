import React from 'react'
import styles from '../styles.module.css'
import CalendarHeader from './CalendarHeader'
import CalendarContent from './CalendarContent'

function Days({
  year,
  lang,
  month,
  setMonth,
  getDayNames,
  beforeMonthDays,
  numbers,
  nextMonthDays,
  findDayOfWeek,
  setSelectScreen,
  setShowMonths,
  setYear,
  selectedDay,
  setSelectedDay,
  selectedMinute,
  setSelectedMinute,
  selectedHour,
  setSelectedHour,
  timeSelector,
  minuteInterval,
  disabledMinutes,
  disabledHours,
}) {

  return (
    <div className={styles.calendarDaysContent}>
      <CalendarHeader
        setSelectScreen={setSelectScreen}
        setShowMonths={setShowMonths}
        year={year}
        lang={lang}
        setMonth={setMonth}
        month={month}
        setYear={setYear}
      />
      <CalendarContent
        getDayNames={getDayNames}
        beforeMonthDays={beforeMonthDays}
        numbers={numbers}
        nextMonthDays={nextMonthDays}
        findDayOfWeek={findDayOfWeek}
        year={year}
        lang={lang}
        month={month}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        selectedHour={selectedHour}
        setSelectedHour={setSelectedHour}
        selectedMinute={selectedMinute}
        setSelectedMinute={setSelectedMinute}
        timeSelector={timeSelector}
        minuteInterval={minuteInterval}
        disabledHours={disabledHours}
        disabledMinutes={disabledMinutes}
      />
    </div>
  )
}

export default Days


