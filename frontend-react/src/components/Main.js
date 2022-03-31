import React from "react";
import Home from "../pages/Home";
import Anuncios from "../pages/Anuncios";
import Perfil from "../pages/Perfil";
import Contato from "../pages/Contato";

import Routes from "../routes";

function Main (){

    const atual = window.location.href;

    return(
        <main role="main" className="container fundo-gradiente pb-3">
            <div class="modal" id="modalCookie"tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Cookies</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Ao utilizar o site da WorkingGirls, você concorda com nosso <a asp-area="" asp-controller="Home" asp-action="CookiesPolicy">termo e política de privacidade</a>.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success accept">Aceito</button>
                    </div>
                </div>
            </div>
        </div>
            {
                atual == 'http://localhost:3000/Home' ? <Home/>
                :
                atual == 'http://localhost:3000/Anuncios' ? <Anuncios/>
                : 
                atual == 'http://localhost:3000/PortalADM' ? <Perfil/>
                :
                atual == 'http://localhost:3000/Contato' ? <Contato/>
                : 
                'Conteúdo não existente'   
            }
        </main>
    );
}

export default Main;