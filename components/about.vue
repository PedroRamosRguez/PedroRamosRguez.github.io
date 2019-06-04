<template>
    <section>
        <h1> About</h1>
        <div class="wrapper" style="width: 100%;">
            <div class="about" id="about" style="height:auto">
                <h1 class="letras" style="width:auto; font-size:1.5em; ">
                    <br/>
                    <!-- <p style="color:black; padding-top:5px; font-family: ">My name is Pedro Ramos, I'm a full stack developer. I love technology 
                    and science in general.<br/>I am a graduate in computer engineering in the speciality of information technologies. In addition, I did the following Certificate of Higher Education:
                    system administration and telecommunication and computer systems.<br/> I am from the Canary Islands in Spain.
                    I love data visualization and everything related to the data.<br/>
                    </p> -->
                    <p style="width:50%;margin-left:25%;color:black; padding-top:5px; font-family:'Open Sans', sans-serif; border-left:0;">Mi nombre es Pedro Ramos, soy desarrollador de software. Me encanta la tecnología y la ciencia en general.<br/>
                    Adoro la visualización de datos y todo lo que tenga que ver con el tratamiento de los datos. Actualmente, estoy aprendiendo sobre ciencia de datos y machine learning.<br/>
                    <br/>Soy de las Islas Canarias, en España. A continuación, muestro la enseñanza que he realizado y los trabajos en los que he estado.<br/>
                    </p>
                </h1>
            </div>
        </div>
        <main>
            <h2 style="text-align: center;"></h2>
            <p class="about-description"><span>Marzo 2019-Actualidad</span><br/>Full Stack Developer en Civiclick</p>
            <p class="about-description"><span>Septiembre 2018-Enero 2019</span><br/>4 Meses Full Stack Developer en Arte Consultores</p>
            <p class="about-description"><span>Octubre 2017- Agosto 2018</span><br/>10 Meses como becario en Parlamento de Canarias</p>
            <p class="about-description"><span>2013-2017</span><br/>Grado en Ingeniería Informática. Especialización Tecnologías de la información</p>
            <p class="about-description"><span>2011-2013</span><br/>Grado Superior en Sistemas de Telecomunicación e Informáticos</p>
            <p class="about-description"><span>2009-2011</span><br/>Grado Superior en Administración de Sistemas Informáticos</p>
        </main>
    </section>
</template>


<style lang="scss" scoped>
$font-sans: 'Open Sans', sans-serif;

//Colors
$black: #34435E;
$white: #ffffff;

main {
  min-width: 300px;
  max-width: 500px;
  margin: auto;
}

.about-description {
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  line-height: 1.75em;
  border-top: 3px solid;
  border-image: linear-gradient(to right, #743ad5 0%, #d53a9d 100%);
  border-image-slice: 1;
  border-width: 3px;
  margin: 0;
  padding: 40px;
  position: relative;
}
span{
    color: #743ad5
}
//odd number borders
p:nth-child(odd) {
  border-right: 3px solid;
  padding-left: 5;
  
  &:before {
    left: 100%; 
    margin-left: -20px;
  }
}
//even number borders
p:nth-child(even) {
  border-left: 3px solid;
  padding-right: 5;
  
  &:before {
    right: 100%; 
    margin-right: -20px;
  }
}
</style>