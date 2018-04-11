<template>
  <div>
    <my-users>
    </my-users>
  </div>
</template>
<script>
import Users from './user/users.vue'
  export default {
   components: {
     'my-users': Users
   }
  }
</script>