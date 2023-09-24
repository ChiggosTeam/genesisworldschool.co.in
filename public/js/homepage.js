class Homepage{
    constructor(returndata){
        this.showBlogData(returndata.blogdata);
    }
    showBlogData(blogdata){
        let blogdiv=document.getElementById("blogdiv");
        blogdiv.innerHTML="";
        if(blogdata.length==0){
            blogdiv.innerHTML="No Data Available";
        }
        for(let k=0;k<blogdata.length;k++){
            blogdiv.innerHTML=blogdiv.innerHTML+`<div class="container">
            <img class="image" src="${blogdata[k].image}" alt="Image">
            <h1 class="title">${blogdata[k].heading}</h1>
            <p class="subtitle">${blogdata[k].subheading}</p>
            <p>${blogdata[k].description}
            </p>
        </div>`;
        }

    }
}
let returndata=JSON.parse(data);
var obj_Homepage=new Homepage(returndata);