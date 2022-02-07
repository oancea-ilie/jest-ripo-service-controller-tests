import  fs  from "fs"

export default  class PersoanaRipo{
    constructor(){
        this.list = [];
    }

    getAll=()=>{
        return new Promise((resolve,reject)=>{
            fs.readFile('./DB/persoanaDB.json','utf8',(err,data)=>{
                if(err){
                    reject(err);
                }else{

                    const json=JSON.parse(data);
                    resolve(json);
                }
            })


        })
    }

    getById= async(id)=>{
        let all = await this.getAll();
        if(all){
            for(let p of all){
                if(p.id == id){
                    return p;
                }
            }

            return 'Nu exista persoana cu acest id! ';
        }
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
                    p.name = newObj.name;
                    p.password = newObj.password;
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

    purge= async()=>{
        this.list = [];
        await this.save(this.list);
    }

    save=(data)=>{
        return new Promise((resolve,reject)=>{

            fs.writeFile('./DB/persoanaDB.json',JSON.stringify(data,null,2),(err)=>{
                if(err){
                    reject(err);
                }else{
                    resolve();
                }
            })
        })
    }

}