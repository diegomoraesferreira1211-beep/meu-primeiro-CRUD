
const formulario =
    document.querySelector("#formFilme");

const mensagem =
    document.querySelector("#mensagem");


/* =========================
   ADICIONAR FILME
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


        /* PEGAR FILMES */

        const filmesSalvos =
            JSON.parse(
                localStorage.getItem("filmes")
            ) || [];


        /* PEGAR PRÓXIMO ID */

        const proximoId =
            Number(
                localStorage.getItem("proximoId")
            ) || 1;


        /* CRIAR FILME */

        const novoFilme = {

            id: proximoId,

            nome: nome,

            categoria: categoria

        };


        /* ADICIONAR */

        filmesSalvos.push(
            novoFilme
        );


        localStorage.setItem(
            "filmes",
            JSON.stringify(filmesSalvos)
        );


        /* ATUALIZAR ID */

        localStorage.setItem(
            "proximoId",
            proximoId + 1
        );


        /* MENSAGEM */

        mensagem.textContent =
            "Filme " +
            nome +
            " cadastrado com sucesso!";

        mensagem.classList.add(
            "sucesso"
        );


        /* LIMPAR FORMULÁRIO */

        formulario.reset();

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
