// const perro1 = {
//     nombre: "Rex",
//     peso: 10, //kg
//     raza: "C SharPei"
// }; // JSON

// const perro2 = {
//     nombre: "Nahuelín",
//     peso: 3, //kg
//     raza: "Caniche"
// }; // JSON

// alert(perro.nombre);

// const propiedad = "raza";
// alert(perro[propiedad]);

// const capitales = {
//     Argentina: "Buenos Aires",
//     Uruguay: "Montevideo",
//     Brasil: "Brasilia"
// };

// const pais = prompt("¿De qué país querés conocer la capital?");

// alert(capitales[pais]);

// switch (pais) {
//     case "Argentina":
//         return capitales.Argentina;
// }



const perros = [
    {
        nombre: "Rex",
        peso: 10, //kg
        raza: "C SharPei"
    },
    {
        nombre: "Nahuelín",
        peso: 3, //kg
        raza: "Caniche"
    },
    {
        nombre: "Uma",
        peso: 4, //kg
        raza: "Caniche"
    },
    {
        nombre: "Spencer",
        peso: 2, //kg
        raza: "Chihuahua"
    }
];

// const pesoChihuahua = perros.find(
//     function(perro) {
//         return perro.raza === "Chihuahua"
//     }
// ).peso;

// alert(`El chihuahua pesa ${pesoChihuahua}kg`);

// const pesoCaniche = perros.find(function(perro) {return perro.raza === "Caniche"}).peso;
// alert(`El caniche pesa ${pesoCaniche}kg`);

// const pesoCanicheArrow = perros.find(perro => perro.raza === "Caniche").peso;
// alert(`El caniche pesa ${pesoCanicheArrow}kg`);

// if(perros[0].raza === "Caniche")
//     alert("El peso es " + perros[0].peso);
// else if(perros[1].raza === "Caniche")
//     alert("El peso es " + perros[1].peso);
// else if(perros[2].raza === "Caniche")
//     alert("El peso es " + perros[2].peso);
// else if(perros[3].raza === "Caniche")
//     alert("El peso es " + perros[3].peso);

// for(let indice = 0; indice < perros.length; indice++)
//     if(perros[indice].raza === "Caniche")
//         alert("El peso es "+ perros[indice].peso);

// const pesoDalmata = perros.find(function(perro) {return perro.raza === "Dálmata"}).peso;
// alert(`El dálmata pesa ${pesoDalmata}kg`); // Interpolation
// alert("El dálmata pesa " + pesoDalmata + "kg");

// if(perros[0].raza === "Dálmata")
//     alert("El peso es " + perros[0].peso);
// else if(perros[1].raza === "Dálmata")
//     alert("El peso es " + perros[1].peso);
// else if(perros[2].raza === "Dálmata")
//     alert("El peso es " + perros[2].peso);
// else if(perros[3].raza === "Dálmata")
//     alert("El peso es " + perros[3].peso);
// else
//     alert("No hay ningún dálmata.");

const raza = prompt("¿Qué raza?");

const perroDeRaza = perros.find(perro => perro.raza === raza);

// // const pesoDalmataConIf;
// if(perroDeRaza)
// {
//     const pesoPerroDeRaza = perroDeRaza.peso;
//     alert(`El ${raza} pesa ${pesoPerroDeRaza}kg.`);
// }
// else
//     alert(`No hay ningún ${raza}.`);

const pesoPerroDeRazaTernario = perroDeRaza ? perroDeRaza.peso : null;
// const pesoPerroDeRazaTernario = !perroDeRaza || perroDeRaza.peso; // no hacer

if(!pesoPerroDeRazaTernario)
    alert(`No se pudo obtener el peso del ${raza}.`);
else
    alert(`El ${raza} pesa ${pesoPerroDeRazaTernario}kg.`);


// alert(`El dálmata pesa ${pesoDalmata}kg`);