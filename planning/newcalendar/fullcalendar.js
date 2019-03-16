import $ from 'jquery';
import 'fullcalendar';

$(function () {
  var plannyt = $('#calendar');
  var date = moment();
  plannyt.fullCalendar({
    themeSystem: 'bootstrap4',
    bootstrapFontAwesome: {
      close: 'fa-times',
      prev: 'fa-chevron-left',
      next: 'fa-chevron-right',
      prevYear: 'fa-angle-double-left',
      nextYear: 'fa-angle-double-right'
    },
    selectable: true,
    selectHelper: true,
    unselectAuto: true,
    unselectCancel: '.create-event',
    selectOverlap: true,
    selectConstraint: {
      dow: [1, 2, 3, 4, 5, 6, 7],
      start: '00:00',
      end: '24:00'
    },
    header: {
      left: 'prev,next, today',
      center: 'title',
      right: 'agendaDay,agendaWeek,month'
    },
    handleWindowResize: true,
    defaultView: 'agendaDay',
    allDayText: "All Day Event",
    defaultDate: date,
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: function() {
      
    },
    dayClick: function (date) {
      alert('clicked ' + date.format());
    },
    select: function (startDate, endDate) {
      alert('selected ' + startDate.format() + ' to ' + endDate.format());
    }
  })
});