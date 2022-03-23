import {getGifs} from '../../helpers/getGifs';


describe('pruebas con getGifs', () => {


    test('debe de traer 10 elementos', async () => {
        jest.setTimeout(15000);
        const gifs = await getGifs('tamales', 10);
        
        expect(gifs.length).toBe(10);
    });

    test('debe de traer categoria', async () => {
        jest.setTimeout(15000);
        const gifs = await getGifs('', 10);
        
        expect(gifs.length).toBe(0);
    })
})