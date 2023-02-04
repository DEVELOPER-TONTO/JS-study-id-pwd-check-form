
    // document.querySelector('.navbar-toggler').addEventListener('click',function(){
    //     document.querySelector('.list-group').classList.toggle('show');
    // });

    $('.navbar-toggler').on('click',function(){
        $('.list-group').toggleClass('show');
    });
    
    // document.querySelector('.test-btn').addEventListener('click',function(){
    //     document.querySelector('.black-bg').classList.add('show');
    // });

    // document.querySelector('.btn-danger').addEventListener('click',function(){
    //     document.querySelector('.black-bg').classList.remove('show');
    // });

    $('.test-btn').on('click',function(){
        $('.black-bg').addClass('show-ani');
    });
    
    $('.btn-danger').on('click',function(){
        $('.black-bg').removeClass('show-ani');
    });
