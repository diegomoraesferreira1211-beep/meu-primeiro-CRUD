
const formulario =
    document.querySelector("#formEditar");

const mensagem =
    document.querySelector("#mensagem");


/* =========================
   PEGAR ID DO FILME
========================= */

const idFilme =
    Number(
        localStorage.getItem("filmeEditar")
    );


/* =========================
   PEGAR FILMES
========================= */

const filmesSalvos =
    JSON.parse(
        localStorage.getItem("filmes")
    ) || [];


/* =========================
   ENCONTRAR FILME
========================= */

const filme =
    filmesSalvos.find(
        function (item) {

            return item.id === idFilme;

        }
    );


/* =========================
   VERIFICAR SE EXISTE
========================= */

if (!filme) {

    mensagem.textContent =
        "Filme não encontrado!";

    mensagem.classList.add(
        "erro"
    );

}


/* =========================
   PREENCHER FORMULÁRIO
========================= */

if (filme) {

    document.querySelector("#nome").value =
        filme.nome;


    document.querySelector("#categoria").value =
        filme.categoria;

}


/* =========================
   SALVAR ALTERAÇÃO
========================= */

formulario.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const nome =
            document
                .querySelector("#nome")
                .value
                .trim();


        const categoria =
            document
                .querySelector("#categoria")
                .value;


        mensagem.classList.remove(
            "erro",
            "sucesso"
        );


        /* VERIFICAR CAMPOS */

        if (
            nome === "" ||
            categoria === ""
        ) {

            mensagem.textContent =
                "Preencha todos os campos!";

            mensagem.classList.add(
                "erro"
            );

            return;

        }


        /* VERIFICAR FILME */

        if (!filme) {

            mensagem.textContent =
                "Filme não encontrado!";

            mensagem.classList.add(
                "erro"
            );

            return;

        }


        /* ALTERAR FILME */

        filme.nome =
            nome;

        filme.categoria =
            categoria;


        /* SALVAR */

        localStorage.setItem(
            "filmes",
            JSON.stringify(filmesSalvos)
        );


        /* MENSAGEM */

        mensagem.textContent =
            "Filme atualizado com sucesso!";

        mensagem.classList.add(
            "sucesso"
        );


        /* VOLTAR PARA INÍCIO */

        setTimeout(
            function () {

                window.location.href =
                    "inicio.html";

            },
            800
        );

    }
);


/* =========================
   SOM DOS BOTÕES
========================= */

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
