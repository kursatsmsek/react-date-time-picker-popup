import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'
import Months from './months/Months';
import Years from './years/Years';
import Days from './days/Days';
import { getDayNames, findDayOfWeek, lastDayOfMonth } from './functions/Functions'

function Calendar({ lang, selectedDay, setSelectedDay, timeSelector = true, minuteInterval = 5, BGColor = 'rgb(44, 76, 104)', disabledHours, disabledMinutes }) {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [selectedHour, setSelectedHour] = useState('');
  const [selectedMinute, setSelectedMinute] = useState('');
  const [beforeMonthDays, setBMD] = useState([]);
  const [nextMonthDays, setNMD] = useState([]);
  const [selectScreen, setSelectScreen] = useState(false);
  const [showMonths, setShowMonths] = useState(false);
  const [numbers, setNumbers] = useState(Array.from({length: lastDayOfMonth(month, year)}, (_, i) => i + 1));

  useEffect(() => {
    // numbers of the month
    setNumbers(Array.from({length: lastDayOfMonth(month, year)}, (_, i) => i + 1));

    // previous month days
    let pmd = [];
    if (findDayOfWeek(1, month, year) !== 1) {
      for (let i = lastDayOfMonth(month - 1, year); i > 0; i--) {
        if (findDayOfWeek(i, month - 1, year) === 1) {
          pmd.push(i);
          break;
        }
        pmd.push(i);
      }
    }
    setBMD(pmd);

    // next month days
    let nmd = [];
    if (findDayOfWeek(lastDayOfMonth(month, year), month, year) !== 0) {
      for (let i = 1; i < 8; i++) {
        if (findDayOfWeek(i, month + 1, year) === 0) {
          nmd.push(i);
          break;
        }
        nmd.push(i);
      }
    }
    setNMD(nmd);
  }, [month, year]);

  return (
   <div className={styles.calendarContainer} style={{ backgroundColor : BGColor}}>
      {
      selectScreen  ?
        showMonths ?
        <Months year={year} lang={lang} setMonth={setMonth} setSelectScreen={setSelectScreen}/>
        :
        <Years year={year} setYear={setYear} setSelectScreen={setSelectScreen}/>
      :
      <Days
        year={year}
        lang={lang}
        month={month}
        setMonth={setMonth}
        getDayNames={getDayNames}
        beforeMonthDays={beforeMonthDays}
        numbers={numbers}
        nextMonthDays={nextMonthDays}
        findDayOfWeek={findDayOfWeek}
        setShowMonths={setShowMonths}
        setSelectScreen={setSelectScreen}
        setYear={setYear}
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
      }
   </div>
  )
}

export default Calendar