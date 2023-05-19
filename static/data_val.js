const form = document.querySelector('#experimentForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log(data);

    const hypothesisInput = document.querySelector('#hypothesis');
    const hypothesisValue = hypothesisInput.value.trim();

    const materialsInput = document.querySelector('#materials');
    const materialsValue = materialsInput.value.trim();

    const implementationInput = document.querySelector('#implementation');
    const implementationValue = implementationInput.value.trim();

    const observationInput = document.querySelector('#observation');
    const observationValue = observationInput.value.trim();

    const resultInput = document.querySelector('#result');
    const resultValue = resultInput.value.trim();

    if (hypothesisValue === '') {
        const errorDiv = document.querySelector('div');
        errorDiv.textContent = 'Hypothesis cannot be empty';
        errorDiv.classList.add('error');
        From.appendChild(errorDiv);
        return;
    }

    if (materialsValue === '') {
        const errorDiv = document.querySelector('div');
        errorDiv.textContent = 'Materials cannot be empty';
        errorDiv.classList.add('error');
        From.appendChild(errorDiv);
        return;
    }

    if (implementationValue === '') {
        const errorDiv = document.querySelector('div');
        errorDiv.textContent = 'Implementation cannot be empty';
        errorDiv.classList.add('error');
        From.appendChild(errorDiv);
        return;
    }

    if (observationValue === '') {
        const errorDiv = document.querySelector('div');
        errorDiv.textContent = 'Observation cannot be empty';
        errorDiv.classList.add('error');
        From.appendChild(errorDiv);
        return;
    }

    if (resultValue === '') {
        const errorDiv = document.querySelector('div');
        errorDiv.textContent = 'Result cannot be empty';
        errorDiv.classList.add('error');
        From.appendChild(errorDiv);
        return;
    }

    
});





