const students = [
{
  id: 1,
  name: "Harry",
  // imageURL: "https://assets.vogue.in/photos/5f23c04f1d33754d11eaf778/2:3/w_2240,c_limit/harry-potter-philosophers-stone-portrait-8.jpg",
  house: "Gryffindor"
},

{
  id: 2,
  name: "Zacharias",
  house: "Hufflepuff"
},

{
  id: 3,
  name: "Draco",
  house: "Slytherin"
},

{
  id: 4,
  name: "Cho",
  house: "Ravenclaw"
},

];

const badWiz = [
  {
    id: students.length + 10,
    name: "Voldy",
    house: "Darkness"
  },
];





const renderToDom = (divId, htmlToRender) => {
  const targetingApp = document.querySelector(divId);
  targetingApp.innerHTML = htmlToRender;
  };

  // Student cards to DOM //

const cardsOnDom = (array) => {
  let domString = "";
  students.forEach((student) => {
    domString += `<div class="card mb-3" style="width:16rem;">
      <div class="card-body">
      <h3 class="card-title">${student.name}</h3>
      <p class="card-text">${student.house}</p>
      <a href="#" class="btn btn-danger" id="delete--${student.id}">Expel</a>
      </div>
    </div>`
});

renderToDom ("#app", domString);
};

const volOnDom = (array) => {
  let volDomString = "";
  badOne.forEach((badOne) => {
    volDomString += `<div class="card mb-3" style="width:16rem;">
      <div class="card-body">
      <h3 class="card-title">${badWiz.name}</h3>
      <p class="card-text">${badWiz.house}</p>
      </div>
    </div>`
});

renderToDom ("#volApp", volDomString);
};

// filter //

const filter = (array, houseString) => {
  const houseArray = [];

  for (const student of array) {
    if (student.house === houseString) {
      houseArray.push(student);
    }
  }
  return houseArray;
};


// buttons //
  const beginBtn = document.querySelector("#beginButton");
  const sortBtn = document.querySelector("#houseBtn");
  const enrolledStudents = document.querySelector("#enrollWiz");
  const form = document.querySelector("#wizardForm");
  const expelledStudents = document.querySelector("#expelWiz");
  const gryffindor = document.querySelector("#gryffBtn");
  const hufflepuff = document.querySelector("#huffBtn");
  const ravenclaw = document.querySelector("#ravenBtn");
  const slytherin = document.querySelector("#slythBtn");
  const app = document.querySelector ("#app");
  const volApp = document.querySelector("#volApp");

// event listeners //


  beginButton.addEventListener ("click", () => {
    cardsOnDom(students);
  });
    houseBtn.addEventListener ("click", () => {
      cardsOnDom(students);
  });

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
