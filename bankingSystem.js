/*
    1. Create an online banking system with the following features:

* Users must be able to log in with a username and password.
* If the user enters the wrong credentials three times, the system must lock them out.
* The initial balance in the bank account is $2000.
* The system must allow users to deposit, withdraw, view, and transfer money.
* The system must display a menu for users to perform transactions.
*/

let balanceDeposito = 0;
let balanceInicial = 2000;
let balanceRetiro = 0;
let int = 1;

function login() {
    user = document.querySelector('#username').value;
    pass = document.querySelector('#pass').value;
    document.querySelector('.cabecera').innerHTML='<h2>MENU DE OPERACIONES</h2>';
    if (user === 'usuario' && pass === "12345") {
        document.querySelector('.mensaje').innerHTML=`Elije el numero correspondiente a la operacion a realizar <br>
        1.- Consulta de Saldo <br>
        2.- Depositar <br>
        3.- Retiro <br>
        4.- Transferir <br><br>
        <input type="number" id='opciones'> <button class="btn btn-primary" id="menu-opciones">Enter</button>
        `;
        document.querySelector('#username').value="";
        document.querySelector('#pass').value="";
        document.querySelector('#menu-opciones').addEventListener("click", menu);
        
    }else if(user === "" && pass === ""){
        document.querySelector('.mensaje').innerHTML="LOS CAMPOS NO DEBEN ESTAR EN BLANCO";
        document.querySelector('#username').value="";
        document.querySelector('#pass').value="";
    }else {
        
        if(int < 4){
            document.querySelector('#username').value="";
            document.querySelector('#pass').value="";
            document.querySelector('.mensaje').innerHTML='INTENTO: ' + int++;
        }else{
            document.querySelector('#username').value="";
            document.querySelector('#pass').value="";
            document.querySelector('.mensaje').innerHTML='CUENTA BLOQUEADA';
        }
    
    }
}

function menu() {
    let opt = Number(document.querySelector('#opciones').value);
    if(opt === 1){
        return consultar();
    }else if(opt === 2){
        document.querySelector('#opciones').value="";
        document.querySelector('.mensaje-opciones').innerHTML=`<h2>DEPOSITO</h2>
        Ingrese el monto a depositar: <br>
        <input type="numero" id="montodeposito">
        <button class="btn btn-success" id="botondeposito">DEPOSITAR</button>
        `;
        document.querySelector('#botondeposito').addEventListener("click", depositar); 
    }else if(opt === 3){
        document.querySelector('#opciones').value="";
        document.querySelector('.mensaje-opciones').innerHTML=`<h2>RETIRO</h2>
        Ingrese el monto a retirar: <br>
        <input type="numero" id="montoretiro">
        <button class="btn btn-success" id="botonretiro">RETIRAR</button>
        `;
        document.querySelector('#botonretiro').addEventListener("click", retirar);
    }else if(opt === 4){
        return 'Transferir'
    }else{
        return 'Opcion incorrecta'
    }
}

function consultar(){
    document.querySelector('#opciones').value="";
    document.querySelector('.mensaje-balance').innerHTML="<b>SALDO: " +"$" + (balanceInicial + balanceDeposito - balanceRetiro) + "</b>";
    return balanceInicial;
}

function depositar(){
        montodeposito = Number(document.querySelector('#montodeposito').value);
        balanceDeposito = montodeposito
        document.querySelector('#montodeposito').value="";
        document.querySelector('.mensaje-balance').innerHTML=`<b>DEPOSITO:  $` + montodeposito + `<br>
        BALANCE: $` + (balanceInicial + balanceDeposito - balanceRetiro)+ "</b>";
        return balanceDeposito;

}

function retirar(){
    let montoretiro = Number(document.querySelector('#montoretiro').value);
    document.querySelector('#montoretiro').value="";

    if (montoretiro <= balanceInicial){
        balanceRetiro = montoretiro
        document.querySelector('.mensaje-balance').innerHTML=`<b>RETIRO:  $` + montoretiro + `<br>
        BALANCE: $` + (balanceInicial + balanceDeposito - balanceRetiro) + "</b>";
        return balanceRetiro;
    }else{
        balanceInsuficiente = balanceInicial + balanceDeposito
        document.querySelector('.mensaje-balance').innerHTML=`<b>BALANCE INSUFICIENTE <br>
        BALANCE: $` + balanceInsuficiente;
        return balanceInsuficiente;
    }
}

function transferencia(){

}
document.querySelector('#boton').addEventListener("click", login);
