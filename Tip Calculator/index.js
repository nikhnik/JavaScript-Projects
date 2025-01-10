$("#calculate").click(function (e) { 
    var billAmount = parseFloat($("#bill").val());
    var tipPercentage = parseFloat($("#tip").val());
    var totalAmount = billAmount +(billAmount*(tipPercentage/100));
    $("#total").text(totalAmount);
});