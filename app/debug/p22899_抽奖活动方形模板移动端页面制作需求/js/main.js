// 抽奖
$(function() {
    window.requestAnimFrame = (function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
            window.setTimeout(callback, 1000 / 60)
        }
    })();
    var totalDeg = 360 * 3 + 0;
    var steps = [];
    var lostDeg = [30, 90, 150, 210, 270, 330];
    var prizeDeg = [6, 126, 246];
    var prize, sncode;
    var count = 0;
    var now = 0;
    var a = 0.01;
    var outter, inner, timer, running = false;

    function countSteps() {
        var t = Math.sqrt(2 * totalDeg / a);
        var v = a * t;
        for (var i = 0; i < t; i++) {
            steps.push((2 * v * i - a * i * i) / 2)
        }
        steps.push(totalDeg)
    }

    function step() {
        outter.style.webkitTransform = 'rotate(' + steps[now++] + 'deg)';
        outter.style.MozTransform = 'rotate(' + steps[now++] + 'deg)';
        if (now < steps.length) {
            requestAnimFrame(step)
        } else {
            running = false;
            setTimeout(function() {
                if (prize != null) {
                    $("#sncode").text(sncode);
                    var type = "";
                    if (prize == 1) {
                        type = "一等奖"
                    } else if (prize == 2) {
                        type = "二等奖"
                    } else if (prize == 3) {
                        type = "三等奖"
                    }
                    $("#prizetype").text(type);
                    $("#result").slideToggle(500);
                    $("#outercont").slideUp(500)
                } else {
                    alert("谢谢您的参与，下次再接再厉")
                }
            }, 200)
        }
    }

    // 转盘停止的函数。传入度数，即可转到指定的位置。
    function start(deg) {
        deg = deg || lostDeg[parseInt(lostDeg.length * Math.random())];
        console.log('deg:' + deg);
        running = true;
        clearInterval(timer);
        totalDeg = 360 * 5 + deg;
        steps = [];
        now = 0;
        countSteps();
        requestAnimFrame(step)
    }
    window.start = start;
    outter = document.getElementById('outer');
    inner = document.getElementById('inner');
    i = 10;
    $("#inner").click(function() {
        if (running) return;
        // if (count >= 3) {
        //     alert("您已经抽了 3 次奖。");
        //     return
        // }
        // if (prize != null) {
        //     alert("亲，你不能再参加本次活动了喔！下次再来吧~");
        //     return
        // }
        // 弹出验证码输入框
        $('.popup__code').show();

        // ajax,发送请求,获取度数。
        $.ajax({
            url: "index.php",
            dataType: "json",
            data: {
                token: "o7MB9ji5fQRsE0ZoVAMU7SlnRyMI",
                ac: "activityuser",
                tid: "5",
                t: Math.random()
            },
            beforeSend: function() {
                running = true;
                timer = setInterval(function() {
                    i += 5;
                    outter.style.webkitTransform = 'rotate(' + i + 'deg)';
                    outter.style.MozTransform = 'rotate(' + i + 'deg)'
                }, 1)
            },
            success: function(data) {
                if (data.error == "invalid") {
                    count = 3;
                    clearInterval(timer);
                    return
                }
                if (data.error == "getsn") {
                    alert('本次活动你已经中过奖，本次只显示你上次抽奖结果!兑奖SN码为:' + data.sn);
                    count = 3;
                    clearInterval(timer);
                    prize = data.prizetype;
                    sncode = data.sn;
                    start(prizeDeg[data.prizetype - 1]);
                    return
                }
                if (data.success) {
                    prize = data.prizetype;
                    sncode = data.sn;
                    start(prizeDeg[data.prizetype - 1])
                } else {
                    prize = null;
                    start()
                }
                running = false;
                count++
            },
            error: function() {
                prize = null;
                start();
                running = false;
                count++
            },
            timeout: 4000
        })
    })
});

// 蒙层开关
(function () {
	$('.main__rules').on('click', function () {
		$('.popup__rules').show();
	});

	$('.main__getPresent').on('click', function(){
		$('.popup__present').show();
	});

	$('.main__getPresent').on('click', function(){
		$('.popup__present').show();
	});

	$('.main__getGift').on('click', function(){
		$('.popup__congrate').show();
	});

	$('.popup__close').on('click', function () {
		$(this).parent().parent().hide();
	})
})();

// 下拉框选择的显示
(function () {
	var serverName = $('.server__name');
	$('.server').on('change', function () {
		serverName.html( $(this).val() )
	})

	var characterName = $('.character__name');
	$('.character').on('change', function () {
		characterName.html( $(this).val() )
	})
})();

// 设置转盘start按钮的宽度，以修复iphone4的bug
(function () {
	var height = $('#inner').height();
	var width = height / 159 * 146;
	$('#inner > img').css({
		'height': height + 'px',
		'width': width + 'px'
	})
})();