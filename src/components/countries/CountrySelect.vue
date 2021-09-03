<template>
  <div>
    <select
      @change="onChange"
      v-model="selected"
      class="form-select mt-4 mb-10 rounded border block w-1/2 p-3"
    >
      <option
        v-for="country in countries"
        :key="country.ID"
        :value="country.CountryCode"
      >
        {{ country.Country }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'CountrySelect',
  props: {
    countries: {
      type: Array,
      required: true,
    },
    data() {
      return {
        selected: 0,
      };
    },
  },
  methods: {
    onChange() {
      const country = this.countries.find(
        (item) => item.CountryCode === this.selected
      );
      this.$emit('get-country', country);
    },
  },
};
</script>
