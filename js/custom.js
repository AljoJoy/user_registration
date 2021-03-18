function fill_states(){
    document.getElementById("state").innerHTML = "";   
    var selected_country = document.getElementById('country').value;
    states_array = [];
    switch(selected_country){
        case 'India':
            states_array = ['Kerala','Karnataka','Tamilnadu','Maharashtra','Andhrapradesh'];
            break;
        case 'US':
            states_array = [' Alabama','Alaska','Arizona','Arkansas','California'];
            break;
        case 'China':
            states_array = ['Fujian Province','Guangdong Province','Gansu Province','Guizhou Province','Henan Province'];
            break;
        case 'Nepal':
            states_array = ['Bagmati Province','Gandaki Province','Lumbini Province','Karnali Province','Sudurpashchim Province'];
            break;
        case  'Srilanka':
            states_array = ['Ampara','Anuradhapura','Badulla','Batticaloa','Colombo'];
            break;
        default:
            states_array = ['Select State'];                  
    }
    for(i=0;i<5;i++){
        var state_select_box = document.getElementById("state");
        var option = document.createElement("option");
        option.text = states_array[i];
        state_select_box.add(option);         
    }
}
function validateForm(){    
    var first_name = document.getElementById("first_name");
    var last_name = document.getElementById("last_name");
    var dob = document.getElementById("dob");
    var addrs1 = document.getElementById("addrs1");
    var addrs2 = document.getElementById("addrs2");    
    var city = document.getElementById("city");
    var postal_code = document.getElementById("postal_code");
    var country = document.getElementById("country");
    var state = document.getElementById("state");
    
    if(first_name.value == ""){
        alert("First name can't be empty");
        first_name.focus();
        return false;
    }
    if (!/^[a-zA-Z]*$/g.test(first_name.value)) {
        alert("Only letters are allowed for First name field");
        first_name.focus();
        return false;
    }
    if(last_name.value == ""){
        alert("Last name can't be empty");
        return false;
    }
    if (!/^[a-zA-Z]*$/g.test(last_name.value)) {
        alert("Only letters are allowed for last name field");
        first_name.focus();
        return false;
    }
    if(dob.value == ""){
        alert("Date of Birth can't be empty");
        return false;
    }
    if(addrs1.value == ""){
        alert("Address Line 1 can't be empty");
        return false;
    }
    if(city.value == ""){
        alert("City field can't be empty");
        return false;
    }
    if (!/^[a-zA-Z]*$/g.test(city.value)) {
        alert("Only letters are allowed for city field");
        first_name.focus();
        return false;
    }
    if(postal_code.value == ""){
        alert("Postal Code field can't be empty");
        return false;
    }
    if (!/^[0-9]*$/g.test(postal_code.value)) {
        alert("Only numbers are allowed for postal code field");
        first_name.focus();
        return false;
    }
    if(country.value == ""){
        alert("Country field can't be empty");
        return false;
    }
    if(state.value == ""){
        alert("State field can't be empty");
        return false;
    }    
}