import MasinaService from "../Services/masinaService.js";

export default  class MasinaController{
    constructor() {
        this.list = [];
        this.control = new MasinaService();

    }

    populate =async()=>{
        try {
            this.list = await this.control.getAll();

            return "am reusit";
        }
        catch(e){

            return  "Eroare de server";
        }
    }
}