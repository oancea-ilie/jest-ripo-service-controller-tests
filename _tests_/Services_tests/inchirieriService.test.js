import InchiriereService from "../../Services/inchiriereService.js";
import InchiriereRipo from "../../Ripo/inchiriereRipo.js";


jest.mock('../../Ripo/inchiriereRipo.js');

describe('Testare Inchiriere Service',()=>{
    describe('SGet All',()=>{
        test('Get All success',async()=>{
            InchiriereRipo.mockImplementation(()=>{
                return{
                    getAll:()=>{
                        return Promise.resolve('success');
                    }
                }
    
            });
            let service = new InchiriereService();
            await expect(service.SgetAll()).resolves.toMatch("success");
        });
    
        test('Get All fail Length',async()=>{
            InchiriereRipo.mockImplementation(()=>{
                
                return{
                    getAll:()=>{
                        return Promise.resolve('');
                    }
                }
    
            });
            let service = new InchiriereService();
            await expect(service.SgetAll()).rejects.toMatch("empty array");
        });
    
        test('Get All fail Error',async()=>{
            InchiriereRipo.mockImplementation(()=>{
                
                return{
                    getAll:()=>{
                        return Promise.reject('fail');
                    }
                }
    
            });
            let service = new InchiriereService();
            await expect(service.SgetAll()).rejects.toMatch("fail");
        });
    });

    describe('Screate',()=>{
        test('Create success', async()=>{
            InchiriereRipo.mockImplementation(()=>{
                return{
                    create:()=>{
                        return Promise.resolve('success');
                    }
                }
            })
            let obj = {id: 1, masina_id: 1,persoana_id: 1, perioada: 1};
            let service = new InchiriereService();
            await expect(service.Screate(obj)).resolves.toMatch("success");
        });

        test('Create fail Invalid Properties', async()=>{
            InchiriereRipo.mockImplementation(()=>{
                return{
                    create:()=>{
                        return Promise.resolve('success');
                    }
                }
            })
            let obj = {};
            let service = new InchiriereService();
            await expect(service.Screate(obj)).rejects.toMatch("Invalid Properties");
            
        });

        test('Create fail Empty inputs', async()=>{
            InchiriereRipo.mockImplementation(()=>{
                return{
                    create:()=>{
                        return Promise.resolve('success');
                    }
                }
            })
            let obj = {id: '', masina_id: 1,persoana_id: 1, perioada: 1};
            let service = new InchiriereService();
            await expect(service.Screate(obj)).rejects.toMatch("Empty inputs");
            
        });
        test('Create fail | masina_id not a number', async()=>{
            InchiriereRipo.mockImplementation(()=>{
                return{
                    create:()=>{
                        return Promise.resolve('success');
                    }
                }
            })
            let obj = {id: 1, masina_id: '1',persoana_id: 1, perioada: 1};
            let service = new InchiriereService();
            await expect(service.Screate(obj)).rejects.toMatch("Masina ID must be a number!");
            
        });

        test('Create fail | persoana_id not a number', async()=>{
            InchiriereRipo.mockImplementation(()=>{
                return{
                    create:()=>{
                        return Promise.resolve('success');
                    }
                }
            })
            let obj = {id: 1, masina_id: 1,persoana_id: '1', perioada: 1};
            let service = new InchiriereService();
            await expect(service.Screate(obj)).rejects.toMatch("Persoana ID must be a number!");
            
        });

        test('Create fail | perioada not a number', async()=>{
            InchiriereRipo.mockImplementation(()=>{
                return{
                    create:()=>{
                        return Promise.resolve('success');
                    }
                }
            })
            let obj = {id: 1, masina_id: 1,persoana_id: 1, perioada: '1'};
            let service = new InchiriereService();
            await expect(service.Screate(obj)).rejects.toMatch("Perioada Must be a number!");
            
        });

        test('Create fail ID', async()=>{

            InchiriereRipo.mockImplementation(()=>{
                return{
                    create:()=>{
                        return Promise.resolve('success');
                    }
                }
            })
            let obj = {id: '1', masina_id: 1, persoana_id: 1, perioada: 1};
            let service = new InchiriereService();
            await expect(service.Screate(obj)).rejects.toMatch("ID must be a number!");

        });

        test('Create fail', async()=>{
            InchiriereRipo.mockImplementation(()=>{
                return{
                    create:()=>{
                        return Promise.reject('fail');
                    }
                }
            });
            let obj = {id: 1, masina_id: 1, persoana_id: 1, perioada: 1};
            let service = new InchiriereService();
            await expect(service.Screate(obj)).rejects.toMatch("fail");

        });
    });

    describe('Supdate',()=>{
        test("Update success",async()=>{
            InchiriereRipo.mockImplementation(()=>{
                return{
                    update:()=>{
                        return Promise.resolve('success');
                    }
                }
            });

            let obj = {id:1, masina_id: 1,persoana_id: 1, perioada: 1};
            let service = new InchiriereService();
            await expect(service.Supdate(obj)).resolves.toMatch('success');
        });

        test("Update fail | Invalid Properties ",async()=>{
            InchiriereRipo.mockImplementation(()=>{
                return{
                    update:()=>{
                        return Promise.resolve('');
                    }
                }
            });

            let obj = {};
            let service = new InchiriereService();
            await expect(service.Supdate(obj)).rejects.toMatch('Invalid Properties');
        });

        test("Update fail | Empty inputs",async()=>{
            InchiriereRipo.mockImplementation(()=>{
                return{
                    update:()=>{
                        return Promise.resolve('');
                    }
                }
            });

            let obj = {id:'',masina_id: 1,persoana_id: 1, perioada: 1};
            let service = new InchiriereService();
            await expect(service.Supdate(obj)).rejects.toMatch('Empty inputs');
        });

        test("Update fail | ID must be a number!",async()=>{
            InchiriereRipo.mockImplementation(()=>{
                return{
                    update:()=>{
                        return Promise.resolve('');
                    }
                }
            });

            let obj = {id:'1',masina_id: 1,persoana_id: 1, perioada: 1};
            let service = new InchiriereService();
            await expect(service.Supdate(obj)).rejects.toMatch('ID must be a number!');
        });

        test('Update fail | masina_id not a number', async()=>{
            InchiriereRipo.mockImplementation(()=>{
                return{
                    update:()=>{
                        return Promise.resolve('success');
                    }
                }
            })
            let obj = {id: 1, masina_id: '1',persoana_id: 1, perioada: 1};
            let service = new InchiriereService();
            await expect(service.Supdate(obj)).rejects.toMatch('Masina ID must be a number!');
            
        });

        test('Update fail | persoana_id not a number', async()=>{
            InchiriereRipo.mockImplementation(()=>{
                return{
                    update:()=>{
                        return Promise.resolve('success');
                    }
                }
            })
            let obj = {id: 1, masina_id: 1,persoana_id: '1', perioada: 1};
            let service = new InchiriereService();
            await expect(service.Supdate(obj)).rejects.toMatch('Persoana ID must be a number!');
            
        });

        test('Update fail | perioada not a number', async()=>{
            InchiriereRipo.mockImplementation(()=>{
                return{
                    update:()=>{
                        return Promise.resolve('success');
                    }
                }
            })
            let obj = {id: 1, masina_id: 1,persoana_id: 1, perioada: '1'};
            let service = new InchiriereService();
            await expect(service.Supdate(obj)).rejects.toMatch('Perioada Must be a number!');
            
        });

        test("Update fail",async()=>{
            InchiriereRipo.mockImplementation(()=>{
                return{
                    update:()=>{
                        return Promise.reject('fail');
                    }
                }
            });

            let obj = {id:1, masina_id: 1,persoana_id: 1, perioada: 1};
            let service = new InchiriereService();
            await expect(service.Supdate(obj)).rejects.toMatch('fail');
        });

    });

    describe('Sdelete', ()=>{
        test('Delete success',async()=>{
            InchiriereRipo.mockImplementation(()=>{
                return {
                    delete:()=>{
                        return Promise.resolve('success');
                    },
                    getAll:()=>{
                        return Promise.resolve([{id:1,masina_id: 1,persoana_id: 1, perioada: 1}]);
                    }
                }
            });

            let service = new InchiriereService();
            await expect(service.Sdelete(1)).resolves.toMatch('success');
        });

        test('Delete fail | Empty ID',async()=>{
            InchiriereRipo.mockImplementation(()=>{
                return {
                    delete:()=>{
                        return Promise.resolve('success');
                    },
                    getAll:()=>{
                        return Promise.resolve([{id:1, masina_id: 1,persoana_id: 1, perioada: 1}]);
                    }
                }
            });

            let service = new InchiriereService();
            await expect(service.Sdelete()).rejects.toMatch('Invalid ID');
        });

        test('Delete fail | ID must be a number',async()=>{
            InchiriereRipo.mockImplementation(()=>{
                return {
                    delete:()=>{
                        return Promise.resolve('success');
                    },
                    getAll:()=>{
                        return Promise.resolve([{id:1,masina_id: 1,persoana_id: 1, perioada: 1}]);
                    }
                }
            });

            let service = new InchiriereService();
            await expect(service.Sdelete('ceva')).rejects.toMatch('ID must be a number!');
        });

        test('Delete fail | ID not in database',async()=>{
            InchiriereRipo.mockImplementation(()=>{
                return {
                    delete:()=>{
                        return Promise.resolve('success');
                    },
                    getAll:()=>{
                        return Promise.resolve([{id:2, masina_id: 1,persoana_id: 1, perioada: 1}]);
                    }
                }
            });

            let service = new InchiriereService();
            await expect(service.Sdelete(1)).rejects.toMatch('This ID is not in the datebase!');
        });


    });

});
