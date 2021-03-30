const handleValidate = (name, website, email) => {

    const messages = {
        name: 'Debe completar este el campo "Name"',
        website: 'Debe completar este el campo "Website"',
        email: 'La dirección de correo es incorrecta'
    };

    let errors = {};
    let validate = true;

    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if(!name.trim()) {
        errors = {...errors,  name: messages.name};
        validate = false;
    }

    if(!website.trim()) {
        errors = {...errors,  website: messages.website};
        validate = false;
    }

    if(!emailRegex.test(email.trim())) {
        errors = {...errors,  email: messages.email};
        validate = false;
    }

    return { validate, errors }
}

export default handleValidate;