
class LogIn {
    constructor() {
        document.getElementById('loginbtn').addEventListener('click', () => {
            this.logIn();
        });
        document.addEventListener("keyup", function(event) {
            if (event.keyCode === 13) {
                obj_LogIn.logIn();
            }
        });
    }
    async logIn() {
        let userid = document.getElementById("userid");
        let password = document.getElementById("password");
        let formdata = new FormData();
        formdata.append("userid", userid.value);
        formdata.append("password", password.value);
        let options = {
            method: 'POST',
            headers: new Headers(),
            body: formdata
        }
        
        let data = `Id=${window.btoa(userid.value)}+p=${window.btoa(password.value)}`
        
        try {
            let reference = fetch("/loginscreen", options);
            (await reference).json().then((e) => {
                if (e.status.length > 0) {
                    window.location.href=`/admininsertionpage?${data}`;
                }
                else {
                    alert("you Are Not Valid User");
                   
                }
            });
        }
        catch (e) {
        }
    }
}
var obj_LogIn = new LogIn();