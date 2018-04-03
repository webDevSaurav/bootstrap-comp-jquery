$(document).ready(()=>{//when document is ready
    $("a").click(function(e){ //click on the a
        //remove the default behaivour of the a tag
        e.preventDefault();
        //Toggle the content of the clicked item's content
        $(this).parent().next().slideToggle("fast");
        //hide the content of all other content
        $(this).parent().parent().siblings().children(".item-content").slideUp();
    })
});