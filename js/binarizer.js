/**
 * 核心：待填寫灰階轉換與 Threshold 邏輯
 */

function convertToGrayscale(r, g, b) {
    let gray = (r * 0.299 + g * 0.587 + b * 0.114);
    return gray;
}

function applyThreshold(gray, threshold) {
    return (gray > threshold) ? 255 : 0;
}

module.exports = {
    convertToGrayscale,
    applyThreshold
};
