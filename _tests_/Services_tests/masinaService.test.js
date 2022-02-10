import MasinaService from "../../Services/masinaService.js";
import MasinaRipo from "../../Ripo/masinaRipo.js";


jest.mock('../../Ripo/masinaRipo.js');

describe('Testare Masina Service',()=>{
    describe('SGet All',()=>{
        test('Get All success',async()=>{
            MasinaRipo.mockImplementation(()=>{
                
                return{
                    getAll:()=>{
                        return Promise.resolve('success');
                    }
                }
    
            });
            let service = new MasinaService();
            await expect(service.SgetAll()).resolves.toMatch("success");
        });
    
        test('Get All fail Length',async()=>{
            MasinaRipo.mockImplementation(()=>{
                
                return{
                    getAll:()=>{
                        return Promise.resolve('');
                    }
                }
    
            });
            let service = new MasinaService();
            await expect(service.SgetAll()).rejects.toMatch("empty array");
        });
    
        test('Get All fail Error',async()=>{
            MasinaRipo.mockImplementation(()=>{
                
                return{
                    getAll:()=>{
                        return Promise.reject('fail');
                    }
                }
    
            });
            let service = new MasinaService();
            await expect(service.SgetAll()).rejects.toMatch("fail");
        });
    });

    describe('Screate',()=>{
        test('Create success', async()=>{

            MasinaRipo.mockImplementation(()=>{
                return{
                    create:()=>{
                        return Promise.resolve('success');
                    }
                }
            })
            let obj = {id: 1,marca:'test',an:1,pret:1};
            let service = new MasinaService();
            await expect(service.Screate(obj)).resolves.toMatch("success");
        });

        test('Create fail Invalid Properties', async()=>{
            MasinaRipo.mockImplementation(()=>{
                return{
                    create:()=>{
                        return Promise.resolve('success');
                    }
                }
            })
            let obj = {};
            let service = new MasinaService();
            await expect(service.Screate(obj)).rejects.toMatch("Invalid Properties");
            
        });

        test('Create fail Empty inputs', async()=>{
            MasinaRipo.mockImplementation(()=>{
                return{
                    create:()=>{
                        return Promise.resolve('success');
                    }
                }
            })
            let obj = {id: '',marca:'test',an:1,pret:1};
            let service = new MasinaService();
            await expect(service.Screate(obj)).rejects.toMatch("Empty inputs");
            
        });

        test('Create fail ID', async()=>{

            MasinaRipo.mockImplementation(()=>{
                return{
                    create:()=>{
                        return Promise.resolve('success');
                    }
                }
            })
            let obj = {id: '1',marca:'test',an:1,pret:1};
            let service = new MasinaService();
            await expect(service.Screate(obj)).rejects.toMatch("ID must be a number!");

        });

        test('Create fail | an not a number', async()=>{

            MasinaRipo.mockImplementation(()=>{
                return{
                    create:()=>{
                        return Promise.resolve('success');
                    }
                }
            })
            let obj = {id: 1,marca:'test',an:'1',pret:1};
            let service = new MasinaService();
            await expect(service.Screate(obj)).rejects.toMatch("An must be a number!");

        });

        test('Create fail | pret not a number', async()=>{

            MasinaRipo.mockImplementation(()=>{
                return{
                    create:()=>{
                        return Promise.resolve('success');
                    }
                }
            })
            let obj = {id: 1,marca:'test',an:1,pret:'1'};
            let service = new MasinaService();
            await expect(service.Screate(obj)).rejects.toMatch("Pret must be a number!");

        });

        test('Create fail', async()=>{
            MasinaRipo.mockImplementation(()=>{
                return{
                    create:()=>{
                        return Promise.reject('fail');
                    }
                }
            });
            let obj = {id: 1,marca:'test',an:1,pret:1};
            let service = new MasinaService();
            await expect(service.Screate(obj)).rejects.toMatch("fail");

        });
    });

    describe('Supdate',()=>{
        test("Update success",async()=>{
            MasinaRipo.mockImplementation(()=>{
                return{
                    update:()=>{
                        return Promise.resolve('success');
                    }
                }
            });

            let obj = {id:1, marca: 'test', an:1, pret: 1};
            let service = new MasinaService();
            await expect(service.Supdate(obj)).resolves.toMatch('success');
        });

        test("Update fail | Invalid Properties ",async()=>{
            MasinaRipo.mockImplementation(()=>{
                return{
                    update:()=>{
                        return Promise.resolve('');
                    }
                }
            });

            let obj = {};
            let service = new MasinaService();
            await expect(service.Supdate(obj)).rejects.toMatch('Invalid Properties');
        });

        test("Update fail | Empty inputs",async()=>{
            MasinaRipo.mockImplementation(()=>{
                return{
                    update:()=>{
                        return Promise.resolve('');
                    }
                }
            });

            let obj = {id:'',marca: 'test', an:1, pret: 1};
            let service = new MasinaService();
            await expect(service.Supdate(obj)).rejects.toMatch('Empty inputs');
        });

        test("Update fail | ID must be a number!",async()=>{
            MasinaRipo.mockImplementation(()=>{
                return{
                    update:()=>{
                        return Promise.resolve('');
                    }
                }
            });

            let obj = {id:'1',marca: 'test', an:1, pret: 1};
            let service = new MasinaService();
            await expect(service.Supdate(obj)).rejects.toMatch('ID must be a number!');
        });

        test("Update fail | An not a number",async()=>{
            MasinaRipo.mockImplementation(()=>{
                return{
                    update:()=>{
                        return Promise.resolve('');
                    }
                }
            });

            let obj = {id:1, marca: 'test', an:'1', pret: 1};
            let service = new MasinaService();
            await expect(service.Supdate(obj)).rejects.toMatch('An must be a number!');
        });

        test("Update fail | Pret not a number",async()=>{
            MasinaRipo.mockImplementation(()=>{
                return{
                    update:()=>{
                        return Promise.resolve('');
                    }
                }
            });

            let obj = {id:1, marca: 'test', an:1, pret: '1'};
            let service = new MasinaService();
            await expect(service.Supdate(obj)).rejects.toMatch('Pret must be a number!');
        });

        test("Update fail",async()=>{
            MasinaRipo.mockImplementation(()=>{
                return{
                    update:()=>{
                        return Promise.reject('fail');
                    }
                }
            });

            let obj = {id:1,marca: 'test', an:1, pret: 1};
            let service = new MasinaService();
            await expect(service.Supdate(obj)).rejects.toMatch('fail');
        });

    });

    describe('Sdelete', ()=>{
        test('Delete success',async()=>{
            MasinaRipo.mockImplementation(()=>{
                return {
                    delete:()=>{
                        return Promise.resolve('success');
                    },
                    getAll:()=>{
                        return Promise.resolve([{id:1,marca: 'test', an:1, pret: 1}]);
                    }
                }
            });

            let service = new MasinaService();
            await expect(service.Sdelete(1)).resolves.toMatch('success');
        });

        test('Delete fail | Empty ID',async()=>{
            MasinaRipo.mockImplementation(()=>{
                return {
                    delete:()=>{
                        return Promise.resolve('success');
                    },
                    getAll:()=>{
                        return Promise.resolve([{id:1,marca: 'test', an:1, pret: 1}]);
                    }
                }
            });

            let service = new MasinaService();
            await expect(service.Sdelete()).rejects.toMatch('Invalid ID');
        });

        test('Delete fail | ID must be a number',async()=>{
            MasinaRipo.mockImplementation(()=>{
                return {
                    delete:()=>{
                        return Promise.resolve('success');
                    },
                    getAll:()=>{
                        return Promise.resolve([{id:1,marca: 'test', an:1, pret: 1}]);
                    }
                }
            });

            let service = new MasinaService();
            await expect(service.Sdelete('ceva')).rejects.toMatch('ID must be a number!');
        });

        test('Delete fail | ID not in database',async()=>{
            MasinaRipo.mockImplementation(()=>{
                return {
                    delete:()=>{
                        return Promise.resolve('success');
                    },
                    getAll:()=>{
                        return Promise.resolve([{id:2,marca: 'test', an:1, pret: 1}]);
                    }
                }
            });

            let service = new MasinaService();
            await expect(service.Sdelete(1)).rejects.toMatch('This ID is not in the datebase!');
        });


    });

});
