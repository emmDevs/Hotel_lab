<template>
<div id="app">
  <booking-form/>
  <bookings-grid :bookings='bookings'></bookings-grid>


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

    eventBus.$on('booking-deleted', (id) => {
      let index = this.bookings.findIndex(booking => booking._id === id)
      this.bookings.splice(index, 1)
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
