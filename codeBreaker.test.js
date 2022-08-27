const codeBreaker = require('./codeBreaker');

test('comenzar juego', () => {
    let variable = codeBreaker.start();
    expect(variable.length).toBe(4);
});

describe('codeBreaker test', () => {
    test('Todos coinciden XXXX', () => {
        codeBreaker.setSecret("1234");
        var value = codeBreaker.guess("1234");
        expect(value).toBe('XXXX');
    });
    
    test('ninguno coinciden devuelve \'\'', () => {
        codeBreaker.setSecret("1234");
        var value = codeBreaker.guess("5678");
        expect(value).toBe('');
    });
    test('solo uno este en la posicion incorrecta _', () => {
        codeBreaker.setSecret("1234");
        var value = codeBreaker.guess("5167");
        expect(value).toBe('_');
    });

    test('solo uno este en la posicion correcta X', () => {
        codeBreaker.setSecret("1234");
        var value = codeBreaker.guess("1567");
        expect(value).toBe('X');
    });
    test('solo uno este en la posicion correcta y otro en la posicion incorrecta X_', () => {
        codeBreaker.setSecret("1234");
        var value = codeBreaker.guess("1367");
        expect(value).toBe('X_');
    });

});


