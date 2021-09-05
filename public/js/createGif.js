const createGifHandler = async (event) => {
    event.preventDefault();

    const textName = document.querySelector('#textName').value.trim();
    const file = document.querySelector('input[type=file]').files[0];

    if (textName && file) {
        var reader = new FileReader();
        reader.onloadend = function () {

            fileData = file;
            const data = new FormData();

            data.append('file', fileData);
            data.append('textName', textName);

            $.ajax({
                url: "/api/upload/creatingGifText",
                type: "POST",
                data: data,
                enctype: 'multipart/form-data',
                processData: false,
                contentType: false,
                success: function (data) {
                    console.log(`It worked!!`);
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
}

const downloadGif = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/upload/download', {
        method: "GET"
    });

    if (response.ok) {
        console.log("happy days")
        document.location.replace("/api/upload/download")
    } else {
        alert(response.statusText);
    }
    document.location.replace("/api/upload/");
}

document.querySelector('.download').addEventListener('click', downloadGif);

document
    .querySelector('.create-gif')
    .addEventListener('submit', createGifHandler);