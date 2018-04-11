 <template>
  <div class="col-md-3">
  	<div class="thumbnail">
  		<img src="">
  		<div class="caption">
  			<h4>{{ user.name }}</h4>
  			<h5>{{ user.email }}</h5>
  		</div>
  	</div> 
  </div>
</template> 
<script>
  export default {
    props: ['user']
  }
</script>