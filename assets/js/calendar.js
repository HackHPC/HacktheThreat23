// Ref: https://fullcalendar.io/

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var initialTimeZone = 'local';
    var calendarlocalTZ = Intl.DateTimeFormat().resolvedOptions().timeZone;
    

    timeZoneEl.insertAdjacentText('beforeend', calendarlocalTZ);
   
    var calendar = new FullCalendar.Calendar(calendarEl, {
      aspectRatio: 1,
      initialView: 'listYear', //'listMonth', //'dayGridWeek',
      timeZone: initialTimeZone,
      eventTimeFormat: { hour: 'numeric', minute: '2-digit' },
      initialDate: '2023-02-16',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title' ,
        right: 'listYear,dayGridMonth,timeGridWeek,timeGridDay'
      },

      views: {
        dayGridMonth: { buttonText: 'month' },
        timeGridDay: { buttonText: 'day' },
        timeGridWeek: { buttonText: 'week' },
        listMonth: { buttonText: 'list month' },
        listYear: { buttonText: 'year'}
      },
      
     

      events: [
        {
          title: 'Mentor Training',
          start: '2023-02-16T11:00:00-06:00',
          end: '2023-02-16T12:00:00-06:00',
          backgroundColor: 'orange'
          //url: 'http://google.com/',
        },
        {
          title: 'All Participants Orientation',
          start: '2023-02-23T11:00:00-06:00',
          end: '2023-02-23T12:00:00-06:00',
          backgroundColor: 'orange'
          //url: 'http://google.com/',
        },
        {
          title: 'Hackathon Kick-Off!',
          start: '2023-03-02T18:00:00-06:00',
          end: '2023-03-02T20:00:00-06:00',
          backgroundColor: 'green'
        },
        {
          title: 'Morning Checkin',
          start: '2023-03-03T11:00:00-06:00',
          end: '2023-03-03T12:00:00-06:00',
          //backgroundColor: 'orange'
        },
        {
          title: 'Afternoon Checkin',
          start: '2023-03-03T18:00:00-06:00',
          end: '2023-03-03T19:00:00-06:00',
          //backgroundColor: 'orange'
        },
        {
          title: 'Morning Checkin',
          start: '2023-03-04T11:00:00-06:00',
          end: '2023-03-04T12:00:00-06:00',
          //backgroundColor: 'orange'
        },
        {
          title: 'Afternoon Checkin',
          start: '2023-03-04T18:00:00-06:00',
          end: '2023-03-04T19:00:00-06:00',
          //backgroundColor: 'orange'
        },
        {
          title: 'Morning Checkin',
          start: '2023-03-05T11:00:00-06:00',
          end: '2023-03-05T12:00:00-06:00',
          //backgroundColor: 'orange'
        },
        {
          title: 'Morning Checkin',
          start: '2023-03-06T11:00:00-06:00',
          end: '2023-03-06T12:00:00-06:00',
          //backgroundColor: 'orange'
        },
        {
          title: 'Final Presentations',
          start: '2023-03-06T18:00:00-06:00',
          end: '2023-03-06T20:00:00-06:00',
          backgroundColor: 'red'
        },
      ]
    });
    
    calendar.render();
  });