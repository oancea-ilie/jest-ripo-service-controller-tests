import  fs  from "fs"

export default  class MasinaRipo{
    constructor(){
        this.list = [];
    }

    getAll=()=>{
        return new Promise((resolve,reject)=>{

            fs.readFile('./DB/masinaDB.json','utf8',(err,data)=>{
                if(err){
                    reject(err);
                }else{

                    const json=JSON.parse(data);
                    resolve(json);
                }
            });


        })
    }

    create= async(obj)=>{
        let arr = await this.getAll();

        if(arr){
            arr.push(obj);

            await this.save(arr);

        }else{
            console.log('Citirea din fisier nu a reusit !');
        }
    }

    update=async(id, newObj)=>{
        let arr = await this.getAll();

        if(arr){
            for(let p  of arr){
                if(p.id == id){
                    p.marca = newObj.marca;
                    p.an = newObj.an;
                    p.pret = newObj.pret;

                }
            }

            await this.save(arr);
        }else{
            console.log('Citirea din fisier nu a reusit !');
        }
    }

    delete = async(id)=>{
        let arr = await this.getAll();

        if(arr){
            for(let p  of arr){
                if(p.id == id){
                    let filter = arr.filter((e)=> e.id != id);
                    await this.save(filter);
                }
            }
        }else{
            console.log('Citirea din fisier nu a reusit !');
        }
    }

    display = async()=>{
        let arr = await this.getAll();

        if(arr){
            for(let p  of arr){
                console.log(p);
            }
        }else{
            console.log('Citirea din fisier nu a reusit !');
        }
    }

    save=(data)=>{

        return new Promise((resolve,reject)=>{

            fs.writeFile('./DB/masinaDB.json',JSON.stringify(data,null,2),(err)=>{
                if(err){
                    reject(err);
                }else{
                    resolve();
                }
            })
        })
    }

}