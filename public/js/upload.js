const uploadGifHandler = async (event) => {
    event.preventDefault();

    const gifName = document.querySelector('#gifName').value.trim();
    const file = document.querySelector('input[type=file]').files[0];

    if (gifName && file) {
        var reader = new FileReader();
        reader.onloadend = function () {

            fileData = file;
            const data = new FormData();

            data.append('file', fileData);
            data.append('name', gifName);

            $.ajax({
                url: "/api/upload/uploadGif",
                type: "POST",
                data: data,
                enctype: 'multipart/form-data',
                processData: false,
                contentType: false,
                success: function (data) {
                    console.log(`It worked!!`);
                    document.location.reload();
                },
                error: function (e) {
                    console.log(`Alas, it failed...`);
                }
            });
        }
        if (file) {
            reader.readAsDataURL(file);
        }
        

    } else {
        alert("Needs to fill in both!");
    }
    document.location.replace("/home");
}

document
    .querySelector('.upload-gif')
    .addEventListener('submit', uploadGifHandler);