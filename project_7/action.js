function darkmode() {
    document.getElementById('hide_password').style.color = "#ffffff"
    document.getElementById('show_password').style.color = "#ffffff"
    document.getElementById('lightmode').style.display = "inline"
    document.getElementById('darkmode').style.display = "none"
    body_tag = document.getElementById('body')
    body_tag.style.backgroundColor = "#2e2e2e"
    body_tag.style.color = "#ffffff"
}
function lightmode() {
    document.getElementById('hide_password').style.color = "#2e2e2e"
    document.getElementById('show_password').style.color = "#2e2e2e"
    document.getElementById('darkmode').style.display = "inline"
    document.getElementById('lightmode').style.display = "none"
    body_tag = document.getElementById('body')
    body_tag.style.backgroundColor = "#e8e8e8"
    body_tag.style.color = "#2e2e2e"
}
function check_input(object_id) {
    
    tag_id = `remark_${object_id.name}`
    input_id = `remark_${object_id.id}`
    tag_id = document.getElementById(tag_id)
    
    input_value = object_id.value

    if (input_value == "") {
        var txt = `Kindly fill in your ${object_id.name}. `
        tag_id.innerHTML = txt;
        
        if (object_id.name == "i_d") {
            object_id.name = "id"
        }
        input_id.focus();

        document.getElementById('hide_password').style.display="none"
        document.getElementById('show_password').style.display="none"       
        
        join.disabled = true
        
        if (object_id.name == "id") {   
            object_id.name = "i_d"
        }
        
    }else{
        tag_id.innerHTML = "&nbsp;";
        document.getElementById('hide_password').style.display="none"
        document.getElementById('show_password').style.display="inline"       
        
    }

    if (firstname.value != "" && lastname.value != "" && i_d.value != "" && email.value != "" && password.value != "" && referrer.value != "") {
        join.disabled = false;
    }else if(firstname.value == "" || lastname.value == "" || i_d.value == "" || email.value == "" || password.value == "" || referrer.value == ""){
        join.disabled = true;
    }
}
function show_password() {
    if (password.value != "") {
        password.type = "text"
        document.getElementById('hide_password').style.display="inline"
        document.getElementById('show_password').style.display="none"        
    }

    
    
    }
function hide_password() {
    if (password.value != "") {
        password.type = "password"
        document.getElementById('hide_password').style.display="none"
        document.getElementById('show_password').style.display="inline"
    }    
}
function submit() {
    if (firstname.value == "" || lastname.value == "" || i_d.value == "" || email.value == "" || password.value == "" || referrer.value == "") {
        message1.innerHTML = `<code class="m_text-red">Incomplete form</code>`
        join.disabled = false
    } else if (firstname.value != "" && lastname.value != "" && i_d.value != "" && email.value != "" && password.value != "" && referrer.value != "") {
        join.disabled = true;
        localStorage.setItem('firstname', firstname.value)
        localStorage.setItem('lastname', lastname.value)
        window.location.href = "./to_do_list.html";
    }
}

function hoveer() {
    for (let i = 0; i <= 5 ; i++) {
        const element = array[i];
        
    }
}