/**
 * 自動化評分：比對濾波後的像素期望值
 */
const { applyMedianFilter } = require('../js/noise_reduction');

describe('Convolution Filters', () => {
    test('Median Filter should remove extreme noise', () => {
        const window = [
            10, 10, 10,
            10, 255, 10,
            10, 10, 10
        ];
        // 期望剔除 255 雜訊，返回 10
        expect(applyMedianFilter(window)).toBe(10);
    });
});
