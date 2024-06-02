let cityImg = document.getElementById("cityImg");
let city = document.getElementById("city");
let cityLocation = document.getElementById("cityLocation")
let landArea = document.getElementById("landArea");
let population = document.getElementById("population");
let description = document.getElementById("cityDesription");

function london(){
    cityImg.src ="cityImg/london.jpg";
    city.textContent = "London";
    cityLocation.textContent = "United Kingdom (UK)";
    landArea.textContent = "1,572 km²"
    population.textContent = "9,748,000";
    description.textContent ="London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city.";
}
function manila(){
    cityImg.src ="cityImg/manila.jpg";
    city.innerHTML = "Manila";
    cityLocation.textContent = "Philippines";
    landArea.textContent = "42.34 km²"
    population.textContent = "14,942,000";
    description.textContent ="Manila, the capital of the Philippines, is a densely populated bayside city on the island of Luzon, which mixes Spanish colonial architecture with modern skyscrapers. Intramuros, a walled city in colonial times, is the heart of Old Manila. It’s home to the baroque 16th-century San Agustin Church as well as Fort Santiago, a storied citadel and former military prison.";
}
function dubai(){
    cityImg.src ="cityImg/dubai.jpg";
    city.textContent = "Dubai";
    cityLocation.textContent = "United Arab Emirates";

    landArea.textContent = "4,114 km2"
    population.textContent = "3,051,000";
    description.textContent ="Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and lights choreographed to music. On artificial islands just offshore is Atlantis, The Palm, a resort with water and marine-animal parks.";
}
function tokyo(){
    cityImg.src ="cityImg/tokyo.jpg";
    city.innerHTML = "Tokyo";
    cityLocation.textContent = "Japan";
    landArea.textContent = "2,194 km²"
    population.textContent = "37,115,000";
    description.textContent ="Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens. The city's many museums offer exhibits ranging from classical art (in the Tokyo National Museum) to a reconstructed kabuki theater (in the Edo-Tokyo Museum).";
}


const themeCheckbox = document.getElementById('theme-checkbox');


function toggleColors() {
  const root = document.documentElement;

  if (themeCheckbox.checked) {
    document.querySelector("label").style.backgroundColor ="#F9F5E7";
   
    root.style.setProperty('--lightC1', '#000000');
    root.style.setProperty('--lightC2', '#F9F5E7');
    root.style.setProperty('--lightC3', '#950101');
    root.style.setProperty('--lightC4', '#A7727D');
    root.style.setProperty('--darkC1', '#F9F5E7');
  
    
  } else {
    // Apply light theme colors
    root.style.setProperty('--lightC1', '#A7727D');
    root.style.setProperty('--lightC2', '#EDDBC7');
    root.style.setProperty('--lightC3', '#F8EAD8');
    root.style.setProperty('--lightC4', '#F9F5E7');
    root.style.setProperty('--darkC1', '#000000');
  }
}

// Call the function initially to set initial state
toggleColors();

// Listen for changes to the checkbox
themeCheckbox.addEventListener('change', toggleColors);
