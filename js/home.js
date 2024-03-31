document.addEventListener('DOMContentLoaded', function() {
    const personalBox = document.getElementById('personal-page');
    const workBox = document.getElementById('work-page');
    const travelBox = document.getElementById('travel-page');
    const contactBox = document.getElementById('contact-div');

    personalBox.addEventListener('click', function(){
        window.location.href = './html/personal.html'
    })

    workBox.addEventListener('click', function(){
        window.location.href = './html/work.html'
    })

    travelBox.addEventListener('click', function(){
        window.location.href = './html/travel.html'
    })

    contactBox.addEventListener('click', function(){
        contactBox.style.backgroundImage = "url()";
        const p = document.getElementById('contact-p');
        p.innerHTML = "email: maria.melendez@gmail.com";
        p.style.color = 'black';
        p.style.fontSize = '1.3em'
    })
    
})