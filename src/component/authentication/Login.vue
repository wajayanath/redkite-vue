 <template>
      <div class="row">
        <div class="col-md-4 col-md-offset-4">
            <div class="panel panel-default">
                <div class="panel-body">
                    <form role="form">
                        <fieldset>
                            <div class="form-group">
                                <input 
                                    v-model="email"
                                    class="form-control" 
                                    placeholder="E-mail" 
                                    name="email" 
                                    type="email" 
                                    autofocus>
                            </div>
                            <div class="form-group">
                                <input v-model="password" class="form-control" placeholder="Password" name="password" type="password" value="">
                            </div>
                            <!-- Change this to a button or input when using this as a form -->
                            <button @click="login" type="button" class="btn btn-success btn-block">Login</button>
                           
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: '' 
      }
    },
    methods: {
      login() {
        var data = {
          client_id: 2,
          client_secret: 'jHKjQ7HvX0R718XhswjXSGaMvMBmJBy9oHuiERzS',
          grant_type: 'password',
          username: this.email,
          password: this.password
        }
        this.$http.post("oauth/token", data)
          .then(response => {
              // console.log(response)
              this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now())

              this.$router.push("/all")
          })
          // .then(function (response) {
          //     console.log(response)
          // })
      }
    }
  }
</script>

<style>

</style>
