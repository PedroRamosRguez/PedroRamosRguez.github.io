<template>
    <h1 class="ml4">
        <span class="letters letters-1">Hola, soy Pedro Ramos</span>
        <span class="letters letters-2">Bienvenido a mi web personal</span>
        <span class="letters letters-3">Aquí encontrarás algunos proyectos que he hecho</span>
        <span class="letters letters-4">Las tecnologías que más uso</span>
        <span class="letters letters-5">Y mi recorrido como desarrollador</span>
    </h1>
</template>
<script>
export default {
    data() {
        return {}
    },
    mounted(){
        var ml4 = {};
        ml4.opacityIn = [0,1];
        ml4.scaleIn = [0.2, 1];
        ml4.scaleOut = 3;
        ml4.durationIn = 800;
        ml4.durationOut = 600;
        ml4.delay = 1500;
        anime.timeline({loop: true})
        .add({
            targets: '.ml4 .letters-1',
            opacity: ml4.opacityIn,
            scale: ml4.scaleIn,
            duration: ml4.durationIn
        }).add({
            targets: '.ml4 .letters-1',
            opacity: 0,
            scale: ml4.scaleOut,
            duration: ml4.durationOut,
            easing: "easeInExpo",
            delay: ml4.delay
        }).add({
            targets: '.ml4 .letters-2',
            opacity: ml4.opacityIn,
            scale: ml4.scaleIn,
            duration: ml4.durationIn
        }).add({
            targets: '.ml4 .letters-2',
            opacity: 0,
            scale: ml4.scaleOut,
            duration: ml4.durationOut,
            easing: "easeInExpo",
            delay: ml4.delay
        }).add({
            targets: '.ml4 .letters-3',
            opacity: ml4.opacityIn,
            scale: ml4.scaleIn,
            duration: ml4.durationIn
        }).add({
            targets: '.ml4 .letters-3',
            opacity: 0,
            scale: ml4.scaleOut,
            duration: ml4.durationOut,
            easing: "easeInExpo",
            delay: ml4.delay
        }).add({
            targets: '.ml4 .letters-4',
            opacity: ml4.opacityIn,
            scale: ml4.scaleIn,
            duration: ml4.durationIn
        }).add({
            targets: '.ml4 .letters-4',
            opacity: 0,
            scale: ml4.scaleOut,
            duration: ml4.durationOut,
            easing: "easeInExpo",
            delay: ml4.delay
        }).add({
            targets: '.ml4 .letters-5',
            opacity: ml4.opacityIn,
            scale: ml4.scaleIn,
            duration: ml4.durationIn
        }).add({
            targets: '.ml4 .letters-5',
            opacity: 0,
            scale: ml4.scaleOut,
            duration: ml4.durationOut,
            easing: "easeInExpo",
            delay: ml4.delay
        }).add({
            targets: '.ml4',
            opacity: 0,
            duration: 500,
            delay: 500
        });
    }
}
</script>

<style>
.ml4 {
  position: relative;
  font-weight: 900;
  font-size: 1.5em;
  color:rgba(255,255,255,0.7)
}
.ml4 .letters {
  position: absolute;
  margin: auto;
  left: 0;
  top: 0.3em;
  right: 0;
  opacity: 0; 
}
</style>