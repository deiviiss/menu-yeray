console.log("It's Working");

const menu = [
  {
    id: 1,
    title: "Taco de Pastor",
    category: "tacos",
    price: 14,
    img: "./images/platillo1.jpeg",
    description: "Rica carne de pastor en tortilla hecha a mano acompañado de cilantro, cebolla y piña.<span>Tortilla de harina $16</span>",
  },

  {
    id: 2,
    title: "Taco de Chorizo",
    category: "tacos",
    price: 14,
    img: "./images/platillo2.jpeg",
    description: "Chorizo en tortilla hecha a mano acompañado de cilantro y cebolla.<span>Tortilla de harina $16</span>"
  },

  {
    id: 3,
    title: "Taco Surtido",
    category: "tacos",
    price: 14,
    img: "./images/platillo3.jpeg",
    description: "Carne surtida en tortilla hecha a mano acompañado de cilantro y cebolla.<span>Tortilla de harina $16</span>"
  },

  {
    id: 4,
    title: "Taco de Bistec",
    category: "tacos",
    price: 17,
    img: "./images/platillo4.jpeg",
    description: "Carne de bisctec en tortilla hecha a mano acompañado de cilantro y cebolla.<span>Tortilla de harina $19</span>"
  },

  {
    id: 5,
    title: "Taco de Suadero",
    category: "tacos",
    price: 17,
    img: "./images/platillo5.jpeg",
    description: "Rica carne de suadero en tortilla hecha a mano acompañado de cilantro y cebolla.<span>Tortilla de harina $19</span>"
  },

  {
    id: 6,
    title: "Taco Campechano",
    category: "tacos",
    price: 17,
    img: "./images/platillo1.jpeg",
    description: "Rica carne de bistec y chorizo en tortilla hecha a mano acompañado de cilantro y cebolla.<span>Tortilla de harina $19</span>"
  },

  {
    id: 7,
    title: "Taco de tripa",
    category: "tacos",
    price: 19,
    img: "./images/platillo2.jpeg",
    description: "Tripa frita en tortilla hecha a mano acompañado de cilantro y cebolla.<span>Tortilla de harina $21</span>"
  },
  {
    id: 8,
    title: "Tranca de Pastor",
    category: "trancas-tortas",
    price: 35,
    img: "./images/platillo1.jpeg",
    description: "Rica carne de pastor en media barra del día.<span>Con queso $40</span>"
  },
  {
    id: 9,
    title: "Torta de Pastor",
    category: "trancas-tortas",
    price: 30,
    img: "./images/platillo1.jpeg",
    description: "Rica carne de pastor en bolillo del día.<span>Con queso $35</span>"
  },
  {
    id: 10,
    title: "Tranca Surtida",
    category: "trancas-tortas",
    price: 35,
    img: "./images/platillo2.jpeg",
    description: "Carne surtida en media barra del día.<span>Con queso $40</span>"
  },
  {
    id: 11,
    title: "Torta Surtida",
    category: "trancas-tortas",
    price: 30,
    img: "./images/platillo2.jpeg",
    description: "Carne surtida en bolillo del día.<span>Con queso $35</span>"
  },
  {
    id: 12,
    title: "Tranca de Bistec",
    category: "trancas-tortas",
    price: 40,
    img: "./images/platillo3.jpeg",
    description: "Rica carne de bistec en media barra del día.<span>Con queso $45</span>"
  },
  {
    id: 13,
    title: "Torta de Bistec",
    category: "trancas-tortas",
    price: 35,
    img: "./images/platillo3.jpeg",
    description: "Rica carne de bistec en bolillo del día.<span>Con queso $40</span>"
  },
  {
    id: 15,
    title: "Tranca de Suadero",
    category: "trancas-tortas",
    price: 40,
    img: "./images/platillo4.jpeg",
    description: "Rica carne de suadero en media barra del día.<span>Con queso $45</span>"
  },
  {
    id: 16,
    title: "Gringa de Pastor",
    category: "Gringas-Burritos",
    price: 20,
    img: "./images/platillo4.jpeg",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, nesciunt amet tenetur doloremque."
  },
  {
    id: 17,
    title: "Gringa Surtida",
    category: "Gringas-Burritos",
    price: 20,
    img: "./images/platillo1.jpeg",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, nesciunt amet tenetur doloremque."
  },
  {
    id: 18,
    title: "Gringa de Bistec",
    category: "Gringas-Burritos",
    price: 30,
    img: "./images/platillo2.jpeg",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, nesciunt amet tenetur doloremque."
  },
  {
    id: 19,
    title: "Gringa de Suadero",
    category: "Gringas-Burritos",
    price: 30,
    img: "./images/platillo3.jpeg",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, nesciunt amet tenetur doloremque."
  },
  {
    id: 20,
    title: "Huarache de Pastor",
    category: "huaraches-alambres",
    price: 40,
    img: "./images/platillo5.jpeg",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, nesciunt amet tenetur doloremque."
  },
  {
    id: 21,
    title: "Huarache Surtido",
    category: "huaraches-alambres",
    price: 40,
    img: "./images/platillo2.jpeg",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, nesciunt amet tenetur doloremque."
  },
  {
    id: 22,
    title: "Huarache de Bistec",
    category: "huaraches-alambres",
    price: 50,
    img: "./images/platillo1.jpeg",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, nesciunt amet tenetur doloremque."
  },
  {
    id: 23,
    title: "Huarache de Suadero",
    category: "huaraches-alambres",
    price: 50,
    img: "./images/platillo3.jpeg",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, nesciunt amet tenetur doloremque."
  },
  {
    id: 24,
    title: "Alambre de Pastor",
    category: "huaraches-alambres",
    price: 75,
    img: "./images/platillo3.jpeg",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, nesciunt amet tenetur doloremque."
  },
  {
    id: 25,
    title: "Alambre Surtido",
    category: "huaraches-alambres",
    price: 75,
    img: "./images/platillo1.jpeg",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, nesciunt amet tenetur doloremque."
  },
  {
    id: 26,
    title: "Alambre de Bistec",
    category: "huaraches-alambres",
    price: 80,
    img: "./images/platillo2.jpeg",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, nesciunt amet tenetur doloremque."
  },
  {
    id: 27,
    title: "Alambre de Suadero",
    category: "huaraches-alambres",
    price: 80,
    img: "./images/platillo5.jpeg",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, nesciunt amet tenetur doloremque."
  },
  {
    id: 28,
    title: "Coca Cola",
    category: "refrescos",
    price: 16,
    img: "https://d500.epimg.net/cincodias/imagenes/2020/08/28/companias/1598616310_099857_1598616352_noticia_normal.jpg",
    description: "Coca cola presentación de 600 ml."
  },
  {
    id: 29,
    title: "Natural",
    category: "refrescos",
    price: 16,
    img: "https://lh3.googleusercontent.com/proxy/NOFcd-yrFKwt_kI8kYdA62lW093SiVHn0Lwf5nd8ABy2JngsxHRedmApbFnFy8ZADPA3d8jpuuqwlP7g4v1LMmP9m1cKSEjZkLMvF2leaIAyHh6R4vJAm6o",
    description: "Refresco natural de 1 lt."
  },
  {
    id: 30,
    title: "Burrito de Pastor",
    category: "Gringas-Burritos",
    price: 45,
    img: "./images/platillo1.jpeg",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, nesciunt amet tenetur doloremque."
  },
  {
    id: 31,
    title: "Burrito Surtido",
    category: "Gringas-Burritos",
    price: 45,
    img: "./images/platillo2.jpeg",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, nesciunt amet tenetur doloremque."
  },
  {
    id: 32,
    title: "Burrito de Bistec",
    category: "Gringas-Burritos",
    price: 50,
    img: "./images/platillo3.jpeg",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, nesciunt amet tenetur doloremque."
  },
  {
    id: 33,
    title: "Burrito de Suadero",
    category: "Gringas-Burritos",
    price: 50,
    img: "./images/platillo4.jpeg",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, nesciunt amet tenetur doloremque."
  },
  {
    id: 34,
    title: "Torta de Suadero",
    category: "trancas-tortas",
    price: 35,
    img: "./images/platillo4.jpeg",
    description: "Rica carne de suadero en bolillo del día.<span>Con queso $40</span>"
  }
];

//clases
const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');

//cuando carga el DOM
window.addEventListener('DOMContentLoaded', function () {
  console.log("Loaded!");
  //muestra todos los items
  displayMenuItems(menu);
  //muestra todos los botones
  displayMenuButtons();
});

//muestra todos los items
function displayMenuItems(menuItems) {
  // itera los items
  let displayMenu = menuItems.map(function (item) {

    //plantilla items
    return `
    <article class="menu-item">
    <img src=${item.img} alt="${item.title}" class="photo">

    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">$${item.price}</h4>
      </header>
      <p class="item-text">${item.description}</p>      
    </div>
  </article>`;
  });

  //método join lo une con la clase
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

//muestra todos los botones
function displayMenuButtons() {
  //itera las categorias
  const categories = menu.reduce(function (values, item) {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  }, ['todo']
  );

  //plantilla de botones
  let categoryBtns = categories.map(function (category) {
    return `
    <button class="filter-btn" type="button" data-id=${category}>${category}</button>
    `
  });

  //método join lo une con la clase
  categoryBtns = categoryBtns.join("");
  container.innerHTML = categoryBtns;

  // clase
  const filterBtns = container.querySelectorAll('.filter-btn');

  //filter items
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (event) {

      const category = event.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {

        if (menuItem.category === category) {
          return menuItem;
        }
      });

      if (category === 'todo') {
        displayMenuItems(menu)
      }
      else {
        displayMenuItems(menuCategory)
      }
    });
  });
}