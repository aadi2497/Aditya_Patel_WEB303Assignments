$(document).ready(function () {
    $.ajax({
      type: "GET",
      url: "array.json",
      data: { get_param: "value" },
      dataType: "json",
      complete: function (data) {
        Char = data;
      },
    });
  
  
    $(document).ajaxComplete(function () {
      Char = $.parseJSON(Char.responseText);
      function SortOrder() {
        return function (a, b) {
          if (a.Charater_Name > b.Charater_Name) {
            return 1;
          } else if (a.Charater_Name < b.Charater_Name) {
            return -1;
          }
          return 0;
        };
      }
  
      Char.sort(SortOrder());
      AtoM = Char.filter((item) => /^[a-m]/i.test(item["Charater_Name"]));
      NtoZ = Char.filter((item) => /^[n-z]/i.test(item["Charater_Name"]));
      
      table(Char);
      $("#A-M").text(`Filter A-M (${Object.keys(AtoM).length})`);
      $("#N-Z").text(`Filter N-Z (${Object.keys(NtoZ).length})`);
    });
  });
  
  function table(data) {
       // adding rows
       var rows = "";
       $.each(data, function (key, value) {
         let row_name = `<tr>
               <td>${value.Charater_Name}</td>  
               <td>${value.Devil_Fruit}</td>  
               <td>${value.Gender}</td>                
               <td>${value.Bounty}</td>  
               <td>${value.Age}</td> 
           </tr>`;
         rows += row_name;
       });
   
       $("#tablebody").empty().append(rows);
  }
  
  $("button").on("click", function() {
      var id = $(this).attr("id");
      if(id == "A-M") {
          table(AtoM)
      } else if(id == "N-Z") {
          table(NtoZ)
      }
  })
  
  $("#search").on("keyup", function () {
    const value = $(this).val().toLowerCase();
    if(value){
        console.log("Value", value);
        $("#tablebody tr").filter(function () {
          const $charater_name = $(this)[0];
      
          if($charater_name.firstElementChild.textContent.toLowerCase().indexOf(value) > -1){
              console.log($charater_name.firstElementChild.textContent);
              $($charater_name).addClass("searched");
          } else {
              $($charater_name).removeClass("searched");
          }
        });
      } 
      else {
          $("#tablebody tr").removeClass("searched");
      }
  });