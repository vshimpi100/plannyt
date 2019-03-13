    






<template>

    <div class="container">
        <div class="row">
            <friends-searchbar class="col-lg-8" search="friends"></friends-searchbar>
            <viewSelector></viewSelector>
            </div>
        <div class="row">
            <profile-day-selector class="col-12"></profile-day-selector>       
         </div>
         
        
    </div>    
</template>

<script>
import searchbar from "./Searchbar.vue"
import viewSelector from "./ViewSelector.vue"
import daySelector from "./DaySelector.vue"
export default {
    components:{
        "friends-searchbar": searchBar,
        "view-selector": viewSelector,
        "profile-day-selector": daySelector,
    }    
}
</script>

<style scoped>


</style>

