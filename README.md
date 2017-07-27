# Days Calendar

Simple and customizable calender for Vue,  which only used moment.js and no more other dependencies.

This project still under active development, please feel free to open issues or pull request.

## Demo
http://days.sardo.work/

## Features
- Customizable days and weekdays output
- Customizable style

## Installation
```bash
npm install days-calendar --save
```

or

```bash
yarn add days-calendar
```

## Usage

```js
import DaysCalendar from 'days-calendar';

new Vue({
  el: '#your-dom-element',
   components: {
      Calendar: DaysCalendar
   }
})
```

## Props
#### weekdays (optional)
An array which include a list of weekdays. You can custom weekdays name by this props.

Default value: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

#### renderDay (optional)
If you pass this props to Days Calendar, it will pass day object to the function before render the content.

```js
renderDay(day){
  console.log(day);
}

/* Output will be:
First Day: { number: (Number of that day), date: (Moment Date Object), class: [] } */
```

#### renderDays (optional)
If you pass this props to Days Calendar, it will pass the array of day object to the function before render the content.
It should return a day object array.

```js
renderDays(days){
  console.log(days);
  return days;
}
```

## Contributing

You can clone this repository then start develop at sandbox, or feel free to open issue on github.

Build package:

```bash
npm run build
```

Watch package change and build it:

```bash
npm run watch
```
