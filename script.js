function sendemail(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    if (name!="" && email!="" && subject!="" && message!=""){
        window.open(
            "mailto:abdankribo@gmail.com" +
            "?cc=" +
            email +
            "&subject=" +
            subject +
            "&body=" +
            message
        );
    }
}