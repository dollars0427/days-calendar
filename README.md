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

Import module from days-calendar, then register it to Vue:

#### Base

```js
import DaysCalendar from 'days-calendar';

new Vue({
  el: '#your-dom-element',
   components: {
      Calendar: DaysCalendar
   }
})
```
#### Custom Modal

By default, Days Calendar will show a modal which contain event content. If you want to custom the template of modal, you can call calendar like this:

 ```html
    <Calendar>
      <div slot="modal-content">
        <h1>Hello World!</h1>
      </div>
    </Calendar>

 ```

 If you want to using day object in custom modal,
 you should pass renderDay function to calendar like this:

 ```html
<Calendar :renderDay="getDate">
  <div slot="modal-content">
    {{day.content}}
  </div>
</Calendar>
 ```

 ```js
 getDate: function(day){
   this.day = day;
   return day;
 }
 ```

 or you will not be allow to access the information of day.


 ### Disable Day

 If you don't want user click on some day, you can pass renderDays function to calendar like this:

 ```html
<Calendar :renderDays="renderDays"></Calendar>
 ```

 ```js
 renderDays: function(days){
   for(let i = 0; i < days.length; i++){
     const weekday = days[i].date.weekday();
     //If it is Tuesday, disable it
     if(weekday == 2){
       days[i].disabled = true;
     }
   }
   return days;
 },
 ```

## Props
#### weekdays (optional)
An array which include a list of weekdays. You can custom weekdays name by this props.

Default value: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

#### renderDay (optional)
If you pass this props to Days Calendar, it will pass day object to the function before render the content.

This function should return a day object array.

```js
renderDay(day){
  console.log(day);
  return day;
}

/* Day object:
{ number: (Number of that day), date: (Moment Date Object), class: [] } */
```

#### renderDays (optional)
If you pass this props to Days Calendar, it will pass the array of day object to the function before render the content.
This function should return a day object array.

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
