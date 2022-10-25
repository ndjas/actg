(function(){



var afficherMenu= function(a)
{
	var li=a.parentNode
		var div=a.parentNode.parentNode.parentNode.parentNode
			if(li.classList.contains('active'))
			{
							return false
			}
					//on retire la classe  active
				div.querySelector('.elmts .active').classList.remove('active')
					//ajout a li  la classe active
				li.classList.add('active')

				div.querySelector('.tab-content.active').classList.remove('active')
				div.querySelector(a.getAttribute('href')).classList.add('active')
}

var elmts = document.querySelectorAll('.elmts  a')
			for (var i=0; i < elmts.length; i++){
				elmts[i].addEventListener('click', function(e){
					afficherMenu(this)




				})

			}
			//gestion du hash
			var hashchange=function(){

				var hash=window.location.hash
				var a=document.querySelector('a[href="'+hash+'"]')
				if(a!== null && !a.parentNode.classList.contains('active'))
				{
							afficherMenu(a)
				}


			}
			window.addEventListener('hashchange',hashchange)
			hashchange()






})()
