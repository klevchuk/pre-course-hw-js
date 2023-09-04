const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    const deutschColors = colors.filter((color) => color == "черный" || color == "красный" || color == "желтый").join("-");
    return deutschColors;
}

console.log(createColorString());

