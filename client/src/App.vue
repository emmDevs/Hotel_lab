<template>
<div id="app">
  <booking-form/>


</div>
  
</template>

<script>
import BookingForm from './components/BookingForm';
import BookingsGrid from './components/BookingsGrid';
import BookingService from './services/BookingService';
import {  eventBus } from '@/main.js'

export default {
  name: 'app',
  components: {
    'booking-form': BookingForm,
    'bookings-grid': BookingsGrid,
  },
  data (){
    return {
      bookings: []
    };
  },
  mounted() {
    this.fetchBookings();

    eventBus.$on('booking-added', (booking) => {
      this.bookings.push(booking)
    })
  },
  methods: {
    fetchBookings(){
      BookingService.getBookings()
        .then(bookings => this.bookings = bookings)
    }
  }
  }

</script>

<style>

</style>
