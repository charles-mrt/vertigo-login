/**
 * checks if the input value of type email is valid.
 */
const validateEmail = () => {

    const email = document.querySelector('input[type="email"]');
    const emailError = document.querySelector(".emailError");

    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    email.addEventListener("change", () => {

        if (email.value.match(mailFormat)) {
            return emailError.textContent = "";
        } else {
            return emailError.textContent = "Digite um e-mail válido";
        }
    });
}
validateEmail();



/**
 * show and hide password value.
 * @param {boolean} isActived 
 */
const showPassword = (isActived) => {
    
    const showPasswordIcon = document.querySelector(".showPassword i");
    const getInputType = document.querySelector(".password input");
    
    showPasswordIcon.addEventListener("click", () => {
        if (!isActived) {
            isActived = true;
            showPasswordIcon.setAttribute("class", "ph ph-eye");
            getInputType.setAttribute("type", "text");
        } else {
            isActived = false;
            showPasswordIcon.setAttribute("class", "ph ph-eye-slash");
            getInputType.setAttribute("type", "password");
        }
    });
};

showPassword();