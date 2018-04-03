$(document).ready(()=>{
    //opens the modal
    $("a").click(function(e){
        e.preventDefault();
        $(".modal-container").fadeIn("fast");
    });
    //closes the modal on clicking close button
    $(".close-modal").click(()=>{
        $(".modal-container").fadeOut("fast");
    });
    //closes the modal on clicking anywhere outside the modal dialog
    $(".modal-container").click(function(e){
        //checks where we had clicked
        if(e.target.className == "modal-container"){
            $(".modal-container").fadeOut("fast");
        }
    });
});