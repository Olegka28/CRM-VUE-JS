<template>
  <div class="col s12 m6 l4">
    <div class="card light-blue bill-card">
      <div class="card-content white-text">
        <span class="card-title">Счет в валюте</span>

        <p v-for="cur of currencies" :key="cur" class="currency-line">
          <span> {{ getCurrence(cur) | currency(cur) }} </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeBill",
  props: ["rates"],
  data: () => ({
    currencies: ["RUB", "UAH", "USD"]
  }),
  computed: {
    base() {
      return (
        this.$store.getters.info.bill / (this.rates["UAH"] / this.rates["EUR"])
      );
    }
  },
  methods: {
    getCurrence(currency) {
      return (this.base * this.rates[currency]).toFixed(2);
    }
  }
};
</script>

<style></style>
