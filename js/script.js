document.addEventListener('DOMContentLoaded', function() {
    const showFamily = document.getElementById('show-family');
    const showStudies = document.getElementById('show-studies');
    const showColombia = document.getElementById('show-colombia');
    const showWedding = document.getElementById('show-wedding');

    showFamily.addEventListener('click', function() {
        DeleteVideo();
        DeleteImage();
        ChangeTitle("My perfectly imperfect family");
        CreateImageElement("../media/img/family.png", "Family Picture")
        CreateList();
    });

    showStudies.addEventListener('click', function(){
        DeleteVideo();
        DeleteImage();
        ChangeTitle("Petroleum Engineer - UIS");
        CreateImageElement("../media/img/uis.jpeg","Grade Picture");
        ChangeDescription("I graduated from Universidad Industrial de Santander as a Petroleum Engineer in April, 2016. I was honored with a CumLaude diploma for my academic performance.");
    });

    showColombia.addEventListener('click', function(){
        DeleteVideo();
        DeleteImage();
        ChangeTitle("I was born in Colombia - South American Country");
        CreateVideo("https://www.youtube.com/embed/ShIrRgyKpE8?si=ulxwi-vWh7joqTkN");
        ChangeDescription("I was born in Colombia, into a hardworking middle-class family. My mother is a homemaker and my father works independently in electricity and construction."); 
    });

    showWedding.addEventListener('click', function(){
        DeleteVideo();
        DeleteImage();
        ChangeTitle("Weeding Time!");
        CreateImageElement("../media/img/weeding.jpeg","Wedding Picture");
        ChangeDescription("I got married with my friend and collegue in 2022, our day was full of joy and love.");
    });

    function DeleteVideo(){
        const video = document.querySelector("#pic iframe");

        if(video){
            video.remove();
        }
    }

    function DeleteImage(){
        const img = document.querySelector("#pic img")

        if(img){
            img.remove();
        }
    }

    function CreateVideo(src){
        const video = document.getElementById("pic");
        const iframe = document.createElement("iframe");
        iframe.src = src;
        iframe.width = "560";
        iframe.height = "315";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.style.maxWidth = '80%';
        video.appendChild(iframe);
    }

    function CreateImageElement(src, alt){
        const image = document.getElementById("pic");
        const img = document.createElement("img");
        img.src = src;
        img.alt = alt;
        img.style.width = '50%'; 
        image.appendChild(img);
    }

    function ChangeTitle(newTitle){
        const title = document.querySelector(".topic h2");
        title.textContent = newTitle;
    }

    function ChangeDescription(newdescription){
        const description1 = document.querySelector('#description2');
        description1.innerHTML = '';
        let p = document.createElement('p');
        p.textContent = newdescription;
        description1.appendChild(p);
    }

    function CreateList(){
        const description = document.querySelector('#description2');
        description.innerHTML = '';

        // Create a new ul element
        const ul = document.createElement("ul");

        // Create and append li elements to the ul
        const familyMembers = ["Dad: Olivo", "Mom: Stella", "Sister: Juliana", "Niece: MaVi"];
        familyMembers.forEach(function(member) {
            const li = document.createElement("li");
            li.textContent = member;
            ul.appendChild(li);
        });

        // Append the ul to the description element
        description.appendChild(ul);
    }

});