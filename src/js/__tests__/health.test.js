import getHealthStatus from '../health';

describe('getHealthStatus', () => {
    test('Возвращаем "healthy", когда здоровье > 50', () => {
        expect(getHealthStatus({ health: 51 })).toBe('healthy');
        expect(getHealthStatus({ health: 100 })).toBe('healthy');
    });

    test('Возвращаем "wounded", когда здоровье от 15 до 50 включительно', () => {
        expect(getHealthStatus({ health: 50 })).toBe('wounded');
        expect(getHealthStatus({ health: 30 })).toBe('wounded');
        expect(getHealthStatus({ health: 15 })).toBe('wounded');
    });

    test('Возвращаем "critical", когда здоровье < 15', () => {
        expect(getHealthStatus({ health: 14 })).toBe('critical');
        expect(getHealthStatus({ health: 0 })).toBe('critical');
    });
});