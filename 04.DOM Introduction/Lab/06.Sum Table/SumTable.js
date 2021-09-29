function sumTable() {
    const products = document.querySelectorAll("table tr");
    let sum = 0;

    for (let i = 1; i < products.length - 1; i++) {
        sum += Number(products[i].lastElementChild.textContent);
    }

    document.getElementById("sum").textContent = sum;
}