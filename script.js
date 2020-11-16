function fonctionnalite1(){
    let doc = document.querySelector('footer');
    let number = 0;

    doc.addEventListener("click", function(){ 
        console.log("clique " + number);
        number += 1;
    });
}

function fonctionnalite2(){
    let doc = document.getElementById('navbarHeader');
    let button = document.getElementsByClassName('navbar-toggler')[0];
    
    button.addEventListener("click", function(){ 
        doc.classList.toggle("collapse");   
    });
}

function fonctionnalite3(){
    let doc = document.getElementsByClassName('card-text')[0];
    let button = document.querySelectorAll('.card .btn-group button')[1];

    button.addEventListener("click", function(){ 
        doc.style.color = "red";
    });
}

function fonctionnalite4(){
    let doc = document.getElementsByClassName('card-text')[1];
    let button = document.querySelectorAll('.card .btn-group button')[3];

    button.addEventListener("click", function(){ 
        doc.style.color = doc.style.color === "green" ? "black" : "green";
    });
}

function fonctionnalite5(){
    let doc = document.querySelector('link');
    let html = document.querySelector('html');
    let button = document.getElementsByClassName('navbar')[0];
    
    button.addEventListener("dblclick", function(event){ 
        doc.href = doc.href === "" ? "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" : "";
        event.stopPropagation();
    });

    html.addEventListener("dblclick", function(){
        doc.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    });
}

function fonctionnalite6(){
    let doc = document.querySelectorAll('.card');

    doc.forEach(card => {
        let btn = card.querySelectorAll('.btn-group button')[0];
        let text = card.getElementsByClassName('card-text')[0];
        let img = card.getElementsByClassName('card-img-top')[0];
        
        btn.addEventListener('mouseover', function(){
            text.style.fontSize = text.style.fontSize === "0px" ? "1rem" : "0px";
            img.style.width = img.style.width === "20%" ? "100%" : "20%";
        });
    });
}

function fonctionnalite7(){
    let button = document.querySelectorAll('main .btn')[1];

    button.addEventListener('click', function(){
        let last_card = document.querySelectorAll('.col-md-4')[5];
        let first_card = document.querySelectorAll('.col-md-4')[0];

        last_card.parentNode.insertBefore(last_card, first_card);

    });

}

function fonctionnalite8(){
    let button = document.querySelectorAll('main .btn')[0];

    button.addEventListener('click', function(){
        let last_card = document.querySelectorAll('.col-md-4')[5];
        let first_card = document.querySelectorAll('.col-md-4')[0];

        first_card.parentNode.appendChild(first_card);
    });
}

function fonctionnalite9(){
    let button = document.querySelector('.navbar strong');
    let modif_mode = false;

    button.addEventListener('click', function(event){
        if (modif_mode == true){
            modif_mode = false;
        }else if(modif_mode == false){
            modif_mode = true;
        }
        button.style.color = modif_mode === true ? "red" : "white";
    });
    document.onkeypress = function (e) {
        if (modif_mode == true){
            let html = document.querySelector('html');

            html.classList.add("col-4");
            switch(e.keyCode){
                case 97 :
                    html.classList.remove("ml-auto")
                    html.classList.add("mr-auto")
                break;

                case 121 :
                    html.classList.add("ml-auto")
                    html.classList.add("mr-auto")
                break;

                case 112 :
                    html.classList.add("ml-auto")
                    html.classList.remove("mr-auto")
                break;

                case 98 :
                    html.classList.remove("col-4");
                break;
            }
        }
    };
}

fonctionnalite1();
fonctionnalite2();
fonctionnalite3();
fonctionnalite4();
fonctionnalite5();
fonctionnalite6();
fonctionnalite7();
fonctionnalite8();
fonctionnalite9();