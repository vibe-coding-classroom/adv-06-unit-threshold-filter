/**
 * 自動化評分：檢核學員的二值化邏輯與濾波數值計算
 */
const { convertToGrayscale, applyThreshold } = require('../js/binarizer');

describe('Filter Accuracy', () => {
    test('Grayscale conversion', () => {
        // 簡單的灰階運算檢查
        expect(convertToGrayscale(255, 255, 255)).toBeCloseTo(255);
    });

    test('Threshold application', () => {
        expect(applyThreshold(150, 100)).toBe(255);
        expect(applyThreshold(50, 100)).toBe(0);
    });
});
