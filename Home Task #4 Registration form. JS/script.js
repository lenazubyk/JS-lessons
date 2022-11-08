function myValidation() {

    const fullNameEl = document.getElementById('fullName');
    const valueName = fullNameEl.value;

    const clientAgeEl = document.getElementById('clientAge');
    const valueAge = clientAgeEl.value;

    const clientWeightEl = document.getElementById('clientWeight');
    const valueWeight = clientWeightEl.value;

    const clHeightEl = document.getElementById('clientHeight');
    const valueHeight = clHeightEl.value;

    const client = {
        fullName: valueName,
        age: valueAge,
        weight: valueWeight,
        height: valueHeight,
    };

    const minAge = 18;
    const maxAge = 60;
    const minWeight = 50;
    const maxWeight = 100;
    const minHeight = 160;
    const maxHeight = 190;

    // Людина пройшла реєстрацію
    if (client.age <= minAge || client.age >= maxAge) {
        console.log(client.fullName, 'Sorry! Your age is wrong!')
    } else if (client.weight <= minWeight || client.weight >= maxWeight) {
        console.log(client.fullName, 'Sorry! Your weight is wrong')
    } else if (client.height <= minHeight || client.height >= maxHeight) {
        console.log(client.fullName, 'Sorry! Your height is wrong!')
    } else {
        console.log(client.fullName, ',you are a super star!')
    }

    fullNameEl.value = '';
    clientAgeEl.value = '';
    clientWeightEl.value = '';
    clHeightEl.value = '';
}
