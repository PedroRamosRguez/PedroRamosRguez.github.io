<template>
  <section>
    <div class="wrapper" id="tecnologies" style="width: 100%;">
        <h1> Tecnologías más utilizadas</h1>
          <no-ssr>
            <div>
              <carousel :autoplay="true" :loop="true" :perPage="1" :paginationEnabled="false">
                <slide v-for="tecnology in tecnologies" :key="tecnology.id">
                  <img :src="tecnology.src" :alt="tecnology.alt" style="width:200px;height:170px;"/>
                </slide>
              </carousel>
            </div>
          </no-ssr>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    const tecnologies = [
        {src:require('~/assets/svg/Python_logo.svg'),alt:'logo python'},
        {src:require('~/assets/svg/JavaScript_logo.svg'),alt:'logo javascript'},
        {src:require('~/assets/svg/Vuejs_logo.svg'),alt:'logo vue'},
        {src:require('~/assets/svg/nuxt_logo.svg'),alt:'logo nuxt'},
        {src:require('~/assets/svg/Django_logo.svg'),alt:'logo django'},
        {src:require('~/assets/svg/nodejs_logo.svg'),alt:'logo nodejs'},
        {src:require('~/assets/svg/flask_logo.svg'),alt:'logo flask'},
      ]
    return {tecnologies}
  }
}
</script>
<style>
.VueCarousel-slide {
  position: relative;
  color: #fff;
  text-align: center;
  margin-bottom: 50px;
}
</style>