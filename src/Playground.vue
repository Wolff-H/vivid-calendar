<template lang="pug">
#playground
    vivid-calendar(
        v-model="date"
    )

</template>



<script setup lang="ts">
import dayjs from "dayjs"
import VividCalendar from './vivid-calendar/index.vue'

const date = ref(dayjs().format('YYYY-MM-DD'))
</script>



<style lang="stylus">
// 
</style>
