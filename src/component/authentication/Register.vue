<template>
      <div class="row">
        <div class="col-md-4 col-md-offset-4">
            <div class="panel panel-default">
                <div class="panel-body">
                    <form role="form">
                        <fieldset>
                            <div class="form-group">
                                <input 
                                    v-model="name"
                                    class="form-control" 
                                    placeholder="name" 
                                    name="name" 
                                    type="text" 
                                    autofocus>
                            </div>
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
                            <button type="button" class="btn btn-success btn-block">Register</button>
                           
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
        name: '',
        email: '',
        password: ''
      }
    }
  }
</script>

<style>

</style>
