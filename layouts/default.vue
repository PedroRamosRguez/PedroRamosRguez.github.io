<template>
  <div style="background-color:white">
    <header>
        <Navbar/>
    </header>
    <main>
      <section>
        <div class="background_face" style="background-color:#3C444D;height:400px;">
          <img src="https://avatars2.githubusercontent.com/u/14938442?s=400&u=3e407ef7c778e3324b8d092286f25e6f571582de&v=4" 
          alt="foto Pedro Ramos" style="border-radius: 30%; margin-top: -50px;width: 240px; height:210px;"/>
          <!-- <h1 class="letras" style="width:auto;margin-left:10%; "> -->
              <!-- <span style="color:#897DFF;">Hola &#128406;&#127996;, soy Pedro Ramos. Bienvenido a mi página personal</span> -->
              <!-- <img src="https://avatars2.githubusercontent.com/u/14938442?s=400&u=3e407ef7c778e3324b8d092286f25e6f571582de&v=4" alt="foto Pedro Ramos" style="border-radius: 30%; margin-left: auto;margin-right: auto;width: 240px; height:210px;"/>
            <span style="color:#897DFF;margin-left:100px;">soy Pedro Ramos. Bienvenido a mi página personal</span>
            </h1> -->
          <Letters/>
        </div>
      </section>
      <section>
        <Projects/>
      </section>
      <section>
        <About/>
      </section>
      <section>
        <Tecnologies/>
      </section>
    </main>
    <!-- <footer> -->
      <Footer/>
    <!-- </footer> -->
  </div>
</template>
<script>
  import Navbar from '@/components/navbar';
  import Projects from '@/components/projects';
  import About from '@/components/about';
  import Tecnologies from '@/components/tecnologies'
  import Footer from '@/components/footer';
  import Letters from '@/components/letters'
  export default {
    components: {
      Navbar,
      Projects,
      About,
      Tecnologies,
      Footer,
      Letters
    }
  }
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  max-width: 100%;
  overflow-x: hidden;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.topnav {
  overflow: hidden;
  background-color: #333;
  position: fixed;
  top: 0;
  width: 100%;
  z-index:1;
}
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
.topnav a:hover {
  background-color: #ddd;
  color: black;
}
.active {
  background-color: #4CAF50;
  color: white;
}
.topnav .icon {
  display: none;
}
@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
  .letras{
    font-size:20px;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
.background_face {
  background: url('../assets/dark-honeycomb.png') repeat 0 0;
  width: 100%;
  margin: 0;
  text-align: center;
  height: 300px;
  padding-top: 120px;
  box-sizing: border-box;
  -webkit-animation: slide 20s linear infinite;
}

.background_face h1 {
  font-family: sans-serif;
}

@-webkit-keyframes slide {
    from { background-position: 0 0; }
    to { background-position: -400px 0; }
}
</style>
