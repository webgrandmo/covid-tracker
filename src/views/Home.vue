<template>
  <main v-if="!loading" class="home">
    <data-title :title="title" :dataDate="dataDate" />
    <data-box :stats="stats" />
  </main>
  <main class="flex flex-col align-center justify-center text-center" v-else>
    <div class="text-gray-500 text-3xl mt-10 mb-6">Fetching Data</div>
    <img :src="loadingImage" class="w-24 m-auto" alt="Loading spinner" />
  </main>
</template>

<script>
// @ is an alias to /src
import DataTitle from '@/components/details/DataTitle';
import DataBox from '@/components/details/DataBox';
export default {
  components: {
    DataTitle,
    DataBox,
  },
  data() {
    return {
      loading: true,
      title: 'Global',
      dataDate: '',
      countries: [],
      stats: {},
      loadingImage: require('../assets/img/spinner.svg'),
    };
  },
  methods: {
    async fetchCovidSummaryData() {
      const res = await fetch('https://api.covid19api.com/summary');
      const data = await res.json();
      return data;
    },
  },
  async created() {
    const data = await this.fetchCovidSummaryData();
    console.log(data);
    this.dataDate = data.Date;
    this.countries = data.Countries;
    this.stats = data.Global;
    this.loading = false;
  },
};
</script>
