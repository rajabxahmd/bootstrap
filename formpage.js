function validateEmail(email) {
    const patt = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return patt.test(email);
}
function validateUsername(username){
    const patt= /^[a-zA-Z0-9]+$/;
    return patt.test(username);
}
function validateMobileNumber(mobilenumber){
    const patt= /^\d{10}$/;
    return patt.test(mobilenumber);
}

const Form = document.querySelector('form');

Form.addEventListener('submit',(e)=>{
    const email = document.getElementById("mailid");
    const userName = document.getElementById("username");
    const mobileNumber = document.getElementById('mobilenumber');

    const emailValue = email.value.trim();
    const userNameValue = userName.value.trim();
    const mobileValue = mobileNumber.value.trim();
    let isvalid= true;

    if(!validateEmail(emailValue)){
        e.preventDefault();
        alert('incorrect email address');
        isvalid= false;
    }
    
    if(!validateUsername(userNameValue)){
        e.preventDefault();
        alert('incorrect username');
        isvalid= false;
    }

    if(!validateMobileNumber(mobileValue)){
        e.preventDefault();
        alert('incorrect mobile number');
        isvalid= false;
    }
    if(isvalid){
    e.preventDefault();
    // const arr=[];
    // arr.push(emailValue);
    // arr.push(userNameValue);
    // arr.push(mobileValue);
    toggleButtonLoading();
    
    const formdata = new FormData(Form);

    const object = {};
    formdata.forEach(function(key,value){
        object[key]=value;
    })
    const jsonformdata = JSON.stringify(object);

    setTimeout(()=>{
    console.log(jsonformdata);
    toggleButtonText();
    alert('success');
    },5000);
    }
});



const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');

const fillName = () => {
    const fullName = document.getElementById('full-name');
    fullName.value = firstName.value + " " + lastName.value;
}

firstName.addEventListener('input', fillName); 
lastName.addEventListener('input', fillName);


const maxDate = new Date().toISOString().split('T')[0];
const dateOfBirth = document.getElementById('dob');
dateOfBirth.max = maxDate;

dateOfBirth.addEventListener('input', () => {
    const dobstr = new Date(dateOfBirth.value);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - dobstr.getFullYear();  
    document.getElementById('age').value=age;
});

function toggleButtonLoading(){
    const submitLoading = document.getElementById('submitloading')
    const submitText = document.getElementById("submittext");
    submitText.style.visibility = 'hidden';
    submitLoading.style.visibility = 'visible';
} 

function toggleButtonText(){
    const submitLoading = document.getElementById('submitloading')
    const submitText = document.getElementById("submittext");
    submitText.style.visibility = 'visible';
    submitLoading.style.visibility = 'hidden';
}




