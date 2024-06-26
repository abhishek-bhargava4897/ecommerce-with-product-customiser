<?php include('includes/header.php')?>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick-theme.css" />
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
<style>
     body {
     background-color: #4A148C
 }

 @media (max-width:991.98px) {
     .padding {
         padding: 1.5rem
     }
 }

 @media (max-width:767.98px) {
     .padding {
         padding: 1rem
     }
 }

 .padding {
     padding: 5rem
 }

 .card {
     position: relative;
     display: flex;
     width: 600px;
     flex-direction: column;
     min-width: 0;
     word-wrap: break-word;
     background-color: #fff;
     background-clip: border-box;
     border: 1px solid #d2d2dc;
     border-radius: 11px;
     -webkit-box-shadow: 0px 0px 5px 0px rgb(249, 249, 250);
     -moz-box-shadow: 0px 0px 5px 0px rgba(212, 182, 212, 1);
     box-shadow: 0px 0px 5px 0px rgb(161, 163, 164)
 }

 .card .card-body {
     padding: 1rem 1rem
 }

 .card-body {
     flex: 1 1 auto;
     padding: 1.25rem
 }

 p {
     font-size: 0.875rem;
     margin-bottom: .5rem;
     line-height: 1.5rem
 }

 h4 {
     line-height: .2 !important
 }

 .items {
     width: 90%;
     margin: 0px auto;
     margin-top: 100px
 }

 .slick-slide {
     margin: 10px
 }

 .media iframe,
 .media-content {
     position: absolute;
     top: 0;
     bottom: 0;
     left: 0;
     right: 0;
     border: 0;
     border-radius: inherit;
     background-size: cover;
     background-repeat: no-repeat;
     background-position: 50% 50%;
     background-color: rgba(120, 120, 120, .1);
     display: flex;
     -webkit-box-pack: center;
     -ms-flex-pack: center;
     justify-content: center;
     -webkit-box-align: center;
     -ms-flex-align: center;
     align-items: center
 }

 .media-content:before {
     content: '';
     position: absolute;
     height: 10%;
     width: 90%;
     left: 5%;
     bottom: 0;
     background: inherit;
     background-position-y: 100%;
     filter: blur(10px)
 }

 .circle .media-content:before {
     width: 40%;
     left: 30%
 }

 .profile-image {
     width: 100%;
     height: 200px;
     border-top-left-radius: 11px !important;
     border-top-right-radius: 11px
 }

 .card-title {
     font-size: 19px;
     font-weight: 200
 }
 .slick-slide{
     height:480px;
 }
</style>
<div class="items">
    <div class="card">
        <div class="media media-2x1 gd-primary"> <img class="profile-image" src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1568709978/BBBootstrap/2.jpg"> </div>
        <div class="card-body">
            <h5 class="card-title">Delbert Simonas</h5>
            <p class="card-text">"Online reviews can make or break a customer's decision to make a purchase. Read about these customer review on site"</p>
        </div>
    </div>
    <div class="card">
        <div class="media media-2x1 gd-primary"> <img class="profile-image" src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1561869127/BBBootstrap/img-3.jpg"> </div>
        <div class="card-body">
            <h5 class="card-title">Tikoh Amin</h5>
            <p class="card-text">"When you think of Apple you automatically think expensive if your anything like me. When purchasing this laptop I was skeptical."</p>
        </div>
    </div>
    <div class="card">
        <div class="media media-2x1 gd-primary"> <img class="profile-image" src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1561869127/BBBootstrap/img-2.jpg"> </div>
        <div class="card-body">
            <h5 class="card-title">Malachi Lensing</h5>
            <p class="card-text">"I’ve wanted a MacBook for a while now because of the build quality and the simplicity of the OS. I spend an average 6 hours a day."</p>
        </div>
    </div>
    <div class="card">
        <div class="media media-2x1 gd-primary"> <img class="profile-image" src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1561869126/BBBootstrap/img-1.jpg"> </div>
        <div class="card-body">
            <h5 class="card-title">Christian Isla</h5>
            <p class="card-text">"This MacBook has excellent processing speed. The screen is crystal clear and I really enjoy the touchbar. I set it up"</p>
        </div>
    </div>
    <div class="card">
        <div class="media media-2x1 gd-primary"> <img class="profile-image" src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1563294707/Profile/img-1.jpg"> </div>
        <div class="card-body">
            <h5 class="card-title">Lori Charles</h5>
            <p class="card-text">"For the last 10 years, I have owned an old Gateway laptop. Although it was amazing and lasted me, it was time for an upgrade."</p>
        </div>
    </div>
</div>
<?php include('includes/footer.php')?>
<script>
    $(document).ready(function(){

$('.items').slick({
dots: true,
infinite: true,
speed: 800,
autoplay: true,
autoplaySpeed: 2000,
slidesToShow: 4,
slidesToScroll: 4,
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 3,
slidesToScroll: 3,
infinite: true,
dots: true
}
},
{
breakpoint: 600,
settings: {
slidesToShow: 2,
slidesToScroll: 2
}
},
{
breakpoint: 480,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
}

]
});
});
</script>