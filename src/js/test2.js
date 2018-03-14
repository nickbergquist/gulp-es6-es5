{
    const eleFormContainer = document.querySelector('.md-form-container');
    const formLabels = eleFormContainer.getElementsByTagName('label');

    for(let label of formLabels) {
        const labelText = label.querySelector('.cd-tlt-inner').textContent;
        const labelFor = label.htmlFor;
        const formInput = document.getElementById(labelFor);

        formInput.onblur = () => {
            console.log(`Label text : ${labelText}`);  // use template literals and embedded expressions
        };
    }
}
