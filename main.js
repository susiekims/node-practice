const getColor = () => {
    $.ajax({
        url: 'http://localhost:3500/randomcolor',
        method: 'GET',
        dataType: 'json'
    }).then((res) => {
        // console.log(res);
        const color = res.color;
        $('body').css('background', color);
    })
}

$(function() {
    getColor();
    getColorByIndex();
});
