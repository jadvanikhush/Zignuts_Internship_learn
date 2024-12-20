//syntax of jquery
    //$("selector").action();
    console.log($);

    console.log("we are using jquery");

    //starting phase:

    // $("p").click();
    //you click on

    // $("p").click(function()
    // {
    //     console.log("you clicked on p");
    // });
    //do this when you click on p

    // $("p").click(function () {
    //   $("p").hide();
    // });
    //do this when you click on p

    // $("p").click(function () {
    //   $(this).hide();
    //   //je click kro e hide thay
    // });

    //perticular:
    // $(#id).click();
    // $(.class).click();

    //html late load thyo ne pela js load nan thay so :

    $(document).ready(function () {
      //all jquery code here:

      //minly three type of selector:
      //1. element selector
      //2. id selector: #id
      //3. class selector: .class

    //   $("p").click(function () {
    //     console.log("you clicked on p",this);
    //     //this give all html content:
    //   });

      //do this when you click on p
      //1. element selector
      // $("p").click(function())}

      //2. id selector
      // $("#sec").click();

      //3. class selector
      //$(".odd").click();

      //other selector:
    //   $("*").click ()
    //   $("p.odd").click();
    //   $("p#sec").click();
    //   $("p:first").click();

    //toggle:
    // $("#btn").click(function(){
    //     $(".box").toggle(1000);
    // })
    
    //fadeIN-to show in 1 sec
    // $("#btn").click(function(){
    //     $(".box").fadeIn(1000);
    // })

    //fadeOUT-to hide in 3 sec
    // $("#btn").click(function(){
    //     $(".box").fadeOut(1000);
    // })

    //fadetoggle-to hide in 3 sec
    $("#btn").click(function(){
        $(".box").fadeToggle(1000);
    })
    });