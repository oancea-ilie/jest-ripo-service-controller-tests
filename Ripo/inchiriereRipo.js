import  fs  from "fs"

export default  class InchiriereRipo{
    constructor(){
        this.list = [];
    }

    getAll=()=>{
        return new Promise((resolve,reject)=>{
            fs.readFile('./DB/inchiriereDB.json','utf8',(err,data)=>{
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
            return 'Nu exista Inchiriere cu acest id! ';
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
                    p.masina_id = newObj.masina_id;
                    p.persoana_id = newObj.persoana_id;
                    p.perioada = newObj.perioada;
                }
            }
        }else{
            console.log('Citirea din fisier nu a reusit !');
        }
    }

    purge= async()=>{
        this.list = [];
        await this.save(this.list);
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

            fs.writeFile('./DB/inchiriereDB.json',JSON.stringify(data,null,2),(err)=>{
                if(err){
                    reject(err);
                }else{
                    resolve();
                }
            })
        })
    }

}