/*
    Assignment 05
*/

$(document).ready(function () {
   
 class ContentItem{
    ID;
    Hero_Name;
    Hero_Desicription;
    Hero_Hero_Category;

constructor(ID, Hero_Name, Hero_Desicription, Hero_Category){
        this.ID = ID;
        this.Hero_Name = Hero_Name;
        this.Hero_Desicription = Hero_Desicription;
        this.Hero_Category = Hero_Category;
        }

updateContentItem(ID, Hero_Name, Hero_Desicription, Hero_Category){
        if(this.ID == ID && Hero_Name && Hero_Desicription && Hero_Category){
            this.ID = ID;
            this.Hero_Name = Hero_Name;
            this.Hero_Desicription = Hero_Desicription;
            this.Hero_Category = Hero_Category;
            }

        }
        toString(){
        return $('#content-item-list').append(`<div class="content-item-wrapper">
        <div id="content-item-${this.ID}">
        <h4 class="Hero_Name">${this.Hero_Name}</h4>
        <p class="Hero_Desicription">${this.Hero_Desicription}</p>
        <div class="Hero_Category">${this.Hero_Category}</div>
        </div>
         </div>`);
        }
    }
    
    let content = [
    {
        "ID": 0,
        "Hero_Name": "Iron Man",
        "Hero_Desicription": "Iron Man is a superhero appearing in American comic books published by Marvel Comics. The character was co-created by writer and editor Stan Lee.",
        "Hero_Category": "Billionaire Philanthropist"
    },
    {
        "ID": 1,
        "Hero_Name": "SuperMan",
        "Hero_Desicription": "Superman is a superhero who appears in American comic books published by DC Comics. The character was created by writer Jerry Siegel and artist Joe Shuster",
        "Hero_Category": "Alien"
    },
    {
        "ID": 2,
        "Hero_Name": "Wonder Women",
        "Hero_Desicription": "Wonder Woman is a 2017 superhero film based on the DC Comics character of the same name. Produced by Warner Bros. Pictures, Atlas Entertainment and Cruel.",
        "Hero_Category": "Queen of Amazon"
    },
     {
        "ID": 3,
        "Hero_Name": "Monkey D. Luffy",
        "Hero_Desicription": "Monkey D. Luffy, also known as 'Straw Hat Luffy' and commonly as 'Straw Hat', is the main protagonist of the manga and anime, One Piece",
        "Hero_Category": "Nika Power Holder"
    },
    {
        "ID": 4,
        "Hero_Name": "Goku",
        "Hero_Desicription": "Originally as an infant Saiyan, Goku was very timid, constantly crying for attention. Goku was then programmed with intense hostility to carry out his mission.",
        "Hero_Category": "Super Saiyan"
    }
    ];
    $.each(content, function(key, val){
      $('#content-item-list').append(`<div class="content-item-wrapper" style="border:1px solid black; margin:0px 0px 15px 0px;padding: 15px 0px 18px 17px; ">
     <div id="content-item-${this.ID}">
     <h4 class="Hero_Name">${this.Hero_Name}</h4>
     <p class="Hero_Desicription">${this.Hero_Desicription}</p>
     <div class="Hero_Category">${this.Hero_Category}</div>
    </div>
    </div>`);
    });
   $('h2').empty().text("Hero List");

});


