import InchiriereRipo from "../Ripo/inchiriereRipo.js";

export  default  class  InchiriereService{
    constructor() {
        this.control  = new InchiriereRipo();

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
            if(obj.id == '' || obj.masina_id==''|| obj.persoana_id ==''|| obj.perioada ==''){
                return Promise.reject('Empty inputs');
            }
            if(!obj || !obj.id || !obj.masina_id || !obj.persoana_id || !obj.masina_id){
                return Promise.reject('Invalid Properties');
            }
            if(typeof obj.id != "number"){
                return Promise.reject('ID must be a number!');
            }

            if(typeof obj.masina_id != 'number' || typeof obj.masina_id != 'number' || typeof obj.persoana_id !='number'
            || typeof obj.perioada !='number'){
                if(typeof obj.masina_id != 'number'){
                    return Promise.reject('Masina ID must be a number!');
                }
                if(typeof obj.persoana_id != 'number'){
                    return Promise.reject('Persoana ID must be a number!');
                }
                if(typeof obj.perioada != 'number'){
                    return Promise.reject('Perioada Must be a number!');
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
            if(obj.id == '' || obj.masina_id==''|| obj.persoana_id ==''|| obj.perioada ==''){
                return Promise.reject('Empty inputs');
            }
            if(!obj || !obj.id || !obj.masina_id || !obj.persoana_id || !obj.masina_id){
                return Promise.reject('Invalid Properties');
            }
            if(typeof obj.id != "number"){
                return Promise.reject('ID must be a number!');
            }

            if(typeof obj.masina_id != 'number' || typeof obj.masina_id != 'number' || typeof obj.persoana_id !='number'
            || typeof obj.perioada !='number'){
                if(typeof obj.masina_id != 'number'){
                    return Promise.reject('Masina ID must be a number!');
                }
                if(typeof obj.persoana_id != 'number'){
                    return Promise.reject('Persoana ID must be a number!');
                }
                if(typeof obj.perioada != 'number'){
                    return Promise.reject('Perioada Must be a number!');
                }
                
            }


            let rez = await this.control.update(1,obj);
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