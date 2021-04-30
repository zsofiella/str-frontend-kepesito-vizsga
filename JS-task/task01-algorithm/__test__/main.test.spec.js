const { movieFilter } = require('../main');

describe('JS algoritmus teszt cinema listára', () => {

    const movieList = [
        { title: 'Vissza a jövőbe', year: 1990, timeInMinute: 95 },
        { title: 'Titanic', year: 1997, timeInMinute: 182 },
        { title: 'Charlie angyalai', year: 2003, timeInMinute: 99 },
        { title: 'Robotzsaru', year: 1997, timeInMinute: 101 },
        { title: 'Hangtalanul', year: 2015, timeInMinute: 120 },
        { title: 'Csillagok között', year: 2020, timeInMinute: 180 },
        { title: 'Top Gun', year: 1990, timeInMinute: 100 }
    ];

    test('Nem létező évszámra történő szűrés.', () => {
        const results = movieFilter(movieList, 1888, 80);
        expect(results.length).toBe(0);
    });

    test('Túl kicsi maximális időtartamra történő szűrés.', () => {
        const results = movieFilter(movieList, 1990, 10);
        expect(results.length).toBe(0);
    });

    test('Évszám és időtartam paraméter megfelelő egy elemre', () => {
        const results = movieFilter(movieList, 1990, 95);
        expect(results.length).toBe(1);
    })

    test('Évszám és időtartam paraméter megfelelő több elemre', () => {
        const results = movieFilter(movieList, 1997, 182);
        expect(results.length).toBe(2);
    })

    test('Csak a film címekkel, mint string lista tér vissza a szűrés', () => {
        const results = movieFilter(movieList, 1997, 200);
        expect(results[0]).toBe('Titanic');
        expect(results[1]).toBe('Robotzsaru');
    })
})