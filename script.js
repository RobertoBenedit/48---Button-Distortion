const buttons = document.querySelectorAll("button");
const turbulence = document.querySelector("feTurbulence");
let verticalFrecuency = 0.00001;
turbulence.setAttribute("baseFrequency", verticalFrecuency + "0.0001");
const steps = 30;
const insterval = 10;

buttons.forEach((button) => {
    button.addEventListener("mouseover", () => {
        verticalFrecuency = 0.00001;

        for (let i = 0; i < steps; i++) {
            setTimeout(() => {
                verticalFrecuency += 0.002;
                turbulence.setAttribute(
                    "baseFrequency",
                    verticalFrecuency + "0.0001"
                );
            }, i * insterval);
        }
        setTimeout(() => {
            verticalFrecuency = 0.00001;
            turbulence.setAttribute(
                "baseFrequency",
                verticalFrecuency + "0.0001"
            );
        }, steps * insterval);
    });
});
