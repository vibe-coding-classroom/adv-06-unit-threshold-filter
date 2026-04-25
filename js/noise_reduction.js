/**
 * 邏輯：待填寫中值與均值濾波卷積核
 */

function applyMeanFilter(window) {
    let sum = window.reduce((a, b) => a + b, 0);
    return sum / window.length;
}

function applyMedianFilter(window) {
    let sorted = [...window].sort((a, b) => a - b);
    return sorted[Math.floor(sorted.length / 2)];
}

module.exports = {
    applyMeanFilter,
    applyMedianFilter
};
