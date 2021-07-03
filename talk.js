$(function() {
    $('#yes').click(function(event) {
/*         modal('我就知道小姐姐您一定会愿意的。(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            fireworks();

        }); */
        modal('我就知道小姐姐您一定会愿意的。(^_^)！', A1);
    });
    $('#no').click(function(event) {
        modal('明人不说暗话！', A);
    });
});

function A1() {
    modal('2021.5.21是我们初次见面的日子，美是初见,heiqunrousifanbuxie', B1);
}

function B1() {
    modal('5.30 第二次见面我们去万达吃了烤肉(^_^)', C1);
}

function C1() {
    modal('6.01 第三次见面我试着拉了你的手', D1);
}

function D1() {
    modal('6.05 第四次见面大学城逛到了龙湖，我们在龙湖聊了很久', E1);
}

function E1() {
    modal('6.09 我们在西绿地走了一大圈，感谢你的冰激凌', F1);
}

function F1() {
    modal('6.14 银泰去吃龙虾，漂亮的碎花裙哈哈', G1);
}

function G1() {
    modal('6.18 你改作业累了，我们去出去跑步。比高高脸贴到你的头发时心跳加快', H1);
}

function H1() {
    modal('6.20 等餐时坐在公交台你介绍了口红，量了对方的手腕粗细(^_^)', I1);
}

function I1() {
    modal('6.29 龙虾太辣，我们喝了一瓶啤酒！', J1)
}

function J1() {
    modal('7.1 党的生日，柚见青柠，张公山湖边，比手大小，我扣住了你(^_^)', function() {
        fireworks();
    });
}

function A() {
    modal('我喜欢你！', B);
}

function B() {
    modal('我知道你在等我这一句话', C);
}

function C() {
    modal('请您不要拒绝我', D);
}

function D() {
    modal('拒绝我，不存在的', E);
}

function E() {
    modal('这辈子都不可能让你离开我', F);
}

function F() {
    modal('跟我走吧', G);
}

function G() {
    modal('房产证上写你名', H);
}

function H() {
    modal('我会做饭', I);
}

function I() {
    modal('爱你。么么哒！', J)
}

function J() {
    modal('行，我们去民政局登记吧', function() {
        fireworks();
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}
