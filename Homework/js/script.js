$(document).ready(function() {
    $('.main_btna').on('click', function() {
        $('.overlay').animate(
            {
                opacity: 'toogle',
                height: 'toggle'
            },2000
        );
        $('.modal').animate(
            {
                opacity: 'toogle',
                height: 'toggle'
            },2000
        );

        //консультация 
        $('.main_btn').on('click', function() {
            $('.overlay').animate(
                {
                    opacity: 'toogle',
                    height: 'toggle'
                },2000
            );
            $('.modal').animate(
                {
                    opacity: 'toogle',
                    height: 'toggle'
                },2000
            );
        });

        //li

        $('ul>li').on('click', function() {
            $('.overlay').animate(
                {
                    opacity: 'toogle',
                    height: 'toggle'
                },2000
            );
            $('.modal').animate(
                {
                    opacity: 'toogle',
                    height: 'toggle'
                },2000
            );
        });

        //close
        $('.close').on('click', function(){
            $('.overlay').animate(
                {
                    opacity: 'hide',
                    height: 'hide'
                },1000
            );
            $('.modal').animate(
                {
                    opacity: 'hide',
                    height: 'hide'
                },1000
            );
        });
    });
});



// function showModal() {
//     $('.overlay').animate(
//         {
//             opacity: 'toogle',
//             height: 'toggle'
//         },2000
//     );
//     $('.modal').animate(
//         {
//             opacity: 'toogle',
//             height: 'toggle'
//         },2000
//     ); 
//     }
// });