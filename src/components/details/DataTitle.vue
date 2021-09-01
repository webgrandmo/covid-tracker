<template>
  <div class="text-center">
    <h2 class="text-3xl font-bold">{{ title }}</h2>
    <div class="text-2xl mt-4 mb-10">
      {{ timeStamp }}
    </div>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  name: 'DataTitle',
  props: {
    title: {
      type: String,
      required: true,
    },
    dataDate: {
      type: String,
      required: true,
    },
  },
  computed: {
    timeStamp() {
      return moment(this.dataDate).format('Do of MMMM YYYY, hh:mm:ss');
    },
  },
};
</script>
