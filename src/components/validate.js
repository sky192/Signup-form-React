export const validate = (data, type) => {
    let errors = {};

    if (!data.email.trim()) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "Email is invalid";
    } else {
        delete errors.email;
    }
    if (!data.password) {
        errors.password = "Password is required";
    } else if (data.password.lenght < 6) {
        errors.password = "Password must be at least 6 characters";
    } else {
        delete errors.password;
    }

    if (type === "signup") {
        if (!data.name.trim()) {
            errors.name = "Username is requierd";
        } else {
            delete errors.name;
        }
        if (!data.confirmPassword) {
            errors.confirmPassword = "Confirm Password is required";
        } else if (data.confirmPassword !== data.password) {
            errors.confirmPassword = "Password does not match";
        } else {
            delete errors.password;
        }
        if (data.isAccepted) {
            delete errors.isAccepted;
        } else {
            errors.isAccepted = "You must accept the terms and conditions";
        }
    }

    return errors;
};
