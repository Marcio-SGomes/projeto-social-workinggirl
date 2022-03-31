import React from 'react';

function Anuncios () {
    return(
        <section>
            <section class="container mx-auto row my-4">
                <header class="container text-center my-5">
                    <h4 class="titulo-texto">
                        Estes são os <b>seus</b> anúncios feitos na <b>WorkingGirls&copy;</b>
                    </h4>
                    <br />
                    <br />
                </header>

                        <article class="container card mb-3 border-0 p-0 anuncios shadow">

                            <div class="row">
                                <img class="card-img-left imagemcard" src="@item.ImagemUrl" alt="Card image cap"/>

                                <div class="col-6 card-body">
                                    <h5 class="card-title">@item.Titulo</h5>
                                    <p class="card-text">@item.Descricao</p>
                                    <p class="card-text"><small class="text-success">@item.Valor.ToString("C")</small></p> @*ToString("C) trata como valor monetário, adiciona o R$ na frente"*@

                                    <a class="btn btn-primary" asp-action="Details" asp-route-id="@item.Id">Mais informações</a>
                                </div>
                            </div>
                        </article>
                <div>
                    <a class="btn btn-primary" asp-area="Identity" asp-page="/Account/Manage/Index">Voltar para o perfil</a>
                </div>
            </section>

            <br />

        </section>
    );
}

export default Anuncios;