$('button').on('click', function () {
    console.log($('button').text());
    console.log("fe");
})

$("#1").on('click', function () {
    $('input').val($('input').val() + "1");
})
$("#2").on('click', function () {
    $('input').val($('input').val() + "2");
})
$("#3").on('click', function () {
    $('input').val($('input').val() + "3");
})
$("#4").on('click', function () {
    $('input').val($('input').val() + "4");
})
$("#5").on('click', function () {
    $('input').val($('input').val() + "5");
})
$("#6").on('click', function () {
    $('input').val($('input').val() + "6");
})
$("#7").on('click', function () {
    $('input').val($('input').val() + "7");
})
$("#8").on('click', function () {
    $('input').val($('input').val() + "8");
})
$("#9").on('click', function () {
    $('input').val($('input').val() + "9");
})
$("#0").on('click', function () {
    $('input').val($('input').val() + "0");
})

$("#c").on('click', function () {
    $('input').val("");
})

$("#plusOp").on('click', function () {
    $('input').val($('input').val() + "+");
})


$("#subOp").on('click', function () {
    $('input').val($('input').val() + "-");
})

$("#mulOp").on('click', function () {
    $('input').val($('input').val() + "*");
})

$("#divOp").on('click', function () {
    $('input').val($('input').val() + "/");
})
$("#modOp").on('click', function () {
    $('input').val($('input').val() + "%");
})

$("#eq").on('click', function () {
    let ans = 0;
    try {
        ans = eval($('input').val());
        $('input').val(ans);
    } catch (error) {
        alert("enter valid expression");
        $('input').val("");
    }

})


$('input').on("keypress", function (event) {
    if (event.which == 13) {
        event.preventDefault();
        let ans = 0;
        try {
            ans = eval($('input').val());
            $('input').val(ans);
        } catch (error) {
            alert("enter valid expression");
            $('input').val("");
        }
    }
})
