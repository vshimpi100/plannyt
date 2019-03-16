<template>
  <full-calendar :config="config" :events="events"/>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      config: {
        events: [
          {
            title: "All Day Event",
            start: "2019-03-14T12:00:00"
          },
          {
            title: "Project 2 Presentations",
            start: "2019-03-16T10:00:00",
            end: "2019-03-16T14:00:00",
            color: "purple" // override!
          },
          {
            title: "ST. PATRICK'S DAY",
            start: "2019-03-17T10:00:00",
            allDay: true,
            color: "green" // override!
          },
          {
            id: 999,
            title: "Study",
            start: "2019-03-16T20:00:00",
            end: "2019-03-16T6:00:00",
            color: "blue"
          },
          {
            id: 999,
            title: "Study",
            start: "2019-03-29T22:00:00",
            color: "blue"
          },
          {
            title: "Lunch with Cody",
            start: "2019-03-17T12:00:00",
            end: "2019-03-17T13:00:00",
          },
          {
            title: "Bowling",
            start: "2019-03-20T21:00:000",
            end: "2019-03-20T23:00:00"
          },
          {
            title: "Date Night - Movies",
            start: "2019-03-21T18:00:00"
          },
          {
            title: "Fishing",
            start: "2019-03-05T06:00:00",
            end: "2019-03-05T11:00:00",
          },
          {
            title: "Trivia Night",
            start: "2019-04-02T15:00:00",
            end: "2019-04-02T17:00:00",
            color: "red"
          },
        ],
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
          confirm(
            "Do you want to make plans for " +
              startDate.format() +
              " and " +
              endDate.format() +
              "?"
          );
          var eventTitle = prompt("Please enter the title of your event.");
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