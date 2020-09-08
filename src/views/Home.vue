<template>
  <div>
    <div class="page-title">
      <h3>Счет</h3>

      <button @click="refresh" class="btn waves-effect waves-light btn-small">
        <i class="material-icons">refresh</i>
      </button>
    </div>
    <Loader v-if="loading" />
    <div v-else class="row currency">
      <HomeBill :rates="currency.rates" />
      <HomeCurency :rates="currency.rates" :date="currency.date" />
    </div>
  </div>
</template>

<script>
import HomeBill from "../components/HomeBill";
import HomeCurency from "../components/HomeCurency";

export default {
  name: "home",
  data: () => ({
    loading: true,
    currency: null
  }),
  components: {
    HomeBill,
    HomeCurency
  },
  methods: {
    async refresh() {
      this.loading = true;
      this.currency = await this.$store.dispatch("fetchCurrency");
      this.loading = false;
    }
  },
  async mounted() {
    this.currency = await this.$store.dispatch("fetchCurrency");
    console.log(this.currency);
    this.loading = false;
  }
};
</script>

<style scoped>
.currency {
  height: 400px;
}
</style>
