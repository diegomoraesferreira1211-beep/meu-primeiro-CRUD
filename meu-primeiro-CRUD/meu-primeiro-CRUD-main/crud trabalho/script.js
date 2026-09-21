
/* =========================
   CONFIGURAÇÕES
========================= */

const listaFilmes = document.querySelector("#listaFilmes");

const categorias = [
    "Filmes que eu amei",
    "Filmes que eu chorei",
    "Filmes que eu revi muitas vezes",
    "Filmes que eu odiei"
];


const filmesIniciais = [
    {
        id: 1,
        nome: "pitatas do caribe",
        categoria: "Filmes que eu amei"
    },
    {
        id: 2,
        nome: "À Procura da Felicidade",
        categoria: "Filmes que eu chorei"
    },
    {
        id: 3,
        nome: "a era do gelo",
        categoria: "Filmes que eu revi muitas vezes"
    },
    {
        id: 4,
        nome: "REC",
        categoria: "Filmes que eu odiei"
    }
];




let filmesSalvos =
    JSON.parse(localStorage.getItem("filmes")) || [];


if (filmesSalvos.length === 0) {

    filmesSalvos = filmesIniciais;

    localStorage.setItem(
        "filmes",
        JSON.stringify(filmesSalvos)
    );

    localStorage.setItem(
        "proximoId",
        "5"
    );
}


/* ai coloca os proximo id que e o nome dos filmes */

if (!localStorage.getItem("proximoId")) {

    const maiorId = filmesSalvos.reduce(
        function (maior, filme) {

            return filme.id > maior
                ? filme.id
                : maior;

        },
        0
    );

    localStorage.setItem(
        "proximoId",
        maiorId + 1
    );
}


/* as categorias que os filmes podem se encaxar
*/

categorias.forEach(function (nomeCategoria) {

    const categoria = document.createElement("div");

    categoria.classList.add("categoria");


    const tituloCategoria =
        document.createElement("h2");

    tituloCategoria.textContent =
        nomeCategoria;


    categoria.appendChild(
        tituloCategoria
    );


    const filmesDaCategoria =
        filmesSalvos.filter(function (filme) {

            return filme.categoria === nomeCategoria;

        });


    filmesDaCategoria.forEach(function (filme) {

        const filmeDiv =
            document.createElement("div");

        filmeDiv.classList.add("filme");


        const nomeFilme =
            document.createElement("span");

        nomeFilme.textContent =
            filme.nome;


        const acoes =
            document.createElement("div");

        acoes.classList.add("acoes");


        const botaoEditar =
            document.createElement("button");

        botaoEditar.textContent =
            "Editar";


        botaoEditar.addEventListener(
            "click",
            function () {

                localStorage.setItem(
                    "filmeEditar",
                    filme.id
                );

                window.location.href =
                    "editar.html";

            }
        );


        /* excluir que nao esclui na real ele retorna o botton a 0 */

        const botaoExcluir =
            document.createElement("button");

        botaoExcluir.textContent =
            "Excluir";


        botaoExcluir.addEventListener(
            "click",
            function () {

                const confirmar =
                    confirm(
                        "Tem certeza que deseja excluir o filme " +
                        filme.nome +
                        "?"
                    );


                if (confirmar) {

                    filmesSalvos =
                        filmesSalvos.filter(
                            function (item) {

                                return item.id !== filme.id;

                            }
                        );


                    localStorage.setItem(
                        "filmes",
                        JSON.stringify(filmesSalvos)
                    );


                    location.reload();

                }

            }
        );


        acoes.append(
            botaoEditar,
            botaoExcluir
        );


        filmeDiv.append(
            nomeFilme,
            acoes
        );


        categoria.appendChild(
            filmeDiv
        );

    });


    listaFilmes.appendChild(
        categoria
    );

});

// a funcao que faz o barulho do botton do minecraft//

document.addEventListener(
    "click",
    function (event) {

        if (
            event.target.tagName === "BUTTON"
        ) {

            const som =
                new Audio(
                    "./sons-e-evideo/Menu-Button.mp3"
                );

            som.volume = 1;

            som.play().catch(
                function (erro) {

                    console.error(
                        "Erro ao tocar o som:",
                        erro
                    );

                }
            );

        }

    }
);

