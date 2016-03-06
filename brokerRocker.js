@@ -0,0 +1,80 @@
//var tiposCuenta = ["Ahorro"];
//constructor
function cuentaBancaria(propietario,tipo,balance,arruinado,valores) {
	//propiedades
	this.propietario = propietario;
	this.tipo = tipo;
	this.balance = balance;
	this.arruinado = arruinado;
	this.carteraValores = valores;
	//métodos
	this.retirar = function(cantidad){
		this.balance -= cantidad;
	}
	this.depositar = function(cantidad) {
		this.balance += cantidad;
	}
	this.transferir = function(cOrigen,cDestino,cantidad) {
		cOrigen.balance -= cantidad;
		cDestino.balance += cantidad;
	}
}
function jugador(nombre,cuentaBancaria) {
	this.nombre = nombre;
	this.cuentaBancaria = cuentaBancaria;
}
//clase valores experimental....
function valores(nombre,cotizacion) {
	this.nombre = nombre;
	this.cotizacion = cotizacion;
	this.recalcular = function(valor) {
		//comprobar cálculo...
		this.cotizacion *= (Math.floor(Math.random() * 401) - 100)/100;
	}
}

function checkCuenta(cuenta) {
	//comprueba si la cuenta está en números rojos
	if(cuenta.balance<=0)
		return false;
	else
		return true;
}
/*function cargarValores(cuenta,valor) {
cuenta.carteraValores.push();
}

function ranking() {a
	return null;
}*/

//ejemplos de objeto cuentaBancaria
var b = new cuentaBancaria("Hugo","Ahorro",100,false);
var c = new cuentaBancaria("Xisca","Ahorro",100,false);
//var valor1 = new valores("Apple",15);
var jugador1 = ("Hugo",b);
var jugador2 = ("Xisca",c);







/* otras pruebas*/

function cuentaBancaria(numeroCuenta, balance, fechaApertura,tipoCuenta) {
	this.numeroCuenta = numeroCuenta;
	this.balance = balance;
	this.fechaApertura = fechaApertura;
	this.tipoCuenta = tipoCuenta;

	//métodos
	this.abrir = function() {}
	this.cerrar = function() {}
	this.depositar = function() {}
	this.retirar = function() {}
}


