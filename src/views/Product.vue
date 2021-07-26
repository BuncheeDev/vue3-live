<template>
  <div class="container px-4">
    <div class="row">
      <div class="col-xl-12 col-md-12">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in products">
              <th scope="row">{{item.id}}</th>
              <td>{{item.title}}</td>
              <td>{{item.detail}}</td>
              <td>{{item.title}}</td>
              <td>{{item.title}}</td>

            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

import { ref,onMounted } from "vue";
import axios from "axios";
export default {
  name: "Product",
 
  setup() {
   const products = ref([])
const getData = async ()=>{
    const res = await axios.get("https://api.codingthailand.com/api/course")
    products.value = res.data.data
    console.log(res.data.data);
}
    onMounted(() => {
     getData()
    }) 
    
    return {products}
  },
};


</script>



