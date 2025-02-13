﻿$('#myCarousel').carousel({
    interval: 8000,
})

$('#modalCookie').modal('show')


if (localStorage.getItem('cookieAceito') != 1) {
    $('#modalCookie').modal('show')
} else {
    $('#modalCookie').modal('hide')
}

$(".accept").click(function () {

    $('#modalCookie').modal('hide')
    localStorage.setItem('cookieAceito', 1)
});

localStorage.getItem('idade')


    (function () {
        var Message;
        Message = function (arg) {
            this.text = arg.text, this.message_side = arg.message_side;
            this.draw = function (_this) {
                return function () {
                    var $message;
                    $message = $($('.message_template').clone().html());
                    $message.addClass(_this.message_side).find('.text').html(_this.text);
                    $('.messages').append($message);
                    return setTimeout(function () {
                        return $message.addClass('appeared');
                    }, 0);
                };
            }(this);
            return this;
        };
        $(function () {
            var getMessageText, message_side, sendMessage;
            message_side = 'right';
            getMessageText = function () {
                var $message_input;
                $message_input = $('.message_input');
                return $message_input.val();
            };
            sendMessage = function (text) {
                var $messages, message;
                if (text.trim() === '') {
                    return;
                }
                $('.message_input').val('');
                $messages = $('.messages');
                message_side = message_side === 'left' ? 'right' : 'left';
                message = new Message({
                    text: text,
                    message_side: message_side
                });
                message.draw();
                return $messages.animate({ scrollTop: $messages.prop('scrollHeight') }, 300);
            };
            $('.send_message').click(function (e) {
                return sendMessage(getMessageText());
            });
            $('.message_input').keyup(function (e) {
                if (e.which === 13) {
                    return sendMessage(getMessageText());
                }
            });

            setTimeout(function () {
                return sendMessage('Olá! Não estou online no momento, mas pode deixar uma mensagem...');
            }, 1000);

            /*
            setTimeout(function () {
                return sendMessage('aaa');
            }, 1000);
            */
        });
    }.call(this));