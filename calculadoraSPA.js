$(document).ready(function() {
	nueva_operacion = false;
	memoria = "";
	
	$('.operando, .num').click(function(){
								if(nueva_operacion){
									borrar()
									nueva_operacion = false;
								}
								rellenar($(this).text())
								});
								
	$('#igual').click(function(){
						try{
							operacion = eval($('#resultado').val())
							borrar()
							rellenar(operacion)
							nueva_operacion = true;
						}catch(err){
							borrar();
							rellenar("Syntax Error");
							nueva_operacion = true;	
						}					
						});
						
	$('#borrar_todo').click(function(){
						borrar()
					    });

	$('#borrar').click(function(){
						str = $('#resultado').val();
						$('#resultado').val(str.slice(0,str.length-2))
					    });

	$('#memoria').click(function(){
						if(memoria){
							rellenar(memoria);
						}else{
							memoria = $('#resultado').val();
						}
						});

	$('#memoria_reset').click(function(){
						memoria="";
						});

	function rellenar(str){
			$('#resultado').val($('#resultado').val() + str)
	}
	
	function borrar(){
		$('#resultado').val("");
	}

});




