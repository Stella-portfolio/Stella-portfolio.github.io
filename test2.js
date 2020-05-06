$('.navbar a').on('click', function(e){
    if(this.hash !== ''){
        e.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
            sctollTop: $(hash).offset().top
        }, 800);
    }
})

