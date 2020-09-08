<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <div class="row">
        <CategoryCreate @created="addNewCategory" />
        <CategoryEdit />
      </div>
    </section>
  </div>
</template>

<script>
import CategoryCreate from "@/components/app/CategoryCreate";
import CategoryEdit from "../components/app/CategoryEdit";

export default {
  name: "categories",
  components: {
    CategoryCreate,
    CategoryEdit
  },
  daa: () => ({
    categories: []
  }),
  methods: {
    addNewCategory(category) {
      this.categories.push(category);
    }
  }
};
</script>
