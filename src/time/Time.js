import React, { useState, useEffect, useRef } from 'react'
import styles from './styles.module.css'

function Time({
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
}) {
  const hours = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']

  const createMinuteList = (interval) => {
    var list = [];
    for (var i = 0; i < 60; i++) {
      if (i % interval === 0) {
        list.push(i.toString().length > 1 ? i.toString() : `0${i}`);
      }
    }
    return list;
  }

  const [minutes, setMinutes] = useState(createMinuteList(minuteInterval));

  const useDidMountEffect = (func, deps) => {
      const didMount = useRef(false);

      useEffect(() => {
          if (didMount.current) func();
          else didMount.current = true;
      }, deps);
  }


  useDidMountEffect(() => {
    setDay(new Date(year, month, day.getDate(), selectedHour, selectedMinute));
  }, [selectedHour, selectedMinute]);

  return (
    <div className={styles.timeContainer} style={{ backgroundColor : BGColor}}>
     <div className={styles.timeHours}>
        {
          hours.reverse().map((hour, i) => {
            if (hour === selectedHour) {
              return <div className={styles.selectedHourDiv} key={i}>{hour}</div>
            }
            else if (disabledHours.includes(hour)) {
              return <div className={styles.disabledHourDiv} key={i}>{hour}</div>
            }
            else {
              return <div className={styles.hourDiv} key={i} onClick={() => {
                setSelectedHour(hour);
              }}>{hour}</div>
            }
          })
        }
     </div>
     <div className={styles.timeMinutes}>
        {
          minutes.map((minute, i) => {
            if (minute === selectedMinute) {
              return <div className={styles.selectedMinuteDiv} key={i}>{minute}</div>
            }
            else if (disabledMinutes.includes(minute)) {
              return <div className={styles.disabledMinuteDiv} key={i}>{minute}</div>
            }
            else {
              return <div className={styles.minuteDiv} key={i} onClick={() => {
                setSelectedMinute(minute);
              }}>{minute}</div>
            }
          })
        }
     </div>
    </div>
  )
}

export default Time