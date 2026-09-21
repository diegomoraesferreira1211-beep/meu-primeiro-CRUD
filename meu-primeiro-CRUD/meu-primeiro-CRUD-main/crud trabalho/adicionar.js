
const formulario =
    document.querySelector("#formFilme");

const mensagem =
    document.querySelector("#mensagem");


/*add filme*/

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



        const filmesSalvos =
            JSON.parse(
                localStorage.getItem("filmes")
            ) || [];


        /* ID */

        const proximoId =
            Number(
                localStorage.getItem("proximoId")
            ) || 1;


        /* nome de qualquer fime  */

        const novoFilme = {

            id: proximoId,

            nome: nome,

            categoria: categoria

        };


        /* adicionar */

        filmesSalvos.push(
            novoFilme
        );


        localStorage.setItem(
            "filmes",
            JSON.stringify(filmesSalvos)
        );


        /* atualiz ID */

        localStorage.setItem(
            "proximoId",
            proximoId + 1
        );


        mensagem.textContent =
            "Filme " +
            nome +
            " cadastrado com sucesso!";

        mensagem.classList.add(
            "sucesso"
        );


        /* reseta/deleta */

        formulario.reset();

    }
);


/* son de boton */

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
