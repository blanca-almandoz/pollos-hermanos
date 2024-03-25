
document.addEventListener('DOMContentLoaded', function(){
    let links = document.querySelectorAll('li a');

    links.forEach(function(link){
        link.addEventListener('click', function(e){
            e.preventDefault();

            let targetId = this.getAttribute('href').substring(1);
            let targetElement = document.getElementById(targetId);
            
            if (targetElement){
                let offsetTop = targetElement.offsetTop;
                let scrollTo = offsetTop - 64;
                window.scrollTo({
                    top: scrollTo,
                    behavior: 'smooth'
                })
            }
        })
    })
})