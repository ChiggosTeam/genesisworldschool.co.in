class AdminInsertionPage{
    constructor(){
        this.data={}
        document.getElementById("imagecontainer").addEventListener("click",()=>{
            this.ChooseImage();
        });
        document.getElementById("uploadbtn").addEventListener("click",()=>{
            this.uploadData();
        });
    }
    async uploadData(){
        this.data["heading"]=document.getElementById("heading").value;
        this.data["subheading"]=document.getElementById("subheading").value;
        this.data["link"]=document.getElementById("link").value;
        this.data["description"]=document.getElementById("description").value;
        this.data["Id"]=new Date().getTime();
        let formdata = new FormData();
        let stringfydata = JSON.stringify(this.data).replaceAll("`", "").replaceAll("'", "").replaceAll(".\n","");
        formdata.append("datalist",stringfydata);
        let options = {
            method: 'POST',
            headers: new Headers(),
            body: formdata
        }
        try {
            let reference = fetch("/admininsertionpage", options);
            (await reference).json().then((e) => {
                if (e.status == "saved") {
                    console.log(e.status);
                }
                else {
                    console.log(e.status);
                }
            });
        }
        catch (e) {
            console.log(e.message);
        }
    }
    ChooseImage() {
        let file = document.createElement("input");
        file.type = "file";
        file.click();
        let allowedExtension = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/bmp', 'image/webp'];
        file.addEventListener("change", (event) => {
            if (file.files && file.files[0]) {
                let filetype = file.files[0].type;
                if (allowedExtension.indexOf(filetype) > -1) {          
                        let canvas = document.createElement("canvas");
                        let ctx = canvas.getContext("2d");
                        let userimage = new Image();
                        userimage.src = URL.createObjectURL(event.target.files[0]);
                        userimage.onload = function () {
                            canvas.width = userimage.width;
                            canvas.height = userimage.height;
                            ctx.drawImage(userimage, 0, 0);
                            let webpimage = canvas.toDataURL("image/webp");
                            document.getElementById("imagecontainer").style.backgroundImage=`url(${webpimage})`
                            Obj_AdminInsertionPage.data["image"]=webpimage;
                        }
                }
                else {
                    alert("This Is Not Image");
                }
            }
        });
    }
    
}
var Obj_AdminInsertionPage=new AdminInsertionPage();