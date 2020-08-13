window.onload = function() {
  if (document.getElementById('main') != null) {
    //calling displaycars function
    displaycars();

    let filter_all = document.getElementById('filter-every');
    let filter_sport = document.getElementById('filter-sport');
    let filter_suv = document.getElementById('filter-suv');
    let filter_sedan = document.getElementById('filter-sedan');
    let message = document.getElementById('filter-message');

    //default
    filter_all.checked = true;
    filter_sport.checked = false;
    filter_suv.checked = false;
    filter_sedan.checked = false;

    filter_all.addEventListener('click', function() {
      Filter_event(true, filter_all, filter_sport, filter_suv, filter_sedan, message);
    });
    filter_sport.addEventListener('click', function() {
      Filter_event(false, filter_all, filter_sport, filter_suv, filter_sedan, message);
    });
    filter_suv.addEventListener('click', function() {
      Filter_event(false, filter_all, filter_sport, filter_suv, filter_sedan, message);
    });
    filter_sedan.addEventListener('click', function() {
      Filter_event(false, filter_all, filter_sport, filter_suv, filter_sedan, message);
    });
  }
  orderNumber();
};

function displaycars() {
  for (let i in cars) {
    let Car_container = document.createElement('div');
    Car_container.className = 'car ' + cars[i].category;

    let car_img = document.createElement('img');
    car_img.src = cars[i].image;

    let car_model = document.createElement('h4');
    car_model.className = 'model';
    car_model.textContent = cars[i].model;

    let car_decription = document.createElement('h5');
    car_decription.className = 'decription';
    car_decription.textContent = cars[i].decription;

    let car_category = document.createElement('h5');
    car_category.className = 'category';
    car_category.textContent = cars[i].category;

    let car_cad = document.createElement('button');
    car_cad.className = 'btn btn-primary';
    car_cad.textContent = cars[i].cad;

    Car_container.appendChild(car_img);
    Car_container.appendChild(car_model);
    Car_container.appendChild(car_decription);
    Car_container.appendChild(car_category);
    Car_container.appendChild(car_cad);

    document.getElementsByClassName('car-container')[0].appendChild(Car_container);
  }
}

function Filter_event(isAll, All_filter, sports_filter, suvs_filter, sedan_filter, message) {
  if (isAll) {
    sports_filter.checked = false;
    suvs_filter.checked = false;
    sedan_filter.checked = false;
    if (!All_filter.checked) {
      hide_cars('sport');
      hide_cars('suv');
      hide_cars('sedan');
      message.textContent = 'Please select a category';
    } else {
      unhide_cars('sport');
      unhide_cars('suv');
      unhide_cars('sedan');
      message.textContent = 'You are viewing all cars available in the showroom';
    }
  } else {
    var filters = [];
    All_filter.checked = false;

    if (sports_filter.checked) {
      unhide_cars('sport');
      filters.push('Sports category');
    } else hide_cars('sport');

    if (suvs_filter.checked) {
      unhide_cars('suv');
      filters.push('SUV category');
    } else hide_cars('suv');

    if (sedan_filter.checked) {
      unhide_cars('sedan');
      filters.push('Sedan category');
    } else hide_cars('sedan');

    message.textContent = filters[0];

    if (filters.length > 1) {
      for (let i = 1; i < filters.length; i++) message.textContent += ', ' + filters[i];
      message.textContent += ' are selected';
    } else if (filters.length < 1)
      Filter_event(true, All_filter, sports_filter, suvs_filter, sedan_filter, message);
    else message.textContent += ' is selected';
  }
}

function unhide_cars(category) {
  let do_unhide = document.getElementsByClassName(category);
  for (let i = 0; i < do_unhide.length; i++) do_unhide[i].style.display = 'block';
}

function hide_cars(category) {
  let do_hide = document.getElementsByClassName(category);
  for (let i = 0; i < do_hide.length; i++) {
    do_hide[i].style.display = 'none';
  }
}

const cars = [
  {
    image: 'images/sport1.jpg',
    model: 'Red BMW',
    decription: "A Red Beast that won't disappoint",
    category: 'sport',
    cad: '$125,000'
  },
  {
    image: 'images/sport2.jpg',
    model: 'Mustang',
    decription: 'Yellow mustang, OG.',
    category: 'sport',
    cad: '$159,000'
  },
  {
    image: 'images/sport3.jpg',
    model: 'MClaren',
    decription: 'White Mclaren - Limited Edition 2020',
    category: 'sport',
    cad: '$198,000'
  },
  {
    image: 'images/sport4.jpg',
    model: 'Mercedes Benz M',
    decription: 'Green queen for a king like you',
    category: 'sport',
    cad: '$210,000'
  },
  {
    image: 'images/sport5.jpg',
    model: 'Mustang T20',
    decription: 'Customarized mustang with black stripes',
    category: 'sport',
    cad: '$215,000'
  },
  {
    image: 'images/suv1.jpg',
    model: 'Hundai SUV x1',
    decription: 'Best Mid-range SUV',
    category: 'suv',
    cad: '$70,000'
  },
  {
    image: 'images/suv2.jpg',
    model: 'Range Rover',
    decription: 'Best in-class',
    category: 'suv',
    cad: '$99,000'
  },
  {
    image: 'images/suv3.jpg',
    model: 'Porche SUV v2',
    decription: 'Shining Bright SUV',
    category: 'suv',
    cad: '$120,000'
  },
  {
    image: 'images/suv4.jpg',
    model: 'Mahindra Mahi',
    decription: 'More like a mini-bus',
    category: 'suv',
    cad: '$140,000'
  },
  {
    image: 'images/sedan1.jpg',
    model: 'Maruti Suzukki',
    decription: 'Light Orange colour family car',
    category: 'sedan',
    cad: '$35,000'
  },
  {
    image: 'images/sedan2.jpg',
    model: 'BMW Classic Sedan',
    decription: 'White classic',
    category: 'sedan',
    cad: '$56,000'
  },
  {
    image: 'images/sedan3.jpg',
    model: 'Kia Model1',
    decription: 'White Sedan',
    category: 'sedan',
    cad: '$62,000'
  },
  {
    image: 'images/sedan4.jpg',
    model: 'Toyota A1',
    decription: 'Most sold model',
    category: 'sedan',
    cad: '$63,000'
  }
];

//form validation
function formValidation() {
  return validateSurname() && validateTextarea() && checkForm();
}

function validateTextarea() {
  if (description.value.trim().length == 0) {
    alert('No input! Please enter your comments.\n');
    description.value = '';
    description.focus();
    return false;
  }
  return true;
}
function validateSurname() {
  var allAlpha = true;
  var elem = document.querySelector('#name');
  var inputValue = elem.value.trim();

  if (inputValue.length == 0) {
    alert('No input! Please enter a meaningful name with all Alphabet letter.\n');
    return false;
  }

  inputValue = inputValue.toUpperCase();
  for (var i = 0; i < inputValue.length; i++) {
    if (inputValue.charAt(i) < 'A' || inputValue.charAt(i) > 'Z') {
      allAlpha = false;
    }
  }

  if (!allAlpha) {
    alert('Name : Please enter a meaningful name with all alphabet letters.');
    elem.focus();
    return false;
  }
  return true;
}

function checkForm() {
  var onechecked = false;

  var radio_num = document.form.help.length;
  for (var i = 0; i < radio_num; i++) {
    if (document.form.help[i].checked == true) {
      onechecked = true;
    }
  }
  if (!onechecked) {
    alert('None checked');
    return false;
  }
  return true;
}

function orderNumber() {
  let orderProb = document.getElementById('getOrderNum');
  let ON = document.getElementById('orderNumber');
  if (orderProb.checked === true) {
    ON.style.display = 'block';
  } else {
    ON.style.display = 'none';
  }
}
