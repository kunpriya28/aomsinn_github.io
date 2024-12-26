function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '&#10052;';

    const size = Math.random() * 20 + 10;
    const leftPosition = Math.random() * window.innerWidth;
    const animationDuration = Math.random() * 3 + 5;

    snowflake.style.fontSize = `${size}px`;
    snowflake.style.left = `${leftPosition}px`;
    snowflake.style.animationDuration = `${animationDuration}s`;

    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, animationDuration * 1000);
}

setInterval(createSnowflake, 100);
