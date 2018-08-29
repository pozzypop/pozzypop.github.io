$(function(){
    $(".game").css("display", "none");
    $(".settings").css("display", "none");
    $(".shopp").css("display", "none");
});

var money = 0;
var clicker = 1;

var a = 50;
var lang = 0;

function clickk() {
    money = money + clicker;
    $("#balance").text(money);
}

function play() {
    $(".game").css("display", "");
    $(".menu").css("display", "none");
    $(".shopp").css("display", "none");
    $(".settings").css("display", "none");
}

function exit() {
    $(".shopp").css("display", "none");
    $(".game").css("display", "none");
    $(".menu").css("display", "");
    $(".settings").css("display", "none");
}

function shop() {
    $(".shopp").css("display", "");
    $(".game").css("display", "none");
    $(".menu").css("display", "none");
    $(".settings").css("display", "none");
}

function shop_a() {
    if(money < a){
        no_money();
    } else if(money >= a){
        money = money-a;
        clicker++;
        $("#balance").text(money);
    }
}

function settings() {
    $(".shopp").css("display", "none");
    $(".game").css("display", "none");
    $(".menu").css("display", "none");
    $(".settings").css("display", "");

}

function laungle() {
    if(lang == 0){
        $("#aa").text("Играть");
        $("#set").text("Настройки");
        $("#ga").text("Игра");
        $("#lang").text("Язык: РУС");
        $("#ex").text("Выход");
        $("#exx").text("Выход");
        $("#sh").text("Магазин");
        $("#shh").text("Магазин");
        $("#exxx").text("Выход");
        $("#gaa").text("Игра");
        lang++;
    } else if(lang == 1){
        $("#aa").text("Play");
        $("#set").text("Settings");
        $("#ga").text("Game");
        $("#lang").text("Laungle: ENG");
        $("#ex").text("Exit");
        $("#exx").text("Exit");
        $("#sh").text("Shop");
        $("#shh").text("Shop");
        $("#exxx").text("Exit");
        $("#gaa").text("Game");
        lang--;
    }

}