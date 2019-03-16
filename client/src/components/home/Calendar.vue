<template>
  <full-calendar :config="config" :events="events"/>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      eventSources: [
        {
          events: function(start, end, timezone, callback) {
            // ...
          },
          color: "red", // an option!
          textColor: "black",
          id: "" // an option!
        },
        {
          googleCalendarId: "abcd1234@group.calendar.google.com",
          color: "yellow", // an option!
          textColor: "black",
          id: ""
        }
      ],
      config: {
        selectedTimes: [],
        themeSystem: "bootstrap4",
        bootstrapFontAwesome: {
          close: "fa-times",
          prev: "fa-chevron-left",
          next: "fa-chevron-right",
          prevYear: "fa-angle-double-left",
          nextYear: "fa-angle-double-right"
        },
        selectable: true,
        selectHelper: true,
        unselectAuto: true,
        unselectCancel: ".create-event",
        selectOverlap: true,
        selectConstraint: {
          dow: [0, 1, 2, 3, 4, 5, 6],
          start: "00:00",
          end: "24:00"
        },
        header: {
          left: "prev,next, today, addEventButton",
          center: "title",
          right: "agendaDay,agendaWeek,month"
        },
        handleWindowResize: true,
        defaultView: "agendaWeek",
        allDayText: "All Day Event",
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        eventRender: function(event, element) {
          console.log(event);
        },
        select: function(startDate, endDate, title) {
          confirm('Do you want to make plans for ' + startDate.format() + ' and ' + endDate.format() + '?');
          var eventTitle = prompt('Please enter the title of your event.');
          if (eventTitle.length > 3) {
            $("#calendar").fullCalendar("renderEvent", {
              title: eventTitle,
              start: startDate.format(),
              end: endDate.format()
            });
            alert("All done! Your invite has been sent!");
          } else {
            alert("You did not title your event. Please enter a new title.");
          }
        }
      }
    };
  }
};
</script>

<style>
body {
  font-size: 14px;
  font-family: "Quicksand", "Open Sans", sans-serif;
  line-height: 1.4;
  color: #4d5055;
  word-wrap: break-word;
  word-break: break-word;
  display: block;
}

div {
  display: block;
}

*,
::after,
::before {
  box-sizing: border-box;
}
</style>
