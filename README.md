# react-date-time-picker-popup

> Calendar, interval time picker and popup components for React supports multi-languages

[![NPM](https://img.shields.io/npm/v/react-date-time-picker-popup.svg)](https://www.npmjs.com/package/react-date-time-picker-popup) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add react-date-time-picker-popup
```

## Usage

```jsx
import React, { useState } from 'react'
import { Popup, DatePicker } from 'react-date-time-picker-popup'
import 'react-date-time-picker-popup/dist/index.css'

const App = () => {
  const [visible, setVisible] = useState(false);
  const [day, setDay] = useState(new Date());

  return <div className='App'>
    <button onClick={() => setVisible(true)}>Show Popup</button>
    <Popup visible={visible} setVisible={setVisible}>
      <DatePicker lang="tr" selectedDay={day} setSelectedDay={setDay} timeSelector={true} />
    </Popup>
  </div>
}

export default App
```
### DatePicker

|      props      |   type  |      default     | required |
|:---------------:|:-------:|:----------------:|:--------:|
|       lang      |  string |       'en'       |   false  |
|   selectedDay   |   Date  |                  |   true   |
|  setSelectedDay |   func  |                  |   true   |
|   timeSelector  | boolean |       true       |   false  |
|  minuteInterval |  number |         5        |   false  |
|     BGColor     |  string | rgb(44, 76, 104) |   false  |
|  disabledHours  |  array  |                  |   false  |
| disabledMinutes |  array  |                  |   false  |

### Popup

|    props   |       type      |      default     | required |
|:----------:|:---------------:|:----------------:|:--------:|
|   visible  |     boolean     |                  |   true   |
| setVisible |       func      |                  |   true   |
|   BGColor  |      string     | rgb(44, 76, 104) |   false  |
|  children  | React.ReactNode |                  |   false  |

### Time

|     **props**     | **type** |    **default**   | **required** |
|:-----------------:|:--------:|:----------------:|:------------:|
|        year       |  number  |                  |     true     |
|       month       |  number  |                  |     true     |
|        day        |   Date   |                  |     true     |
|       setDay      |   func   |                  |     true     |
|   selectedMinute  |  string  |                  |     true     |
| setSelectedMinute |   func   |                  |     true     |
|    selectedHour   |  string  |                  |     true     |
|  setSelectedHour  |   func   |                  |     true     |
|   minuteInterval  |  number  |         5        |     false    |
|   disabledHours   |   array  |                  |     false    |
|  disabledMinutes  |   array  |                  |     false    |
|      BGColor      |  string  | rgb(44, 76, 104) |     false    |

## License


MIT © [kursatsmsek](https://github.com/kursatsmsek)
