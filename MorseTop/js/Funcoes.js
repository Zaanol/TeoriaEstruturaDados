const arvore = {}, VetorCaracteres = {}, VetorLetras = {};
montarArvore(arvore);
var cont, buscas = 0;
var decodificacao = "";
var erroCodificacao = new Boolean(false);

function montarArvore(tree){
	tree.value = "Start";
	tree.right = ({
		value : "T",
		morse : "-",
		right : {
			value : "M",
			morse : "--",
			right : {
				value : "O",
				morse : "---",
				right : {
					value : " ",
					morse : "----",
					right : {
						value : "0",
						morse : "-----",
					},
					left : {
						value : "9",
						morse : "----.",
					},
				},
				left : {
					value : " ",
					morse : "---.",
					right : {
						value : " ",
						morse : "---.-",
					},
					left : {
						value : "8",
						morse : "---..",
					},
				},
			},
			left : {
				value : "G",
				morse : "--.",
				right : {
					value : "Q",
					morse : "--.-",
					right : {
						value : " ",
						morse : "--.--",
					},
					left : {
						value : " ",
						morse : "--.-.",
					},
				},
				left : {
					value : "Z",
					morse : "--..",
					right : {
						value : " ",
						morse : "--..-",
					},
					left : {
						value : "7",
						morse : "--...",
					},
				},
			},
		},
		left : {
			value : "N",
			morse : "-.",
			right : {
				value : "K",
				morse : "-.-",
				right : {
					value : "Y",
					morse : "-.--",
					right : {
						value : " ",
						morse : "-.---",
					},
					left : {
						value : " ",
						morse : "-.--.",
					},
				},
				left : {
					value : "C",
					morse : "-.-.",
					right : {
						value : " ",
						morse : "-.-.-",
					},
					left : {
						value : " ",
						morse : "-.-..",
					},
				},
			},
			left : {
				value : "D",
				morse : "-..",
				right : {
					value : "X",
					morse : "-..-",
					right : {
						value : " ",
						morse : "-..--",
					},
					left : {
						value : "/",
						morse : "-..-.",
					},
				},
				left : {
					value : "B",
					morse : "-...",
					right : {
						value : "=",
						morse : "-...-",
					},
					left : {
						value : "6",
						morse : "-....",
					},
				},
			},
		},
	});
	tree.left = ({
		value : "E",
		morse : ".",
		right : {
			value : "A",
			morse : ".-",
			right : {
				value : "W",
				morse : ".--",
				right : {
					value : "J",
					morse : ".---",
					right : {
						value : "1",
						morse : ".----",
					},
					left : {
						value : " ",
						morse : ".---.",
					},
				},
				left : {
					value : "P",
					morse : ".--.",
					right : {
						value : " ",
						morse : ".--.-",
					},
					left : {
						value : " ",
						morse : ".--..",
					},
				},
			},
			left : {
				value : "R",
				morse : ".-.",
				right : {
					value : " ",
					morse : ".-.-",
					right : {
						value : " ",
						morse : ".-.--",
					},
					left : {
						value : "+",
						morse : ".-.-.",
					},
				},
				left : {
					value : "L",
					morse : ".-..",
					right : {
						value : " ",
						morse : ".-..-",
					},
					left : {
						value : " ",
						morse : ".-...",
					},
				},
			},
		},
		left : {
			value : "I",
			morse : "..",
			right : {
				value : "U",
				morse : "..-",
				right : {
					value : " ",
					morse : "..--",
					right : {
						value : "2",
						morse : "..---",
					},
					left : {
						value : " ",
						morse : "..--.",
					},
				},
				left : {
					value : "F",
					morse : "..-.",
					right : {
						value : " ",
						morse : "..-.-",
					},
					left : {
						value : " ",
						morse : "..-..",
					},
				},
			},
			left : {
				value : "S",
				morse : "...",
				right : {
					value : "V",
					morse : "...-",
					right : {
						value : "3",
						morse : "...--",
					},
					left : {
						value : " ",
						morse : "...-.",
					},
				},
				left : {
					value : "H",
					morse : "....",
					right : {
						value : "4",
						morse : "....-",
					},
					left : {
						value : "5",
						morse : ".....",
					},
				},
			},
		},
	});
}

function buscarLetra(tree, value, comprimento){
	buscas++;
	if(comprimento !== 0){
		if(VetorCaracteres[value][cont] == "-"){
			comprimento--;
			cont++;
			try{
				return buscarLetra(tree.right, value, comprimento);
			}catch(e){
				erroCodificacao = true;
			}
		}else if(VetorCaracteres[value][cont] == "."){
			comprimento--;
			cont++;
			try{
				return buscarLetra(tree.left, value, comprimento);
			}catch(e){
				erroCodificacao = true;
			}
		}else{
			erroCodificacao = true;
		}
	}else if(comprimento == 0){
		decodificacao += tree.value;
		cont = 0;
	}
}

function buscarLetra2(tree, valor){
	buscas++;
	if(valor != tree.morse){
		if(tree.right){
			buscarLetra2(tree.right, valor);
		}
		if(tree.left){
			buscarLetra2(tree.left, valor);
		}
	}else{
		decodificacao += tree.value;
	}
}

function buscarMorse(tree, valor){
	buscas++;
	if(valor == " "){
		decodificacao += "---- "
	}else{
		if(valor != tree.value){
			if(tree.right){
				buscarMorse(tree.right, valor);
			}
			if(tree.left){
				buscarMorse(tree.left, valor);
			}
		}else{
			decodificacao += tree.morse + " ";
		}
	}
}

function separarValor(valor, tipo){
	if(valor){
		decodificacao = "";
		cont = 0;
		if(tipo == 1){
			if(valor.indexOf("-") != -1 || valor.indexOf(".") != -1){
				var VetorPalavras = valor.split(" ");
				for (var i = 0; i <= VetorPalavras.length - 1; i++) {
					VetorCaracteres[i] = VetorPalavras[i].split("");
					buscarLetra(arvore, i, VetorCaracteres[i].length);
				}
			}else{
				decodificacao = "A conversão retornou erros";
			}
		}else if(tipo == 2){
			if(valor.indexOf("-") != -1 || valor.indexOf(".") != -1){
				VetorLetras[1] = valor.split(" ");
				for (var i = 0; i <= VetorLetras[1].length - 1; i++) {
					buscarLetra2(arvore, VetorLetras[1][i]);
				}
			}else{
				decodificacao = "A conversão retornou erros";
			}
		}else if(tipo == 3){
			if(valor.indexOf("-") != -1 || valor.indexOf(".") != -1){
				decodificacao = "A conversão retornou erros";
			}else{
				VetorLetras[0] = valor.toUpperCase().split("");
				for (var i = 0; i <= VetorLetras[0].length - 1; i++) {
					buscarMorse(arvore, VetorLetras[0][i]);
				}
			}
		}
		if(erroCodificacao == true){
			decodificacao = "A conversão retornou erros, porém a frase ficou: " + decodificacao;
		}
		document.getElementById("resultado").innerHTML = decodificacao;
		document.getElementById("log").innerHTML = "O sistema percorreu " + buscas + " nó(s)";
		buscas = 0;
		erroCodificacao = false;
	}else{
		document.getElementById("resultado").innerHTML = "Não é possível converter um campo nulo";
	}
}

document.addEventListener('keydown', function (event) {
    if (event.keyCode !== 13) return;
      separarValor(texto.value, opcao.value);
      event.preventDefault();
      return false;
});