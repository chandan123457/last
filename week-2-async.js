const fs=require("fs");
function suc(x){
    console.log(x);
}
function fai(y){
    console.log(y);
}
 function  setfilepro(){
        return new Promise(function resolve (resolve,reject){
            fs.readFile("a.txt","utf-8",function(err,data){
                if(err){
                    reject("cant read file ");
                }
                else {
                    resolve (data);
                }
            })

        })
 }

 setfilepro().then(suc).catch(fai);
