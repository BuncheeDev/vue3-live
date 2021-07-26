<template>
  <div class="container-fluid px-4">
    <h1>เพิ่ม</h1>
    <div class="row">
      <div class="col-xl-6">
        <form action="" @submit.prevent="onSubmit">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >สินค้า</label
            >
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              v-model="name"
            />
            {{ name }}
          </div>
          <button class="btn btn-primary" type="submit">บันทึก</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useAdd } from "./use/crud-category";
export default {
  name: "CategoryAdd",
  setup() {
    const { name, onSubmit } = useAdd();
    return { name, onSubmit };
  },
};
</script>

<style scoped></style>
