<template>
  <div class="row">
    <my-user
      v-for="user in users"
      :user='user'>
    </my-user>
  </div> 
</template>

<style>
  
</style> 
<script>  
import User from './user.vue'

  export default {
    data () { 
      return {
        users : []
      }
    }, 
    components: {
      'my-user': User
    },

    created () {
      this.$http.get('api/users')
          .then( response => {
              this.users = response.body.data
          })
      }
  }
</script>