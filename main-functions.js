
function sobre_apresentacao() {

    const x1 = document.getElementById("apresentacao");
    const x3 = document.getElementById("percurso");
    const x4 = document.getElementById("motivacao");
    // const x5 = document.getElementById("objetivos");
    const x6 = document.getElementById("passatempos");

    x1.style.display = "block";
    x3.style.display = x4.style.display = x6.style.display = "none";

    const z1 = document.getElementById("apresentacao-imgs");
    const z3 = document.getElementById("percurso-imgs");
    const z4 = document.getElementById("motivacao-imgs");
    // const z5 = document.getElementById("objetivos-imgs");
    const z6 = document.getElementById("passatempos-imgs"); 

    z1.style.display = "block";
    z3.style.display = z4.style.display = z6.style.display = "none";

    const l1 = document.getElementById("nav-apresentacao");
    const l3 = document.getElementById("nav-percurso");
    const l4 = document.getElementById("nav-motivacao");
    // const l5 = document.getElementById("nav-objetivos");
    const l6 = document.getElementById("nav-passatempos");

    l1.className = "nav-active";
    l3.className = l4.className = l6.className = "nav-side";

}

function sobre_percurso() {
    
    const x1 = document.getElementById("apresentacao");
    const x3 = document.getElementById("percurso");
    const x4 = document.getElementById("motivacao");
    // const x5 = document.getElementById("objetivos");
    const x6 = document.getElementById("passatempos");

    x3.style.display = "block";
    x1.style.display = x4.style.display = x6.style.display = "none";

    const z1 = document.getElementById("apresentacao-imgs");
    const z3 = document.getElementById("percurso-imgs");
    const z4 = document.getElementById("motivacao-imgs");
    // const z5 = document.getElementById("objetivos-imgs");
    const z6 = document.getElementById("passatempos-imgs"); 

    z3.style.display = "block";
    z1.style.display = z4.style.display = z6.style.display = "none";

    const l1 = document.getElementById("nav-apresentacao");
    const l3 = document.getElementById("nav-percurso");
    const l4 = document.getElementById("nav-motivacao");
    // const l5 = document.getElementById("nav-objetivos");
    const l6 = document.getElementById("nav-passatempos");

    l3.className = "nav-active";
    l1.className = l4.className = l6.className = "nav-side";

}

function sobre_motivacao() {
    
  const x1 = document.getElementById("apresentacao");
  const x3 = document.getElementById("percurso");
  const x4 = document.getElementById("motivacao");
  // const x5 = document.getElementById("objetivos");
  const x6 = document.getElementById("passatempos");

  x4.style.display = "block";
  x3.style.display = x1.style.display = x6.style.display = "none";

  const z1 = document.getElementById("apresentacao-imgs");
  const z3 = document.getElementById("percurso-imgs");
  const z4 = document.getElementById("motivacao-imgs");
  // const z5 = document.getElementById("objetivos-imgs");
  const z6 = document.getElementById("passatempos-imgs"); 

  z4.style.display = "block";
  z3.style.display = z1.style.display = z6.style.display = "none";

  const l1 = document.getElementById("nav-apresentacao");
  const l3 = document.getElementById("nav-percurso");
  const l4 = document.getElementById("nav-motivacao");
  // const l5 = document.getElementById("nav-objetivos");
  const l6 = document.getElementById("nav-passatempos");

  l4.className = "nav-active";
  l3.className = l1.className = l6.className = "nav-side";

  }

// function sobre_objetivos() {
    
//   const x1 = document.getElementById("apresentacao");
//   const x3 = document.getElementById("percurso");
//   const x4 = document.getElementById("motivacao");
//   // const x5 = document.getElementById("objetivos");
//   const x6 = document.getElementById("passatempos");

//   x5.style.display = "block";
//   x3.style.display = x4.style.display = x1.style.display = x6.style.display = "none";

//   const z1 = document.getElementById("apresentacao-imgs");
//   const z3 = document.getElementById("percurso-imgs");
//   const z4 = document.getElementById("motivacao-imgs");
//   // const z5 = document.getElementById("objetivos-imgs");
//   const z6 = document.getElementById("passatempos-imgs"); 

//   z5.style.display = "block";
//   z3.style.display = z4.style.display = z1.style.display = z6.style.display = "none";

//   const l1 = document.getElementById("nav-apresentacao");
//   const l3 = document.getElementById("nav-percurso");
//   const l4 = document.getElementById("nav-motivacao");
//   // const l5 = document.getElementById("nav-objetivos");
//   const l6 = document.getElementById("nav-passatempos");

//   l5.className = "nav-active";
//   l3.className = l4.className = l1.className = l6.className = "nav-side";

//   }

function sobre_passatempos() {
    
  const x1 = document.getElementById("apresentacao");
  const x3 = document.getElementById("percurso");
  const x4 = document.getElementById("motivacao");
  // const x5 = document.getElementById("objetivos");
  const x6 = document.getElementById("passatempos");

  x6.style.display = "block";
  x3.style.display = x4.style.display = x1.style.display = "none";

  const z1 = document.getElementById("apresentacao-imgs");
  const z3 = document.getElementById("percurso-imgs");
  const z4 = document.getElementById("motivacao-imgs");
  // const z5 = document.getElementById("objetivos-imgs");
  const z6 = document.getElementById("passatempos-imgs"); 

  z6.style.display = "block";
  z3.style.display = z4.style.display = z1.style.display = "none";

  const l1 = document.getElementById("nav-apresentacao");
  const l3 = document.getElementById("nav-percurso");
  const l4 = document.getElementById("nav-motivacao");
  // const l5 = document.getElementById("nav-objetivos");
  const l6 = document.getElementById("nav-passatempos");

  l6.className = "nav-active";
  l3.className = l4.className = l1.className = "nav-side";

  }