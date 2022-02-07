import PersoanaService from "../../Services/persoanaService.js";
import PersoanaRipo from "../../Ripo/persoanaRipo.js";

// daca nu am nimic in baza de date, cum as putea adauga ceva inainte sa se faca run la testari
// pentru ca daca aplic functia create din Ripo nu o vede doarece este mockuita.
// daca incerc s-o mocuiesc in asa fel incat sa-mi adauge ce am nevoie, nu-mi dau peste cap
// functia de mock create implementata mai jos?

jest.mock('../../Ripo/persoanaRipo.js');
describe('Testare Persoana Service',()=>{
    describe('SGet All',()=>{
        test('Get All success',async()=>{
            PersoanaRipo.mockImplementation(()=>{
                
                return{
                    getAll:()=>{
                        return Promise.resolve('success');
                    }
                }
    
            });
            let service = new PersoanaService();
            await expect(service.SgetAll()).resolves.toMatch("success");
        });
    
        test('Get All fail Length',async()=>{
            PersoanaRipo.mockImplementation(()=>{
                
                return{
                    getAll:()=>{
                        return Promise.resolve('');
                    }
                }
    
            });
            let service = new PersoanaService();
            await expect(service.SgetAll()).rejects.toMatch("empty array");
        });
    
        test('Get All fail Error',async()=>{
            PersoanaRipo.mockImplementation(()=>{
                
                return{
                    getAll:()=>{
                        return Promise.reject('fail');
                    }
                }
    
            });
            let service = new PersoanaService();
            await expect(service.SgetAll()).rejects.toMatch("fail");
        });
    });

    describe('Screate',()=>{
        test('Create success', async()=>{

            PersoanaRipo.mockImplementation(()=>{
                return{
                    create:()=>{
                        return Promise.resolve('success');
                    }
                }
            })
            let obj = {id: 1,name:'test',password:'test'};
            let service = new PersoanaService();
            await expect(service.Screate(obj)).resolves.toMatch("success");
        });

        test('Create fail Invalid Properties', async()=>{

            PersoanaRipo.mockImplementation(()=>{
                return{
                    create:()=>{
                        return Promise.resolve('success');
                    }
                }
            })
            let obj = {};
            let service = new PersoanaService();
            await expect(service.Screate(obj)).rejects.toMatch("Invalid Properties");
            
        });

        test('Create fail Empty inputs', async()=>{

            PersoanaRipo.mockImplementation(()=>{
                return{
                    create:()=>{
                        return Promise.resolve('success');
                    }
                }
            })
            let obj = {id: '',name:'test',password:'test'};
            let service = new PersoanaService();
            await expect(service.Screate(obj)).rejects.toMatch("Empty inputs");
            
        });

        test('Create fail ID', async()=>{

            PersoanaRipo.mockImplementation(()=>{
                return{
                    create:()=>{
                        return Promise.resolve('success');
                    }
                }
            })
            let obj = {id: '1',name:'test',password:'test'};
            let service = new PersoanaService();
            await expect(service.Screate(obj)).rejects.toMatch("ID must be a number!");

        });

        test('Create fail', async()=>{

            PersoanaRipo.mockImplementation(()=>{
                return{
                    create:()=>{
                        return Promise.reject('fail');
                    }
                }
            })
            let obj = {id: 1,name:'test',password:'test'};
            let service = new PersoanaService();
            await expect(service.Screate(obj)).rejects.toMatch("fail");

        });
    });

    describe('Supdate',()=>{
        test("Update success",async()=>{
            PersoanaRipo.mockImplementation(()=>{
                return{
                    update:()=>{
                        return Promise.resolve('success');
                    }
                }
            });

            let obj = {id:1, name: 'test', password:'1234'};
            let service = new PersoanaService();
            await expect(service.Supdate(obj)).resolves.toMatch('success');
        });

        test("Update fail | Invalid Properties ",async()=>{
            PersoanaRipo.mockImplementation(()=>{
                return{
                    update:()=>{
                        return Promise.resolve('');
                    }
                }
            });

            let obj = {};
            let service = new PersoanaService();
            await expect(service.Supdate(obj)).rejects.toMatch('Invalid Properties');
        });

        test("Update fail | Empty inputs",async()=>{
            PersoanaRipo.mockImplementation(()=>{
                return{
                    update:()=>{
                        return Promise.resolve('');
                    }
                }
            });

            let obj = {id:'',name:'test',password:'test'};
            let service = new PersoanaService();
            await expect(service.Supdate(obj)).rejects.toMatch('Empty inputs');
        });

        test("Update fail | ID must be a number!",async()=>{
            PersoanaRipo.mockImplementation(()=>{
                return{
                    update:()=>{
                        return Promise.resolve('');
                    }
                }
            });

            let obj = {id:'1',name:'test',password:'test'};
            let service = new PersoanaService();
            await expect(service.Supdate(obj)).rejects.toMatch('ID must be a number!');
        });

        test("Update fail",async()=>{
            PersoanaRipo.mockImplementation(()=>{
                return{
                    update:()=>{
                        return Promise.reject('fail');
                    }
                }
            });

            let obj = {id:1,name:'test',password:'test'};
            let service = new PersoanaService();
            await expect(service.Supdate(obj)).rejects.toMatch('fail');
        });

    });

    describe('Sdelete', ()=>{
        test('Delete success',async()=>{
            PersoanaRipo.mockImplementation(()=>{
                return {
                    delete:()=>{
                        return Promise.resolve('success');
                    },
                    getAll:()=>{
                        return Promise.resolve([{id:1,name:'test',password:'test'}]);
                    }
                }
            });

            let service = new PersoanaService();
            await expect(service.Sdelete(1)).resolves.toMatch('success');
        });

        test('Delete fail | Empty ID',async()=>{
            PersoanaRipo.mockImplementation(()=>{
                return {
                    delete:()=>{
                        return Promise.resolve('success');
                    },
                    getAll:()=>{
                        return Promise.resolve([{id:1,name:'test',password:'test'}]);
                    }
                }
            });

            let service = new PersoanaService();
            await expect(service.Sdelete()).rejects.toMatch('Invalid ID');
        });

        test('Delete fail | ID must be a number',async()=>{
            PersoanaRipo.mockImplementation(()=>{
                return {
                    delete:()=>{
                        return Promise.resolve('success');
                    },
                    getAll:()=>{
                        return Promise.resolve([{id:1,name:'test',password:'test'}]);
                    }
                }
            });

            let service = new PersoanaService();
            await expect(service.Sdelete('ceva')).rejects.toMatch('ID must be a number!');
        });

        test('Delete fail | ID not in database',async()=>{
            PersoanaRipo.mockImplementation(()=>{
                return {
                    delete:()=>{
                        return Promise.resolve('success');
                    },
                    getAll:()=>{
                        return Promise.resolve([{id:2,name:'test',password:'test'}]);
                    }
                }
            });

            let service = new PersoanaService();
            await expect(service.Sdelete(1)).rejects.toMatch('This ID is not in the datebase!');
        });


    });

});
