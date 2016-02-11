$('#contact').submit(function(event){
    event.preventDefault();
    
    var rawData = {
        firstName: $('#username').val(),
        lastName: $('#password').val(),
        age: $('#age').val(),
        refer_page: $('#refer_page').val()
    };
    
    var contactData = JSON.stringify(rawData);
    
    //console.log(contactData);
    
    var url = 'http://192.168.1.10';
    
    $.post(url, function(response) {
        //console.log(response);
        
        if (response === ["success"]) {
            // show user a succesfully posted message.
        } else {
            conosole.log(response);
        }
    });
    
});
