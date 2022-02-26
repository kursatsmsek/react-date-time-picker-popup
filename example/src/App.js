import React, { useState } from 'react'
import { MdCancel, MdCheckCircle } from 'react-icons/md'
import { PopupComponent, DatePicker } from 'react-date-time-picker-popup'
import 'react-date-time-picker-popup/dist/index.css'

const App = () => {

  const [visible, setVisible] = useState(false);
  const [day, setDay] = useState(new Date());

  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [selectedHour, setSelectedHour] = useState('');
  const [selectedMinute, setSelectedMinute] = useState('');


  return <div className='App'>
    <button onClick={() => setVisible(true)}>show</button>
    <PopupComponent visible={visible} setVisible={setVisible} BGColor={'tomato'}>
    <DatePicker lang="tr" selectedDay={day} setSelectedDay={setDay} timeSelector={true} minuteInterval={5} disabledHours={['22', '20', '19', '18']} />
    </PopupComponent>
  </div>
}

export default App
