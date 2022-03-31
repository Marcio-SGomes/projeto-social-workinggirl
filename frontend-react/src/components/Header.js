import React from 'react';

function Header () {
    return(
        <header>        
            <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow">
                <div class="container">
                    <a class="navbar-brand" asp-area="" asp-controller="Home" asp-action="Index">
                        <img src="~/img/logo.png" width="30" height="30" class="d-inline-block align-top" />
                        <b style="font-family: 'Qanelas Soft DEMO'; color:#5e2d9d">WorkingGirls</b>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                        <ul class="navbar-nav flex-grow-1 justify-content-end">
                            <li class="nav-item">
                                <a class="nav-link text-dark" asp-area="" asp-controller="Home" asp-action="Index">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark" asp-area="" asp-controller="Anuncios" asp-action="Index">Anúncios</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark" asp-area="" asp-controller="Home" asp-action="Contato">Sobre</a>
                            </li>
                        </ul>

                        <partial name="_LoginPartial" />
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;


