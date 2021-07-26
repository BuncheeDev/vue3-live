<template>
  <div class="about">
    <h1>เกี่ยวกับเรา</h1>
    <p>{{ email }}</p>
    <a :href="googleUrl">Google</a>

    <br />
    <buttom class="btn btn-info" @Click="greet">Click ME!</buttom>
    <br />
    <img :src="imgUrl.url" :alt="imgUrl.alt" v-if="isShow" />
    <Logo v-if="isShow" />

    <div>
      <h1>ตัวอย่าง Upload file</h1>
      <form action="" @submit.prevent="onSubmit">
        <input type="file" name="picture" ref="file" />
        <!-- ref คือการเข้าถึงเหมือน $( ) ของ jq / file คือตัวแปล -->
        <button type="submit">Upload</button>
      </form>
    </div>
  </div>
</template>

<script>
import Logo from "../components/Logo.vue";
import { ref, reactive, onMounted, onUnmounted } from "vue";

export default {
  name: "About",
  components: {
    Logo,
  },
  setup() {
    const email = ref("mongkol.sacc@gmail.com");
    const googleUrl = ref("http://google.com");
    const imgUrl = reactive({
      url: "https://via.placeholder.com/300",
      alt: "My Image",
    });
    const isShow = ref(true);
    const file = ref(null); // ใส่ null ไว้รอ

    const onSubmit = () => {
      console.log(file.value.file[0]);
      const fileUpload = file.value.file[0];
      const reader = new FileReader();
      reader.readAsDataURL(fileUpload);
      reader.onload = (e) => {
        const base64Images = e.target.result;
        console.log(base64Images);
        // ให้ส่ง
      };
    };

    onMounted(() => {
      // alert("Hello..............");
    });
    onUnmounted(() => {
      // alert("Bye ..............");
    });
    const greet = () => {
      // alert("Hello");
      email.value = "Por@gmail.com";
      // isShow.value = !isShow.value;
      imgUrl.url = "https://via.placeholder.com/500";
    };

    return { email, googleUrl, imgUrl, isShow, greet, onSubmit, file };
  },
};
</script>

<style scoped>
.about {
  color: red;
}
</style>
