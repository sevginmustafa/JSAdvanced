function toggle() {
    let displayStyle = document.getElementById("extra").style.display;

    if (displayStyle == "block") {
        document.getElementById("extra").style.display = 'none';
        document.querySelector(".head span").textContent = 'More';
    }
    else {
        document.getElementById("extra").style.display = 'block';
        document.querySelector(".head span").textContent = 'Less';
    }
}