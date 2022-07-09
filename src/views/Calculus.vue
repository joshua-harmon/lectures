<template>
  <section id="calculus">
  <div class="box">
  <ul id="bookmarks">
  <li><a href="#">calculus1</a>
   <ul class="sites">
    <li><a href="https://www.youtube.com/watch?v=TzDhdvVg9_c">calc5thGrd</a></li>  
    <li><a href="https://www.youtube.com/watch?v=CfW845LNObM">calculus</a></li> 
    <li><a href="https://www.youtube.com/watch?v=Q1575oHNYRo">problem</a></li> 
    <li><a href="https://www.youtube.com/watch?v=GtP6CUEHDhY">calc</a></li>  
    <li><a href="http://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/1.-differentiation/part-a-definition-and-basic-rules/session-1-introduction-to-derivatives/">introCalc</a></li>
    <li><a href="http://ocw.mit.edu/courses/mathematics/18-01-single-variable-calculus-fall-2006/video-lectures/">video</a></li>
    <li><a href="http://ocw.mit.edu/courses/mathematics/18-02sc-multivariable-calculus-fall-2010/1.-vectors-and-matrices/part-a-vectors-determinants-and-planes/session-1-vectors/">vectors</a></li>
    <li><a href="https://www.youtube.com/watch?v=xGhdatEGsZw">calcProb</a></li> 
    <li><a href="https://www.youtube.com/watch?v=YO38MCdj-GM">feinmanInt</a></li>   
    <li><a href="https://www.youtube.com/watch?v=S0_qX4VJhMQ">geomCalclus</a></li>  
  </ul>
 </li>
  <li><a href="#">calculus2</a>
   <ul class="sites">
    <li><a href="https://www.youtube.com/watch?v=CfW845LNObM">calcQ</a></li>  
    <li><a href="https://www.youtube.com/watch?v=E6Pz2X0XORw">calcSubstn</a></li>
    <li><a href="https://www.youtube.com/watch?v=E_ecLWj_rcM">notByParts</a></li>  
    <li><a href="https://www.youtube.com/watch?v=jSRKQ19d-nc">polyIntgl</a></li>   
    <li><a href="https://www.youtube.com/watch?v=2EAWpaZmH7k">soalIngral</a></li>  
    <li><a href="https://www.youtube.com/watch?v=TzDhdvVg9_c">calc5thGr</a></li>  
    <li><a href="https://www.youtube.com/watch?v=Fm7O0Ka0YPw">tanIntegral</a></li>  
    <li><a href="https://www.youtube.com/watch?v=8cyYqzlvSmg">forceVectors</a></li>  
    <li><a href="https://www.youtube.com/watch?v=RuxhwBeTgM8">eulerSurprise</a></li>   
    <li><a href="https://www.youtube.com/watch?v=m3im-iJdhv4">derivatives</a></li>  
    <li><a href="https://www.youtube.com/watch?v=Rh0pYtQG5wIleImg">lorentz</a></li> 
  </ul>
 </li>
  <li><a href="#">crossProduct</a>
   <ul class="sites">
    <li><a href="https://www.google.com/search?client=ubuntu&espv=2&btnG=Search&q=vector+cross+product&oq=&gs_l=">google</a></li>
    <li><a href="https://www.mathsisfun.com/algebra/vectors-cross-product.html">primer</a></li>
    <li><a href="https://youtu.be/qsgK1d-_8ik?t=14">class</a></li>
    <li><a href="https://www.youtube.com/watch?v=HtSuA80QTyo">intro</a></li>  
    <li><a href="https://www.youtube.com/watch?v=rB83DpBJQsE">div&curl</a></li>  
  </ul>
 </li>
  <li><a href="#">spanish</a>
   <ul class="sites">
    <li><a href="https://www.youtube.com/watch?v=hFGRELe3hrw">calcSpan</a></li>  
    <li><a href="https://www.youtube.com/watch?v=hFGRELe3hrw">calcSpa</a></li>
  </ul>
 </li>
  <li><a href="#">diffEq</a>
   <ul class="sites">
    <li><a href="http://ocw.mit.edu/courses/mathematics/18-303-linear-partial-differential-equations-fall-2006/">diffEq</a></li>
    <li><a href="https://www.youtube.com/watch?v=XDhJ8lVGbl8">diffEq</a></li>    
    <li><a href="https://ocw.mit.edu/courses/mathematics/18-03-differential-equations-spring-2010/">diffEq</a></li>  
    <li><a href="https://www.youtube.com/watch?v=ToIXSwZ1pJU">heatEq</a></li> 
    <li><a href="https://www.youtube.com/watch?v=p_di4Zn4wz4">diffEq</a></li>  
    <li><a href="https://www.youtube.com/watch?v=acAw5WGtzuk">convolution</a></li>  
    <li><a href="https://www.youtube.com/watch?v=ly4S0oi3Yz8">partialDiffs</a></li>  
    <li><a href="https://www.youtube.com/watch?v=PFDu9oVAE-g">eigenVectors</a></li>
    <li><a href="https://www.youtube.com/watch?v=NutSdXr1it0">coolDiffEq</a></li>  
  </ul>
 </li>
 <li><a href="#"></a>
   <ul class="sites">
 </ul>
</li>
</ul>
</div>

</section>
</template>


<script>
export default {
  name: "Calculus",
};
</script>


<style scoped>
*{
    margin:0;
    padding:0;
}
body {
    font:14px/1.3 Arial,sans-serif;
}
.box {
    height: 571px;
    margin: 30px auto;
    padding: 15px;
    width: 771px;
}
#bookmarks,#bookmarks ul {
    background-color: #8899AA;
    list-style: none outside none;
    margin: 0;
    padding: 0;
}
#bookmarks {
    display: block;
    padding: 5px;
    position: relative;
    width: 112px;
    -moz-perspective: 200px;
    -ms-perspective: 200px;
    -webkit-perspective: 200px;
    -o-perspective: 200px;
    perspective: 200px;
}
#bookmarks ul {
    left: -9999px;
    opacity:0;
    overflow: hidden;
    padding: 5px;
    position: absolute;
    top: -9999px;
    -moz-transform: rotateY(70deg);
    -ms-transform: rotateY(70deg);
    -o-transform: rotateY(70deg);
    -webkit-transform: rotateY(70deg);
    transform: rotateY(70deg);
    -moz-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    -o-transform-origin: 0 0;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -moz-transition: -moz-transform 0.3s linear, opacity 0.3s linear;
    -ms-transition: -ms-transform 0.3s linear, opacity 0.3s linear;
    -o-transition: -o-transform 0.3s linear, opacity 0.3s linear;
    -webkit-transition: -webkit-transform 0.3s linear, opacity 0.3s linear;
    transition: transform 0.3s linear, opacity 0.3s linear;
}
#bookmarks li {
    background-color: #FFFFFF;
    position: relative;
}
#bookmarks > li {
    -moz-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    -o-transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
}
#bookmarks li a {
    background-color: #AABBCC;
    border-color: #DDDDDD #555555 #555555 #DDDDDD;
    border-style: solid;
    border-width: 1px;
    color: #000000;
    display: block;
    font-size: 15px;
    padding: 8px 10px 8px 5px;
    text-decoration: none;
    width:95px;
    -moz-transition: all 0.2s linear;
    -ms-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear;
}
#bookmarks li:hover > a {
    background-color: #8899AA;
    border-color: #8899AA;
    color: #FFFFFF;
}
#bookmarks li:hover ul.sites {
    left: 114px;
    opacity:1;
    top: 0;
    -moz-transition-delay: 0.3s;
    -ms-transition-delay: 0.3s;
    -o-transition-delay: 0.3s;
    -webkit-transition-delay: 0.3s;
    transition-delay: 0.3s;
    -moz-transform: rotateY(0deg);
    -ms-transform: rotateY(0deg);
    -o-transform: rotateY(0deg);
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
}
#bookmarks ul li {
    width: 100%;
}

</style>