import InchiriereService from "../Services/inchiriereService.js";

export default  class InchiriereController{
    constructor() {
        this.list = [];
        this.control = new InchiriereService();

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