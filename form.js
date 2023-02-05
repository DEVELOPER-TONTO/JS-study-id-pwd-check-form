
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

    //전송버튼 누르면 첫 input 값 공백씨 알림 띄움
    document.querySelector('form').addEventListener('submit',function(e){
        if(document.querySelector('.form-id').value == ''){
            alert('아이디 뭐하냐 지금');
            e.preventDefault();
        }
        if(document.querySelector('.form-pwd').value == ''){
            alert('비번 뭐하냐 지금');
            e.preventDefault();
        }

        if(document.querySelector('.form-pwd').value.length < 6){
            alert('비번 6자넘게 지금');
            e.preventDefault();
        }
    });
