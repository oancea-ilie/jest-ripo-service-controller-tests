import PersoanaRipo from "../../Ripo/persoanaRipo.js";

let control= new PersoanaRipo();

beforeEach(async()=>{
    await control.purge();
    let obj = {id: 1, name:'test', passwrod:'testP'};
    await control.create(obj);
});

afterEach(async()=>{
    await control.purge();
})

describe('Teste Persoana Ripo',()=>{

    test('Get all',async ()=>{
        await expect(control.getAll().then(data=>data.length)).resolves.toBeGreaterThan(0);
    });

    test('Create',async ()=>{

        let obj = {id: 99, name:'ceva', passwrod:'1234'};
        await control.create(obj);
        await expect(control.getAll().then(data=>data.length)).resolves.toBe(2);

    });

    test('Update',async ()=>{

        let newObj = {name:'altceva',password:'1234'};

        await control.update(1, newObj);

        let rez = await control.getById(1);
        expect(rez.name).toBe(newObj.name);
        expect(rez.password).toBe(newObj.password);

    });

    test('Delete',async ()=>{

        await control.delete(1);
        await expect(control.getAll().then(d=>d.length)).resolves.toBe(0);
    });

});