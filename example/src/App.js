import React, { useState } from 'react'
import { Popup, DatePicker } from 'react-date-time-picker-popup'
import 'react-date-time-picker-popup/dist/index.css'

const App = () => {
  const [visible, setVisible] = useState(false);
  const [day, setDay] = useState(new Date());

  return <div className='App'>
    <button onClick={() => setVisible(true)}>show</button>
    <Popup visible={visible} setVisible={setVisible} BGColor={'tomato'}>
      <DatePicker lang="tr" selectedDay={day} setSelectedDay={setDay} timeSelector={true} />
    </Popup>
  </div>
}

export default App