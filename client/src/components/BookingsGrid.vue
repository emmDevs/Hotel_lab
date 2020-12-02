<template>
  <div id='bookings-grid'>
      <booking v-for="booking in bookings" :booking="booking" />
  </div>
</template>

<script>
import { eventBus } from '@/main.js'
import BookingService from '@/services/BookingService.js'
import Booking from './Booking'

export default {
    name: 'bookings-grid',
    components: {
        'booking': Booking
    },
    props: ['bookings']

}
</script>

<style>

</style>