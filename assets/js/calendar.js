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
          start: '2023-02-28T11:00:00-06:00',
          end: '2023-02-28T12:00:00-06:00',
          backgroundColor: 'orange',
          url: './resources#Mentor%20Training',
        },
        {
          title: 'All Participants Orientation',
          start: '2023-02-23T11:00:00-06:00',
          end: '2023-02-23T12:00:00-06:00',
          backgroundColor: 'orange',
          url: './resources#All%20Participants%20Orientation'
        },
        {
          title: 'Hackathon Kick-Off!',
          start: '2023-03-02T18:00:00-06:00',
          end: '2023-03-02T20:00:00-06:00',
          backgroundColor: 'green',
          url: './resources#Hackathon%20Kick-Off!'
        },
        {
          title: 'Friday Morning Checkin',
          start: '2023-03-03T11:00:00-06:00',
          end: '2023-03-03T12:00:00-06:00',
          //backgroundColor: 'orange'
          url: './resources#Friday%20Morning%20Checkin'
        },
        {
          title: 'Friday Afternoon Checkin',
          start: '2023-03-03T18:00:00-06:00',
          end: '2023-03-03T19:00:00-06:00',
          //backgroundColor: 'orange'
          url: './resources#Friday%20Afternoon%20Checkin'
        },
        {
          title: 'Saturday Morning Checkin',
          start: '2023-03-04T11:00:00-06:00',
          end: '2023-03-04T12:00:00-06:00',
          //backgroundColor: 'orange'
          url: './resources#Saturday%20Morning%20Checkin'
        },
        {
          title: 'Saturday Afternoon Checkin',
          start: '2023-03-04T18:00:00-06:00',
          end: '2023-03-04T19:00:00-06:00',
          //backgroundColor: 'orange'
          url: './resources#Saturday%20Afternoon%20Checkin'
        },
        {
          title: 'Sunday Morning Checkin',
          start: '2023-03-05T11:00:00-06:00',
          end: '2023-03-05T12:00:00-06:00',
          //backgroundColor: 'orange'
          url: './resources#Sunday%20Morning%20Checkin'
        },
        {
          title: 'Monday Morning Checkin',
          start: '2023-03-06T11:00:00-06:00',
          end: '2023-03-06T12:00:00-06:00',
          //backgroundColor: 'orange'
          url: './resources#Monday%20Morning%20Checkin'
        },
        {
          title: 'Final Presentations',
          start: '2023-03-06T18:00:00-06:00',
          end: '2023-03-06T20:00:00-06:00',
          backgroundColor: 'red',
          url: './resources#Final%20Presentations'
        },
      ]
    });
    
    calendar.render();
  });