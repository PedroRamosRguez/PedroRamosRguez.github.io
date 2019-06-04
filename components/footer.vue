<template>
    <div class="footer" id="footer">
        <span> Feel free to contact me</span>
        <a href="https://github.com/PedroRamosRguez"><i class="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/pedro-ramos-4a5a41135"><i class="fab fa-linkedin"></i></a>
        <a href="https://twitter.com/pramos90"><i class="fab fa-twitter"></i></a>
         <a href="mailto: p.ramos1990@gmail.com"><i class="fas fa-envelope"></i></a><br/><br/>
        <span>© {{ year }} Copyright: Pedro Manuel Ramos Rodríguez</span><br/>
        <span>Original Idea: <a href="https://marinaaisa.com/" target="_blank" rel="noopener">Marina Aisa</a></span>
        <br/>

        <span>Done with ❤️ using <span class="vue_nuxt" >Nuxt</span> + <span class="vue_nuxt">VueJs</span></span>
    </div>
</template>

<script>
export default{
    data(){
        let year = new Date().getFullYear()
        return {year}
    }
}

</script>
<style>
    .footer {
    position: absolute;
    right: 0;
    /* bottom: 0; */
    left: 0;
    padding: 1rem;
    background-color: #333333;
    text-align: center;
    height:150px;
    }
    .footer span{
    text-align: left;
    color: white;
    }
    .footer a{
        /* border-radius: 25px;
    background: #4d004d; */
    padding: 5px;
    width: 400px;
    text-decoration: none;
    color: #897dff;
    }
    span .vue_nuxt{
    color:#42b883;
    }
</style>