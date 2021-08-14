function SubForm() {
    $.ajax({
        url: 'https://api.apispreadsheets.com/data/16902/',
        type: 'post',
        data: $("#myForm").serializeArray(),
        success: function () {
            alert("Form Data Submitted :)");
            location.reload();
        },
        error: function () {
            alert("There was an error :(")
        }
    });
}

