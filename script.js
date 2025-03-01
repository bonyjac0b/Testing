const maleNames = ['Liam', 'Noah', 'Oliver', 'Elijah', 'James'];
const femaleNames = ['Olivia', 'Emma', 'Ava', 'Sophia', 'Isabella'];
const allNames = [...maleNames, ...femaleNames];

function generateName() {
    const gender = document.getElementById('gender').value;
    const length = document.getElementById('length').value;
    
    let filteredNames = allNames;

    if (gender !== 'any') {
        filteredNames = gender === 'male' ? maleNames : femaleNames;
    }

    if (length) {
        filteredNames = filteredNames.filter(name => name.length === parseInt(length));
    }

    const randomIndex = Math.floor(Math.random() * filteredNames.length);
    const name = filteredNames[randomIndex] || 'No name found for this criteria';
    
    document.getElementById('generated-name').innerText = `Your Random Name: ${name}`;
}
