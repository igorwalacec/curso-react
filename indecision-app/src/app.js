//create app object title/subtitle

var app = {
    titulo : 'Título',
    subTitulo : 'Sub Titulo'
}

var template = (
    <div>
        <h1>{app.titulo}</h1>
        <p>{app.subTitulo}</p>
        <ol>
            <li>Item Um</li>
            <li>Item Dois</li>
        </ol>
        <div id="desafio">
        </div>
    </div>
);

//Desafio 1 
//Crair H1 com paragrafos abaixo com informações dentro do template padrao
var usuario = {
    nome : 'Igor Walace Cuevas',
    idade: 20,
    localizacao : 'São Paulo'
};

function ObterLocalizacao(localizacao){
    if (localizacao != null) {
        return localizacao;
    }else{
        return 'Sem localização';
    }
}

var template2 = (
    <div>
        <h1>{usuario.nome}</h1>
        <p>Idade: {usuario.idade} anos</p>
        <p>{ObterLocalizacao(usuario.localizacao)}</p>
    </div>
);
var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);

var divDesafio  = document.getElementById("desafio");
ReactDOM.render(template2, divDesafio);