<template>
  <full-calendar :config="config" :events="events"/>
</template>

<script>
import moment from "moment";
export default {
  props: [
    'username'
  ],
  data() {
    return {
      events: [
        {
          title: "test",
          allDay: true,
          start: moment(),
          end: moment().add(1, "d")
        },
        {
          title: "another test",
          start: moment().add(2, "d"),
          end: moment()
            .add(2, "d")
            .add(2, "h")
        }
      ],
      config: {
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
          dow: [1, 2, 3, 4, 5, 6, 7],
          start: "00:00",
          end: "24:00"
        },
        header: {
          left: "prev,next, today",
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
        dayClick: function(date) {
          alert("clicked " + date.format());
        },
        select: function(startDate, endDate) {
          alert("selected " + startDate.format() + " to " + endDate.format());
        }
      }
    };
  }
};
</script>

<style>

</style>
