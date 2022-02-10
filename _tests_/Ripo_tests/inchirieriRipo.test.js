import InchiriereRipo from "../../Ripo/inchiriereRipo.js"

let control = new InchiriereRipo();

beforeEach(async()=>{
    await control.purge();
    let obj = {id: 1, masina_id:1 , persoana_id:1, perioada: 1};
    await control.create(obj);
});

afterEach(async()=>{
    await control.purge();
})


describe('Teste Inchirieri Ripo',()=>{

    test('Get all', async ()=>{
        await expect(control.getAll().then(data=>data.length)).resolves.toBeGreaterThan(0);
    });

    test('Create', async ()=>{
        let obj = {id: 99, masina_id:1 , persoana_id:1, perioada: 1};
        await control.create(obj);
        await expect(control.getAll().then(data=>data.length)).resolves.toBe(2);

    });

    test('Update', async ()=>{
        let newObj = {masina_id: 2 , persoana_id: 2, perioada: 2};

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