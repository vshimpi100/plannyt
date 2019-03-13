<template>
    <div class="container">
        <div class="row" v-for="day in currentWeek" v-bind:key="day">
            <!-- <friends-searchbar class="col-lg-8" search="friends"></friends-searchbar>
            <viewSelector></viewSelector>
            </div>
        <div class="row">
            <day-selector class="col-12"></day-selector>       
            <time-selector class="col-12"></time-selector> -->
        </div>
        
    </div>    
</template>

<script>
// import searchbar from "./Searchbar.vue"
// import viewSelector from "./ViewSelector.vue"
// import daySelector from "./DaySelector.vue"
// import timeSector from "./TimeSelector.vue"
export default {
  data: function() {
   return {
     currentWeek: ["monday","tuesday","wednesday"],
     maxQuotes: 10
   };
 }
    // components:{
    //     "friends-searchbar": searchBar,
    //     "view-selector": viewSelector,
    //     "day-selector": daySelector,
    //     "time-selector": timeSelect
    // }    
}
</script>

<style scoped>


</style>

