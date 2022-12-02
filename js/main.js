// set rules for header and navbar

let getContainerImg = document.querySelector(".header .right-col"),
    imgCards = document.querySelectorAll(".header .right-col .img"),
    overlay = document.querySelector(".header .right-col .img .overlay"),
    navBarSmallIcon = document.querySelector(".options-icon"),
    navBarElement = document.querySelector(".options"),
    navBar = document.querySelector(".nav");

    getContainerImg.addEventListener("mouseover",()=>{
        imgCards[2].style.transform = "translate3d(-45px,0,20px)";
        imgCards[1].style.transform = "translate3d(20px,0,20px)";
        imgCards[0].style.transform = "translate3d(85px,0,20px)";

        overlay.style.backgroundColor = "rgba(0,204,131,.7)";
        overlay.children[0].style.display = "block";

    })
    

    getContainerImg.addEventListener("mouseleave",()=>{
        imgCards[2].style.transform = "translate3d(0,0,0)";
        imgCards[1].style.transform = "translate3d(0,0,0)";
        imgCards[0].style.transform = "translate3d(0,0,0)";

        overlay.style.backgroundColor = "rgba(0,0,0,0)";
        overlay.children[0].style.display = "none";

    })

    window.addEventListener("scroll", ()=>{
        navBar.classList.add("active");
    })

    // Qoute Slider
    let bulletsSlider = document.querySelectorAll(".bullets ul li"),
        qouteContainer = document.querySelectorAll(".qoute-container > div")
        
    const removeActiveClass = ()=>{
        bulletsSlider.forEach((bullet)=>{
            bullet.children[0].classList.remove("active");
        })
    }

    bulletsSlider.forEach((bullet)=>{
        bullet.addEventListener("click",()=>{
            removeActiveClass();
            qouteContainer.forEach((qoute)=>{
                if(qoute.classList.contains(bullet.dataset.class)){
                    qoute.classList.add("show");
                    bullet.children[0].classList.add("active")
                }else{
                    qoute.classList.remove("show")
                }
            })
        })
    })

    // expand navbar on small screens
    navBarSmallIcon.addEventListener("click",(e)=>{
        if(navBarElement.classList.contains("options")){
            navBarElement.className = "icon-options show"
        }else{
            navBarElement.className = "options"
        }
    })


    // jquery orders
    $(function(){
        $(window).scroll(function(){
            if($(this).scrollTop() == 0){
                $(".nav").removeClass("active");
            }
        })
        $(window).resize(function(){
            if($(window).width() > 960){
                navBarElement.className = "options"
            }
        })
    });

    $(function(){
        var 
            videoOptions = $(".video-section .video-buttons ul li"),
            videoGet = $(".video-section .video-container"),
            getButtonPlay = $(".video-section .video-container i"),
            getVideoPlay = $(".video-section .play"),
            getVideoPlaySelf = $(".video-section .play video"),
            navLi = $(".nav .options ul li")

                videoOptions.on("click",function(){
                    getVideoPlay.fadeOut(1000,function(){
                        getVideoPlaySelf.trigger("pause");
                        videoGet.css("visibility","visible")
                    });
                    $($(this).data("class")).css("display","block");
                    videoGet.not($(this).data("class")).css("display","none")
                });


                getButtonPlay.on("click",function(){
                    $($(this).data("class")).fadeIn();
                    getVideoPlay.not($(this).data("class")).fadeOut();
                    videoGet.css("visibility","hidden");
                });

                // slide down to the right section
                navLi.on('click',function(){
                    $("html, body").animate({
                        scrollTop: $($(this).data("class")).offset().top - 100
                    },1500)
                });
    });

    // Header section
    let peopleCardContainer = document.getElementById("people-card");
    let peopleCardData = [{
        avatar:"https://bs-assets.toptal.io/blackfish-assets/public/pages/skills_sem/images/talents/angel_3acba3.jpg",
        name:"Jack Frey",
        job:"Degitial Product Designer"
    },{
        avatar:"https://bs-assets.toptal.io/blackfish-assets/public/pages/skills_sem/images/talents/jake_83ca7c.jpg",
        name:"Jack Frey",
        job:"Degitial Product Designer"
    },{
        avatar:"https://bs-assets.toptal.io/blackfish-assets/public/pages/skills_sem/images/talents/jake_83ca7c.jpg",
        name:"Wael Abuawad",
        job:"Degitial Product Designer"
    },{
        avatar:"https://bs-assets.toptal.io/blackfish-assets/public/pages/skills_sem/images/talents/haiyuan_5be638.jpg",
        name:"Aurthur Morgen",
        job:"Degitial Product Designer"
    }]
    peopleCardContainer.innerHTML = peopleCardData.map((person,index)=>{
        return `<div class="img" ${index}>
            <img src=${person.avatar}>
            <p>${person.name}</p>
            <span>${person.job}</span>
        </div>`
    }).join("") + `<div class="overlay">
            <span>Meet Our<br/>UI Designers</span>
    </div>`;
    // Header section

    // section 1 Our-Network
    let networkSectionContainer = document.querySelector(".book-container");
    networkSectionData = [
    {
        name:"Jeff Witters",
        job:"UI Designer",
        intro:"Jeff is an award-winning multi-disciplinary designer. With 16+ years of experience, his passion lies in working with startups to create user-friendly des...",
        avatar:"https://bs-uploads.toptal.io/blackfish-uploads/talent/profile/picture_file/picture/541038/retina_100x100_huge_c1cc747e2d2b59c3362c6d5427e3ef1e-a15a701ee5765e1b6c8d7cfc8ad817e7.png"
    },{
        name:"Angela Ji",
        job:"UI Designer",
        intro:"Jeff is an award-winning multi-disciplinary designer. With 16+ years of experience, his passion lies in working with startups to create user-friendly des...",
        avatar:"https://bs-uploads.toptal.io/blackfish-uploads/talent/profile/picture_file/picture/554914/retina_100x100_huge_45c363b21ed0c98a1929f014aaade26a-0279c6e3854d6af9ba4fb63516d497df.jpg"
    },{
        name:"Adrien Valesa",
        job:"UI Designer",
        intro:"Jeff is an award-winning multi-disciplinary designer. With 16+ years of experience, his passion lies in working with startups to create user-friendly des...",
        avatar:"https://bs-uploads.toptal.io/blackfish-uploads/talent/profile/picture_file/picture/553560/retina_100x100_huge_5674129d728376d680d4089f660fd9b7-7389f9869511eb5149b00a62ebb8c694.jpg"
    },{
        name:"Adrien Castelain",
        job:"UI Designer",
        intro:"Jeff is an award-winning multi-disciplinary designer. With 16+ years of experience, his passion lies in working with startups to create user-friendly des...",
        avatar:"https://bs-uploads.toptal.io/blackfish-uploads/talent/profile/picture_file/picture/545212/retina_100x100_huge_22b07aebc62ab5093c6642633c2dbeec-d3b0a9a165f75f58119393124972e441.jpg"
    },{
        name:"Ogeh Ezeonu",
        job:"UI Designer",
        intro:"Jeff is an award-winning multi-disciplinary designer. With 16+ years of experience, his passion lies in working with startups to create user-friendly des...",
        avatar:"https://bs-uploads.toptal.io/blackfish-uploads/talent/profile/picture_file/picture/531864/retina_100x100_huge_2f40d0d28ac3046bc5d0e6e153a8dd71-63b3e432a5ec7f612626585693e3d587.jpg"
    },{
        name:"Igor Dinuzzi",
        job:"UI Designer",
        intro:"Jeff is an award-winning multi-disciplinary designer. With 16+ years of experience, his passion lies in working with startups to create user-friendly des...",
        avatar:"https://bs-uploads.toptal.io/blackfish-uploads/talent/profile/picture_file/picture/540635/retina_100x100_huge_71a4cb4fe5268b0b541d50be6d9e5739-8594c4c1daf0cdb442062a1d73ba9ce1.jpg"
    },{
        name:"Eric Müller Moreno",
        job:"UI Designer",
        intro:"Jeff is an award-winning multi-disciplinary designer. With 16+ years of experience, his passion lies in working with startups to create user-friendly des...",
        avatar:"https://bs-uploads.toptal.io/blackfish-uploads/talent/profile/picture_file/picture/529619/retina_100x100_huge_13ea23972531a4aeba4c3c458049bede-9a719f5fad6e661a491d68a2527e76aa.jpg"
    },{
        name:"Steven Miller",
        job:"UI Designer",
        intro:"Jeff is an award-winning multi-disciplinary designer. With 16+ years of experience, his passion lies in working with startups to create user-friendly des...",
        avatar:"https://bs-uploads.toptal.io/blackfish-uploads/talent/profile/picture_file/picture/548946/retina_100x100_huge_66b6f3f381bbf9621f064bfff1047780-48892bbdb6447fd6a230059e6f771bc1.jpg"
    },{
        name:"Mathieu Barre",
        job:"UI Designer",
        intro:"Jeff is an award-winning multi-disciplinary designer. With 16+ years of experience, his passion lies in working with startups to create user-friendly des...",
        avatar:"https://bs-uploads.toptal.io/blackfish-uploads/talent/profile/picture_file/picture/519238/retina_100x100_huge_885334ca8392a9749a4b4c8c6d003540-e8d3b3e88c4ec8178b538a55fbf4584c.jpg"
    },{
        name:"Alexandru Pitea",
        job:"UI Designer",
        intro:"Jeff is an award-winning multi-disciplinary designer. With 16+ years of experience, his passion lies in working with startups to create user-friendly des...",
        avatar:"https://bs-uploads.toptal.io/blackfish-uploads/talent/profile/picture_file/picture/552148/retina_100x100_huge_ac545b9cf49629a52a0bc1ae40e47d68-f53908767e88d3295f712f6dc3a52370.jpg"
    },{
        name:"Nemanja Veselinovic",
        job:"UI Designer",
        intro:"Jeff is an award-winning multi-disciplinary designer. With 16+ years of experience, his passion lies in working with startups to create user-friendly des...",
        avatar:"https://bs-uploads.toptal.io/blackfish-uploads/talent/profile/picture_file/picture/545118/retina_100x100_huge_dfe759da2cd54364df086d42ac6f4fb3-3006980b47d636e6fb4222b77d0d041b.jpg"
    }]
    
    networkSectionContainer.innerHTML = networkSectionData.map((book,index)=>{
        return `<div class="book" key=${index}>
            <img src=${book.avatar} />
            <h6>${book.name}</h6>
            <span>${book.job}</span>
            <p>${book.intro}
                <span>Read More</span>
            </p>
            <button class="hover1">Hire ${book.name}</button>
        </div>`
    }).join("") + `<div class="book">
        <h6>Want to hire similar talent?</h6><br/>
        <button>Join Toptal®</button>
    </div>`

    // section 1 Our-Network

    // section 3 Features
    let featuresSectionContainer = document.getElementById("feature-container");
    let featuresSectionData = [{
        title:"Trusted Experts Only",
        icon:"fa-users",
        description:"All of our talent are seasoned experts who ramp up quickly, readily contribute as core team members, and work with you to minimize onboarding time."
    },{
        title:"Your New Team Member",
        icon:"fa-users",
        description:"All of our talent are seasoned experts who ramp up quickly, readily contribute as core team members, and work with you to minimize onboarding time."
    },{
        title:"Scale as Needed",
        icon:"fa-users",
        description:"All of our talent are seasoned experts who ramp up quickly, readily contribute as core team members, and work with you to minimize onboarding time."
    },{
        title:"Seamless Hiring",
        icon:"fa-users",
        description:"All of our talent are seasoned experts who ramp up quickly, readily contribute as core team members, and work with you to minimize onboarding time."
    },{
        title:"Flexible Engagements",
        icon:"fa-users",
        description:"All of our talent are seasoned experts who ramp up quickly, readily contribute as core team members, and work with you to minimize onboarding time."
    },{
        title:"Expert Talent Matcher",
        icon:"fa-users",
        description:"All of our talent are seasoned experts who ramp up quickly, readily contribute as core team members, and work with you to minimize onboarding time."
    }]

    featuresSectionContainer.innerHTML = featuresSectionData.map((feature,index)=>{
        return `<div class="sector" key=${index}>
            <i class="fas ${feature.icon}"></i>
            <h6>${feature.title}</h6>
            <p>${feature.description}</p>
        </div>`
    }).join("");

    // section 3 Features

    // section 4 Rating
    let ratingSectionContainer = document.getElementById("rating-container");
    let ratingSectionData = [{
        title:"Excellent technical communication",
        rating:"26.4%",
        description:"Toptal designers must possess strong written and verbal communication skills. They work effectively across multiple collaboration tools and convey complex design concepts with ease."
    },{
        title:"Portfolio review",
        rating:"26.4%",
        description:"Toptal designers must possess strong written and verbal communication skills. They work effectively across multiple collaboration tools and convey complex design concepts with ease."
    },{
        title:"Proactive problem-solving",
        rating:"26.4%",
        description:"Toptal designers must possess strong written and verbal communication skills. They work effectively across multiple collaboration tools and convey complex design concepts with ease."
    },{
        title:"End-to-End project execution",
        rating:"26.4%",
        description:"Toptal designers must possess strong written and verbal communication skills. They work effectively across multiple collaboration tools and convey complex design concepts with ease."
    },{
        title:"Continued excellence",
        rating:"26.4%",
        description:"Toptal designers must possess strong written and verbal communication skills. They work effectively across multiple collaboration tools and convey complex design concepts with ease."
    }]

    ratingSectionContainer.innerHTML = ratingSectionData.map((rate,index)=>{
        return `<div class="content" key=${index}>
            <div class="rate">
                ${rate.rating} <br/>
                <span>pass rate</span>
            </div>
            <div class="pointer">
                <i class="fas fa-circle"></i>
            </div>
            <div class="text">
                <h5>${rate.title}</h5>
                <p>${rate.description}</p>
            </div>
        </div>`
    }).join("");
    // section 4 Rating
