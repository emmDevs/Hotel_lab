<template>
    <form v-on:submit="addBooking" id="booking-form"> 
        <!-- add method?? -->
        <h2>Add a Booking</h2>
        <div class="formWrap">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="name" required>
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required>
            <label for="status">Checked in:</label>
            <input type="checkbox" id="status" v-model="status" >

        </div>
        <input type="submit" value="Save" id="save">




    </form>
  
</template>
<script>
import { eventBus } from '@/main.js'
import BookingService from '@/services/BookingService.js'

export default {
    name: 'booking-form',
    data() {
        return {
            name: '',
            email: '',
            status: false
        }
    },
    methods: {
        addBooking(e) {
            e.preventDefault()
            const booking = {
                name: this.name,
                email: this.email,
                status: this.status
            }
            BookingService.postBooking(booking)
            .then(res => eventBus.$emit('booking-added', res));
            this.name = '',
            this.email = '',
            this.status = false
        }
    }

}

</script>

<style>

</style>