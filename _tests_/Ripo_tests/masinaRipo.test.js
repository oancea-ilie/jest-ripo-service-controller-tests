import MasinaRipo from "../../Ripo/masinaRipo.js";

let control = new MasinaRipo();

beforeEach(async()=>{
    await control.purge();
    let obj = {id: 1, marca:'test', an:1, pret: 1};
    await control.create(obj);
});

afterEach(async()=>{
    await control.purge();
})


describe('Teste Masina Ripo',()=>{

    test('Get all',async ()=>{
        await expect(control.getAll().then(data=>data.length)).resolves.toBeGreaterThan(0);
    });

    test('Create',async ()=>{
        let obj = {id: 99, marca:'test', an: 1, pret: 1};
        await control.create(obj);
        await expect(control.getAll().then(data=>data.length)).resolves.toBe(2);

    });

    test('Update',async ()=>{
        let newObj = {marca:'altceva', an: 2, pret:2 };

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