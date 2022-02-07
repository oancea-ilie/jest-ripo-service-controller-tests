import MasinaRipo from "../Ripo/masinaRipo.js";

export  default  class  MasinaService{
    constructor() {
        this.control  = new MasinaRipo();

    }

    getAll= async ()=>{
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

    create = async (obj)=>{
        try {
            if(obj.id == '' || obj.marca==''|| obj.an ==''|| obj.pret ==''){
                return Promise.reject('Empty inputs');
            }
            if(typeof obj.id != "number"){
                return Promise.reject('ID must be a number!');
            }

            let rez = await this.control.create(obj);
            return Promise.resolve("success");

        }catch (e){
            return Promise.reject(e);
        }
    }

    update = async (obj)=>{
        try {
            if(obj.id == '' || obj.marca==''|| obj.an ==''|| obj.pret ==''){
                return Promise.reject('Empty inputs');
            }
            if(typeof obj.id != "number"){
                return Promise.reject('ID must be a number!');
            }

            let rez = await this.control.update(1,obj);
            return Promise.resolve("success");

        }catch (e){
            return Promise.reject(e);
        }
    }


}