import MasinaRipo from "../Ripo/masinaRipo.js";

export  default  class  MasinaService{
    constructor() {
        this.control  = new MasinaRipo();
    }

    SgetAll= async ()=>{
        try{
            let rez = await this.control.getAll();

            if(rez.length == 0){
                return  Promise.reject("empty array");
            }

            return rez;

        }catch(e){
            return  Promise.reject(e);
        }
    }

    Screate = async (obj)=>{
        try {
            if(obj.id == '' || obj.marca==''|| obj.an ==''|| obj.pret ==''){
                return Promise.reject('Empty inputs');
            }
            if(!obj || !obj.id || !obj.marca || !obj.an || !obj.pret){
                return Promise.reject('Invalid Properties');
            }
            if(typeof obj.id != "number"){
                return Promise.reject('ID must be a number!');
            }

            if(typeof obj.an != 'number' || typeof obj.pret != 'number'){
                if(typeof obj.an != 'number'){
                    return Promise.reject('An must be a number!');
                }
                if(typeof obj.pret != 'number'){
                    return Promise.reject('Pret must be a number!');
                }
            }

            let rez = await this.control.create(obj);
            return rez;

        }catch (e){
            return Promise.reject(e);
        }
    }

    Supdate = async (obj)=>{
        try {
            if(obj.id == '' || obj.marca ==''|| obj.an ==''|| obj.pret ==''){
                return Promise.reject('Empty inputs');
            }
            if(!obj || !obj.id || !obj.marca || !obj.an || !obj.pret){
                return Promise.reject('Invalid Properties');
            }
            if(typeof obj.id != "number"){
                return Promise.reject('ID must be a number!');
            }

            if(typeof obj.an != 'number' || typeof obj.pret != 'number'){
                if(typeof obj.an != 'number'){
                    return Promise.reject('An must be a number!');
                }
                if(typeof obj.pret != 'number'){
                    return Promise.reject('Pret must be a number!');
                }
            }

            let rez = await this.control.update(obj.id,obj);
            return rez;

        }catch (e){
            return Promise.reject(e);
        }
    }

    Sdelete = async(id)=>{
        try{
            if(!id){
                return Promise.reject('Invalid ID');
            }
            if(typeof id != 'number'){
                return Promise.reject('ID must be a number!');
            }

            let all = await this.SgetAll();
            let ok = 0;
            for(let p of all){
                if(id == p.id){
                    ok = 1;
                }
            }

            if(ok == 0){
                return Promise.reject('This ID is not in the datebase!');
            }

            let rez = await this.control.delete(id);
            return rez;

        }catch(e){
            return Promise.reject(e);
        }
    }



}