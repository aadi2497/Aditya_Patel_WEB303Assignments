$(function()
{
    getDataByAjax();
});

function getJsonData()
{
    $.getJSON("team.json", (result)=>
    {
        $.each(result, (index, data)=>
        {
            $("div#team").append(`<h2>${data.name}</h2>
                                  <h5>${data.position}</h5>
                                  <p>${data.bio}</p>`);
        });
    });
};

function getDataByAjax(){
    $.ajax
    ({
        url: "team.json",
        beforeSend: function()
        {
            $("div#team").html(`<h1>Loading...</h1>`);
        },
        error: function(){
            $("div#team").html(`<h1>The content could not be retrieved</h1>`);
        },
        success: function(result)
        {
            setTimeout(() => 
            {
                $("div#team").html("");
                $.each(result, (index, data)=>
                {
                    $("div#team").append(`<h2>${data.name}</h2><h5>${data.position}</h5><p>${data.bio}</p>`);
                });
            }, 3000);
        }
    });
};