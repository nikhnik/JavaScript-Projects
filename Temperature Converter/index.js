$(document).ready(function () {
    function computeEvent(event) {
      const currentValue = +$(event.target).val();
      const name = $(event.target).attr("name");
  
      switch (name) {
        case "celsius":
          $("#kelvin").val((currentValue + 273.15).toFixed(2));
          $("#fahrenheit").val((currentValue * 1.8 + 32).toFixed(2));
          break;
        case "fahrenheit":
          $("#celsius").val(((currentValue - 32) / 1.8).toFixed(2));
          $("#kelvin").val(((currentValue - 32) / 1.8 + 273.15).toFixed(2));
          break;
        case "kelvin":
          $("#celsius").val((currentValue - 273.15).toFixed(2));
          $("#fahrenheit").val(((currentValue - 273.15) * 1.8 + 32).toFixed(2));
          break;
        default:
          break;
      }
    }
  
    $(".input").on("change", computeEvent);
  });
  