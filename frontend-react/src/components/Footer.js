import React from "react";

function Footer(){
    return(
        <footer className="border-top footer text-muted bg-white">
            <div class="container">
            &copy; 2022 - WorkingGirls -  <a asp-action="CookiesPolicy">Política de privacidade</a> - <a asp-action="Contato">Contato</a>
            </div>
        </footer>
    );
}


export default Footer;