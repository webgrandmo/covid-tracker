<template>
  <div class="grid md:grid-cols-2 gap-4">
    <div class="shadow-md bg-green-100 p-10 text-center rounded">
      <h3 class="text-3xl text-green-900 font-bold mb-4">Cases</h3>
      <div class="text-2-xl mt-4">
        <span class="font-bold">
          New: {{ $filters.formatNumberWithCommas(stats.NewConfirmed) }}
        </span>
      </div>
      <div class="text-2-xl mt-4">
        <span class="font-bold">
          Total: {{ $filters.formatNumberWithCommas(stats.TotalConfirmed) }}
        </span>
      </div>
    </div>
    <div class="shadow-md bg-green-100 p-10 text-center rounded">
      <h3 class="text-3xl text-green-900 font-bold mb-4">Deaths</h3>
      <div class="text-2-xl mt-4">
        <span class="font-bold">
          New: {{ $filters.formatNumberWithCommas(stats.NewDeaths) }}
        </span>
      </div>
      <div class="text-2-xl mt-4">
        <span class="font-bold">
          Total: {{ $filters.formatNumberWithCommas(stats.TotalDeaths) }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataBox',
  props: {
    stats: {
      type: Object,
      required: true,
    },
  },
};
</script>
