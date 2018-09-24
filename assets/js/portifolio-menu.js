document.addEventListener('DOMContentLoaded', function() {
	let db = connect('https://co-des-ef348.firebaseio.com/')

	let params = extract()

	let url = '/' + params['categoria'] + '/curso/' + params['curso']

	// Pegando arquivos do Firebase

	db.download(url, function(data) {
		replace('body', {
			'nome': data['nome'],
			'descricao': data['descricao'],
			'etapas': data['etapas'],
			'recursos': data['recursos'],
			'ministrador': data['ministrador'],
			'imagem': data['imagem'],
		})

		let documento = document.querySelector('.hidden')

		documento.classList.add('hidden')

		setTimeout(function() { documento.classList.remove('hidden') }, 50);
	})

})