import React from 'react';

function Home () {
    return(
        <section>      
            <div class="container text-center mt-5">
                <h4 class="titulo-texto">
                    WorkingGirls
                </h4>
                <p class="paragrafo-texto mt-5">
                        Voltado para mulheres que se preocupam com outras mulheres. <br />
                        Uma rede de apoio que liga quem presta serviço a quem precisa.
                </p>
            </div>

            <br />

            <div class="container-fluid align-self-center bg-white p-5 mt-5 tamanho300 ">
                <div class="container mt-5">
                    <p class="paragrafo-texto text-center text-dark align-middle mt-5">
                        <b>
                            Iniciativa para fomento de negócios que favorecem o laço entre mulheres, garantindo mais segurança a que contrata e a quem é contratado, os perfis são verificados, com endereço, documentos e foto.
                        </b>
                    </p>
                </div>

            </div>
            <div id="myCarousel" class="carousel slide carousel-fade mt-4" data-ride="carousel">
                <div class="carousel-inner px-5">
                    <div class="carousel-item active">
                        <div class="mask flex-center">
                            <div class="container">
                                <div class="row align-items-center">
                                    <div class="col-md-7 col-12 order-md-1 order-2">
                                        <h4>
                                            Uma via de mão dupla.
                                        </h4>
                                        <p>
                                            Anuncie seus serviços ou busque uma prestadora.
                                        </p>
                                        <a asp-controller="Anuncios" asp-action="Index">CLIQUE AQUI!</a>
                                    </div>
                                    <div class="col-md-5 col-12 order-md-2 order-1"><img src="./img/imagem1.jpg" class="mx-auto" alt="slide"/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="mask flex-center">
                            <div class="container">
                                <div class="row align-items-center">
                                    <div class="col-md-7 col-12 order-md-1 order-2">
                                        <h4>
                                            Ofereça seus serviços
                                        </h4>
                                        <p>
                                            Visibilidade e facilidade para entrar em contato com mulheres que desejam  <br />
                                            receber serviços a domicílio ou de forma personalizada, <br />
                                            anuncie sua mão de obra e negocie direto com o contratante.
                                        </p>
                                        <a asp-controller="Anuncios" asp-action="Index">CLIQUE AQUI!</a>
                                    </div>
                                    <div class="col-md-5 col-12 order-md-2 order-1"><img src="./img/imagem2.jpg" class="mx-auto" alt="slide"/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="mask flex-center">
                            <div class="container">
                                <div class="row align-items-center">
                                    <div class="col-md-7 col-12 order-md-1 order-2">
                                        <h4>
                                            Procure profissionais
                                        </h4>
                                        <p>
                                            Temos profissionais das mais variadas especialidades, pra te deixar bonita,<br /> pra te ajudar com aquela obra,
                                            pra de dar um suporte estudantil, pra cuidar da sua saúde, tudo no conforto da sua casa e <br />
                                            com a segurança de ser uma mulher.
                                        </p>
                                        <a asp-controller="Anuncios" asp-action="Index">CLIQUE AQUI!</a>
                                    </div>
                                    <div class="col-md-5 col-12 order-md-2 order-1"><img src="./img/imagem3.jpg" class="mx-auto" alt="slide"/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Previous</span> </a> <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Next</span> </a>
            </div>
        </section>
    );
}

export default Home;


