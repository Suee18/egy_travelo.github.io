const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", 
  "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", 
  "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Côte d'Ivoire", "Cabo Verde", 
  "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", 
  "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Democratic Republic of the Congo", "Denmark", "Djibouti", 
  "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. Swaziland)", 
  "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", 
  "Guinea-Bissau", "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", 
  "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", 
  "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", 
  "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", 
  "Mozambique", "Myanmar (formerly Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", 
  "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", 
  "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", 
  "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", 
  "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", 
  "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", 
  "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", 
  "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];


countries.sort();


const selectElement = document.getElementById('nationality');


countries.forEach(country => {
  const option = document.createElement('option');
  option.value = country;
  option.textContent = country;
  selectElement.appendChild(option);
});

function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

const form = document.getElementById('form1');
const namee = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password')
const country = document.getElementById('nationality');
const gender = document.getElementById('gender');
const birthday = document.getElementById('birthday');

form1.addEventListener('submit', e => {
    validateForm();
});



function validateForm() {
    const nameValue = namee.value.trim();
    const passValue = password.value.trim();
    const emailValue = email.value.trim();
    const countryValue = country.value.trim();

    var gender = document.getElementById('gender').value

    var smalln= document.getElementById('n');
    var smalle= document.getElementById('e');
    var smallp = document.getElementById('p');
    var smallc = document.getElementById('c');
    var smallb = document.getElementById('b');

  var nameErr = true;
  var emailErr = true;
  var countryErr = true;
  var genderErr = true; 
  var passErr = true;
  var birthErr = true;
  
  if(nameValue == "") {
      printError("n", "Please enter your name");
      smalln.style.visibility = 'visible';
  } else {
      var regex1 = /^[a-zA-Z\s]+$/;                
      if(regex1.test(nameValue) === false) {
          printError("n", "Please enter a valid name");
          smalln.style.visibility = 'visible';
      } else {
          printError("n", "");
          nameErr = false;
      }
  }
  
  // Validate email address
  if(emailValue == "") {
      printError("e", "Please enter your email address");
      smalle.style.visibility = 'visible';
  } else {
      var regex = /^\S+@\S+\.\S+$/;
      if(regex.test(emailValue) === false) {
          printError("e", "Please enter a valid email address");
          smalle.style.visibility = 'visible';
      } else{
          printError("e", "");
          emailErr = false;
      }
  }
  
  // Validate Password
  if(passValue == "") {
    printError("p", "Please enter a password");
    smallp.style.visibility = 'visible';
} else {
  var regex2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;                
      if(regex2.test(passValue) === false) {
          printError("p", "Your password should: Contain at least one lowercase letter. Contain at least one uppercase letter. Contain at least one digit. Contain at least one special character from the set @$!%*?&. Be at least 8 characters long.");
          smallp.style.visibility = 'visible';
      } else {
        printError("p", "");
        passErr = false;
      }
    
    }
  }

  //Validate gender
  function checkSelection(){
    genderErr = document.getElementById("genderErr");
    if(document.querySelector('input[name="sex"]:checked') == null){
      genderErr.style.display = 'block';
      genderErr.textContent='Please choose your gender';
    }
    else{
      genderErr.style.display = 'none';
      genderErr = false;
    }
  }

