import PersoanaService from "../Services/persoanaService.js";

export default  class PersoanaController{
    constructor() {
        this.list = [];
        this.control = new PersoanaService();

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