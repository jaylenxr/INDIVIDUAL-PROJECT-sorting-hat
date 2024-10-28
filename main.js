const houses = ["Gryffindor", "Hufflepuff", "Slytherin", "Ravenclaw"];

const students = [
{
  id: 1,
  name: "Harry",
  house: houses[0]
},

{
  id: 2,
  name: "Zacharias",
  house: houses[1]
},

{
  id: 3,
  name: "Draco",
  house: houses[2]
},

{
  id: 4,
  name: "Cho",
  house: houses[3]
},

];


const badWiz = [
  {
    id: "students",
    name: "Voldy",
    house: "Darkness"
  },
];
// POPULATES FORM //
beginButton.addEventListener("click", () => {
  document.querySelector(".newStudent").style.display = "block";
});




// utility function //
const renderToDom = (divId, htmlToRender) => {
  const targetingApp = document.querySelector(divId);
  targetingApp.innerHTML = htmlToRender;
  };


  // Student cards to DOM... tried .map funciton again but wouldn't work //

// const cardsOnDom = (student) => {
//   return `<div class="card mb-3" style="width:16rem;">
//       <div class="card-body">
//       <h3 class="card-title">${student.name}</h3>
//       <p class="card-text">${student.house}</p>
//       <a href="#" class="btn btn-danger" id="delete--${student.id}">Expel</a>
//       </div>
//     </div>`;
// };
// let domString = "";
// students.map((student) => {
//   domString += cardsOnDom(student);
// });



const cardsOnDom = (students) => {
  let domString = "";
  for (const student of students) {
    domString += `<div class="card" style="width: 18rem;">
  <div class="card-body">
  <h3 class="card-title">${student.name}</h3>
  <h5 class="card-title">${student.house}</h5>
  <a href="#" class="btn btn-danger" id="delete--${student.id}">Expel</a>
  </div>
  </div>`;
};
renderToDom("#app", domString);
};
// Expelled student card //
// const volOnDom = (badOne) => {
//   return `<div class="card mb-3" style="width:16rem;">
//       <div class="card-body">
//       <h3 class="card-title">${badOne.name}</h3>
//       <p class="card-text">${badOne.house}</p>
//       </div>
//     </div>`
// };
// let volDomString = ""
// badWiz.map((badOne) => {
//   volDomString += volOnDom (badOne);
// });
// renderToDom ("#volApp", volDomString);
const volOnDom = (badWiz) => {
  let volDomString = "";
  for (const badOne of badWiz) {
    volDomString += `<div class="expelledCard" style="width: 18rem;">
  <div class="card-body">
  <h3 class="card-title">${badOne.name}</h3>
  <h5 class="card-title">${badOne.house}</h5>
  </div>
  </div>`;
}
renderToDom("#volApp", volDomString)
};











// filter function //

const filter = (array, houseString) => {
  const houseArray = [];

  array.forEach((student) => {
    if (student.house === houseString) {
      houseArray.push(student);
    }
  });
  return houseArray;
};


  const form = document.querySelector("#wizardForm");

  // cardsOnDom(students);
  // document.querySelector("#enrolled").style.display = "block";


  // houseButton.addEventListener("click", (e) => {
  //   e.preventDefault();

    const addWizard = (e) => {
      e.preventDefault();

      const newWizard = {
        id: students.length + 1,
        name: document.querySelector("#nameHere").value,
        house: houses[Math.floor(Math.random() * houses.length)],
      };

      students.push(newWizard);
      cardsOnDom(students);
      form.reset();
    }

    form.addEventListener("submit", addWizard);

    const app = document.querySelector("#app");

    app.addEventListener("click", (e) => {

        if (e.target.id.includes("delete")) {
        const [, id] = e.target.id.split("--");
        const index = students.findIndex((e) => e.id === Number(id));
        const removedStudent = students.splice(index, 1);
        badWiz.push(removedStudent[0]);
        cardsOnDom(students);
        volOnDom(badWiz);
      }
    });

  // document.querySelector("#app").style.display = "block";
  const allBtn =document.querySelector("#allBtn");
  const gryffindor = document.querySelector("#gryffBtn");
  const hufflepuff = document.querySelector("#huffBtn");
  const ravenclaw = document.querySelector("#ravenBtn");
  const slytherin = document.querySelector("#slythBtn");


  allBtn.addEventListener("click", () => {
    cardsOnDom(students);
  });
    gryffindor.addEventListener("click", () => {
      const gryffStudents = filter(students, "Gryffindor");
      cardsOnDom(gryffStudents)
    });

    hufflepuff.addEventListener("click", () => {
      const huffStudents = filter(students, "Hufflepuff");
   cardsOnDom(huffStudents)
    });

    ravenclaw.addEventListener("click", () => {
      const ravenStudents = filter(students, "Ravenclaw");
     cardsOnDom(ravenStudents)
     });

    slytherin.addEventListener("click", () => {
      const slythStudents = filter(students, "Slytherin");
   cardsOnDom(slythStudents)
    });




  const startApp = () => {
    cardsOnDom(students);
  };
startApp();
