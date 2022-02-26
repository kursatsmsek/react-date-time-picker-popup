import React from 'react'
import styles from './styles.module.css'
import Popup from './popup/Popup'
import Time from './time/Time'
import Calendar from './calendar/Calendar'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const PopupComponent = ({
  visible,
  setVisible,
  BGColor = 'rgb(44, 76, 104)',
  children
}) => {
  return <Popup
  visible={visible}
  setVisible={setVisible}
  BGColor={BGColor}>
  {children}
  </Popup>
}

export const TimeSelector = ({
  year,
  month,
  day,
  setDay,
  selectedMinute,
  setSelectedMinute,
  selectedHour,
  setSelectedHour,
  minuteInterval,
  disabledHours = [],
  disabledMinutes = [],
  BGColor = 'rgb(44, 76, 104)',
}) => {
  return <Time
    year = {year}
    month = {month}
    day = {day}
    setDay = {setDay}
    selectedMinute = {selectedMinute}
    setSelectedMinute = {setSelectedMinute}
    selectedHour = {selectedHour}
    setSelectedHour = {setSelectedHour}
    minuteInterval = {minuteInterval}
    disabledHours = {disabledHours}
    disabledMinutes = {disabledMinutes}
    BGColor = {BGColor}
    />
}

export const DatePicker = ({
  lang,
  selectedDay,
  setSelectedDay,
  timeSelector = true,
  minuteInterval = 5,
  BGColor = 'rgb(44, 76, 104)',
  disabledHours = [],
  disabledMinutes = [],
}) => {
  return <Calendar
    lang = {lang}
    selectedDay = {selectedDay}
    setSelectedDay = {setSelectedDay}
    timeSelector = {timeSelector}
    minuteInterval = {minuteInterval}
    BGColor = {BGColor}
    disabledHours = {disabledHours}
    disabledMinutes = {disabledMinutes}
  />
}