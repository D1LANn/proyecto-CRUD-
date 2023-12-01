let pets = [];

function addPet() {
    // Obtén los valores de los campos del formulario
    let ownerName = document.getElementById('ownerName').value;
    let petName = document.getElementById('petName').value;
    let petType = document.getElementById('petType').value;
    let petLocation = document.getElementById('petLocation').value;

    // Crea un objeto para la nueva mascota
    let newPet = {
        ownerName: ownerName,
        petName: petName,
        petType: petType,
        petLocation: petLocation
    };

    // Agrega la nueva mascota al array de mascotas
    pets.push(newPet);

    // Limpia los campos del formulario
    document.getElementById('ownerName').value = '';
    document.getElementById('petName').value = '';
    document.getElementById('petType').value = '';
    document.getElementById('petLocation').value = '';

    // Actualiza la lista de mascotas en la página
    displayPets();
}

function displayPets() {
    // Obtén el div donde se mostrarán las mascotas
    let petList = document.getElementById('petList');

    // Limpia el div
    petList.innerHTML = '';

    // Muestra cada mascota en el div
    for (let i = 0; i < pets.length; i++) {
        let petDiv = document.createElement('div');
        petDiv.innerHTML = `
            <h2>${pets[i].petName}</h2>
            <p>Dueño: ${pets[i].ownerName}</p>
            <p>Tipo: ${pets[i].petType}</p>
            <p>Última ubicación conocida: ${pets[i].petLocation}</p>
            <button onclick="modifyPet(${i})">Modificar</button>
            <button onclick="removePet(${i})">Eliminar</button>
        `;
        petList.appendChild(petDiv);
    }
}

function modifyPet(index) {
    // Obtén la mascota a modificar
    let pet = pets[index];

    // Rellena los campos del formulario con los datos de la mascota
    document.getElementById('ownerName').value = pet.ownerName;
    document.getElementById('petName').value = pet.petName;
    document.getElementById('petType').value = pet.petType;
    document.getElementById('petLocation').value = pet.petLocation;

    // Elimina la mascota del array de mascotas
    pets.splice(index, 1);

    // Actualiza la lista de mascotas en la página
    displayPets();
}

function removePet(index) {
    // Elimina la mascota del array de mascotas
    pets.splice(index, 1);

    // Actualiza la lista de mascotas en la página
    displayPets();
}
