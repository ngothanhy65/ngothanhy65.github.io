
const divMainContainer=document.querySelector('.main-container');
const divEleContainer = document.createElement('div');
const h1ElementContainer = document.createElement('h1');
const btnElementContainer = document.createElement('button');
 // Thêm phần tử divEleContainer vào  divMainContainer

// Thêm phần tử h1 vào  divMainContainer
// Thêm phần tử btnElementContainer vào  divMainContainer
h1ElementContainer.textContent='FE-KTC3';
btnElementContainer.textContent='JOIN GANG'; 
// them class vao divEleContainer
 divEleContainer.className =`container`;
 btnElementContainer.className=`btn`;
 divMainContainer.appendChild(divEleContainer);
 divEleContainer.appendChild(h1ElementContainer);
 divEleContainer.appendChild(btnElementContainer);

 // phan popup
 const divPopupContainer =document.createElement('div');
 divPopupContainer.className =`popup-container active`;
 const h4PopupContainer = document.createElement('h4');
 h4PopupContainer.textContent="20% OFF Offer";
 const labelPopupContainer = document.createElement('label');

//email
 labelPopupContainer.textContent="Enter your email address";
 const inputPopupContainer = document.createElement('input');
 inputPopupContainer.type ="email";
 inputPopupContainer.placeholder="Enter your email address";
 inputPopupContainer.className=`input`;
 inputPopupContainer.id=`input-email`;
// name
const labelPopupContainerName = document.createElement('label');
 labelPopupContainerName.textContent="Your name";
 const inputPopupContainerName = document.createElement('input');
 inputPopupContainerName.type ="text";
 inputPopupContainerName.placeholder="Enter your name";
  inputPopupContainerName.className=`input`;
  inputPopupContainerName.id=`input-name`;
// birthday
const labelPopupContainerBirthDay = document.createElement('label');
 labelPopupContainerBirthDay.textContent="Your Birthday";
 const inputPopupContainerBirthDay = document.createElement('input');
 inputPopupContainerBirthDay.type ="datetime-local";
 

 //  <input type="datetime-local" id="birthdaytime" name="birthdaytime">
 inputPopupContainerBirthDay.placeholder="Enter your birthday";
 inputPopupContainerBirthDay.className=`input`;
  inputPopupContainerBirthDay.id=`input-birthday`;
 const btnPopupContainer = document.createElement('button');
btnPopupContainer.textContent = "JOIN";
btnPopupContainer.className = `popup-btn`;
// notion  Successfull
const labelPopupContainerNotionSuccess = document.createElement('label');
 labelPopupContainerNotionSuccess.textContent="Successfull";
 labelPopupContainerNotionSuccess.className = `notion-label active`;
//notion  Unsuccessfull
 const labelPopupContainerNotionUnSuccess = document.createElement('label');
 labelPopupContainerNotionUnSuccess.textContent="Unsuccessfull";
 labelPopupContainerNotionUnSuccess.className = `notion-label active`;


const divIconPopupContainer = document.createElement('div');
divIconPopupContainer.className = `close-icon`;
const svgIconPopupContainer = document.createElement('i')
svgIconPopupContainer.className = `fas fa-times fa-2x`;
divMainContainer.appendChild(divPopupContainer);
divPopupContainer.appendChild(h4PopupContainer);
divPopupContainer.appendChild(labelPopupContainer);
divPopupContainer.appendChild(inputPopupContainer);
divPopupContainer.appendChild(labelPopupContainerName);
divPopupContainer.appendChild(inputPopupContainerName);
divPopupContainer.appendChild(labelPopupContainerBirthDay);
divPopupContainer.appendChild(inputPopupContainerBirthDay);
divPopupContainer.appendChild(btnPopupContainer);
divPopupContainer.appendChild(labelPopupContainerNotionSuccess);
divPopupContainer.appendChild(labelPopupContainerNotionUnSuccess);
divPopupContainer.appendChild(divIconPopupContainer);
divIconPopupContainer.appendChild(svgIconPopupContainer);

 btnElementContainer.addEventListener('click', () => {
  divPopupContainer.className = `popup-container `;
  divEleContainer.className =`container active`;

  });
divIconPopupContainer.addEventListener('click', () => {
  divPopupContainer.className = `popup-container active`;
  divEleContainer.className =`container `;
});

btnPopupContainer.addEventListener('click', () => {
  const email = inputPopupContainer.value;
  const name = inputPopupContainerName.value;
  const birthday = inputPopupContainerBirthDay.value;

  // Kiểm tra email, name và birthday có hợp lệ hay không.
  const isValidEmail = checkEmail(email);
  const isValidName = checkName(name);
  const isValidBirthday = checkBirthday(birthday);

  // Nếu tất cả đều hợp lệ, hiển thị thông báo thành công.
  if (isValidEmail && isValidName && isValidBirthday) {
    labelPopupContainerNotionSuccess.className = `notion-label`;
    labelPopupContainerNotionUnSuccess.className = `notion-label active`;
  } else {
    // Nếu có lỗi, hiển thị thông báo lỗi.

    labelPopupContainerNotionSuccess.className = `notion-label active`;
    labelPopupContainerNotionUnSuccess.className = `notion-label`;

    // Hiển thị thông báo lỗi cụ thể cho từng trường.
    if (!isValidEmail) {
      alert('Email không hợp lệ');
    }
    if (!isValidName) {
      alert('Tên không hợp lệ');
    }
    if (!isValidBirthday) {
      alert('Ngày sinh không hợp lệ');
    }
  }
  console.log(isValidBirthday); // true // true

});






function checkEmail(email) {
  // Kiểm tra email có chứa '@' và '.'.
  if (!email.includes('@') || !email.includes('.')) {
    return false;
  }
  // Tách email thành hai phần: username và domain.
  const [username, domain] = email.split('@');
  // Kiểm tra username có chứa ký tự đặc biệt hay không.
  for (let i = 0; i < username.length; i++) {
    const char = username[i];
    if (!char.match(/^[a-zA-Z0-9._-]+$/)) {
      return false;
    }
  }
  // Kiểm tra domain có chứa ký tự đặc biệt hay không.
  for (let i = 0; i < domain.length; i++) {
    const char = domain[i];
    if (!char.match(/^[a-zA-Z0-9.-]+$/)) {
      return false;
    }
  }
  // Nếu email vượt quá 254 ký tự, trả về False.
  if (email.length > 254) {
    return false;
  }
  // Nếu email hợp lệ, trả về True.
  return true;
}
function checkName(name) {
  const nameRegex = /^[a-zA-Z\s]+$/;
  return nameRegex.test(name);
}
function checkBirthday(birthday) {
  // check birthday no bigger than current date
  const currentDate = new Date();
  const birthDate = new Date(birthday);
  let result= true;
  if(birthDate >= currentDate){
    return result =false;
  }
  return result;
}
