function showResult() {
    const backgroundColorEl = document.getElementById('backgroundColor');
    const borderRadiusEl = document.getElementById('borderRadius');
    const borderWidthEl = document.getElementById('borderWidth');

    const resultEl = document.getElementById('result');

    resultEl.style.backgroundColor = backgroundColorEl.value;
    resultEl.style.borderRadius = borderRadiusEl.value;
    resultEl.style.borderWidth = borderWidthEl.value;

}