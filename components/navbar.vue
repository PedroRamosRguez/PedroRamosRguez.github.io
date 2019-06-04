<template>
    <div class="topnav" id="myTopnav" ref="myTopnav">
            <a href="#">Home</a>
            <a href="#about">Acerca</a>
            <a href="#projects">Proyectos</a>
            <a href="#tecnologies">Tecnologías</a>
            <a href="#footer">Contacto</a>
            <a href="javascript:void(0);" class="icon" v-on:click="myFunction"><i class="fa fa-bars"></i></a>
    </div>
</template>

<script>
export default {
  methods: {
    myFunction: function(){
      let x = this.$refs.myTopnav;
      if(x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
  }
}
</script>