<template>
  <div class="container-fluid px-4">
    <div class="row">
      <div class="col-xl-12 col-md-12">
        <h1>สินค้า</h1>
        <router-link class="btn btn-success" to="/category/add">
          เพิ่มสิ้นค้า
        </router-link>
        <div v-if="errorMessage" class="alert alert-danger" role="alert">
          {{ errorMessage }}
        </div>

        <div v-if="loading" class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>

        <table class="table" v-if="categories.length">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ชื่อประเภทสินค้า</th>
              <th scope="col">เครื่องมือ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in categories" :key="item.id">
              <th scope="row">{{ item.id }}</th>
              <td>{{ item.name }}</td>
              <td>
                <router-link
                  :to="{ name: 'CategoryEdit', params: { id: item.id } }"
                >
                  แก้ไข
                </router-link>
                |
                <a class="" href="#" @click.prevent="delCategoryById(item.id)"
                  >Delete</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../constants";
import Swal from "sweetalert2";
export default {
  name: "CategoryIndex",
  setup() {
    const categories = ref([]);
    const errorMessage = ref("");
    const loading = ref(false);

    const getData = async () => {
      try {
        loading.value = true;
        const response = await axios.get(`${BASE_API_URL}/api/category`);
        categories.value = response.data; // [{}]
        // console.log(response.data);
      } catch (error) {
        //400, 500
        console.log(error);
        errorMessage.value = "เกิดข้อผิดพลาด กรุณาลองใหม่";
      } finally {
        loading.value = false;
      }
    };

    const delCategoryById = async (id) => {
      const res = await axios.delete(`${BASE_API_URL}/api/category/${id}`);
      // await Swal.fire({
      //   title: "Are you sure?",
      //   text: "You won't be able to revert this!",
      //   icon: "warning",
      //   showCancelButton: true,
      //   confirmButtonColor: "#3085d6",
      //   cancelButtonColor: "#d33",
      //   confirmButtonText: "Yes, delete it!",
      // }).then((result) => {
      //   if (result.isConfirmed) {
      //     const res = await axios.delete(`${BASE_API_URL}/api/category/${id}`);
      //     Swal.fire(res.data.message, "Deleted!", "success");
      //   }
      // });
      alert(res.data.message);
      history.go(0);
    };

    onMounted(() => {
      getData();
    });

    return { categories, errorMessage, loading, delCategoryById };
  },
};
</script>

<style></style>
