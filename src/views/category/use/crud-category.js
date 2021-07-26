import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter, useRoute } from "vue-router";
import Swal from "sweetalert2";
import { BASE_API_URL } from "../../../constants";

export function useAdd() {
  const name = ref("");
  const router = useRouter();

  const onSubmit = async () => {
    const res = await axios.post(`${BASE_API_URL}/api/category`, {
      name: name.value,
    });
    // alert(res.data.message);
    router.replace("/category");

    Swal.fire(res.data.message, "บันทึกสำเร็จ!", "success");
    router.replace("/category");
  };
  return { name, onSubmit };
}

export function useEdit() {
  const id = ref(0);
  const name = ref("");
  const router = useRouter();
  const route = useRoute();

  onMounted(() => {
    id.value = route.params.id; //
    getCategoryById(id.value);
  });

  const getCategoryById = async (id) => {
    const res = await axios.get(`${BASE_API_URL}/api/category/${id}`);
    name.value = res.data.name;
  };

  const onSubmit = async () => {
    const res = await axios.put(`${BASE_API_URL}/api/category`, {
      id: id.value,
      name: name.value,
    });
    // alert(res.data.message);
    router.replace("/category");

    Swal.fire(res.data.message, "แก้ไขสำเร็จ!", "success");
    router.replace("/category");
  };
  return { name, onSubmit };
}
