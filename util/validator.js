module.exports = validateSignup = ( name, email, password ) => {
    const errors = {};
    if (name.trim() === ''){
        errors.name='Name is empty.'
    }
    if (email.trim() === ''){
        errors.name='Email is empty.'
    }
    if (name.password() === ''){
        errors.name='Password is empty.'
    }

    return {
        errors, 
        valid: Object.keys(errors).length < 1
    }
}

module.exports = validateLogin = ( email, password ) => {
    const errors = {};
    if (email.trim() === ''){
        errors.name='Email is empty.'
    }
    if (name.password() === ''){
        errors.name='Password is empty.'
    }

    return {
        errors, 
        valid: Object.keys(errors).length < 1
    }
}