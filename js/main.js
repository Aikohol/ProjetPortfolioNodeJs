		$(document).ready(function(){
			//Au chargement du site, on charge la page d'accueil : home.html
			page('index');
		});
		//Fonction permettant de charger un contenu de page dans la div centrale en ajax
		function page(page){
			// alert(page);
			$('.window-page').load(page+'.html',function(){
				// switch(page){
				// 	case 'chat':
				// 	break;
				// }
			});
		}

		$('#profile').on('click', function() {
			window.location.replace("./projects/test");
		});
		// //Fonctions permettant d'afficher et de faire disparaitre le pr�loader � chaques action ajax
		$(document).ajaxStop(function() {
			$('#content').fadeOut(200);
		});
		$(document).ajaxStart(function() {
	  		$('content').show();
		});
