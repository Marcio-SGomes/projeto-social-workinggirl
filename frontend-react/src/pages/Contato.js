import React from 'react';

function Contato () {
    return(
        <section className="container glass text-center">
            <div class="container text-center mt-5">
                <div class="container text-center"><img class="text-center" width="250px" src="~/img/logo.png" alt="Alternate Text" /></div>
                <hr />
                <br />
                <h4 class="titulo-texto">
                    Nós somos a WorkingGirls
                </h4>
                <p class="paragrafo-texto mt-5">
                    Qualquer dúvida, problema ou sugestão, preencha seus dados para resposta <br/> e nos envie uma mensagem
                </p>

                <br />

                <div class="contact-clean">
                    <form onsubmit="return false;">
                        <h2 class="text-center">Fale conosco</h2>
                        <div class="form-group"><input class="form-control" type="text" name="name" placeholder="Nome"/></div>
                        <div class="form-group"><input class="form-control" type="email" name="email" placeholder="Email"/></div>
                        <div class="form-group"><textarea class="form-control" name="message" placeholder="Mensagem" rows="14"></textarea></div>
                        <div class="form-group"><button class="btn btn-primary" type="submit" onclick="window.location.reload();">Enviar </button></div>
                    </form>
                    <address class="text-monospace font-weight-bold mt-5">
                        Gerenciado por <a href="mailto:grupo56recode@gmail.com">Squad 56</a>.<br/>
                        Uma iniciativa:<br/>
                        Recode PRO<br/>
                        Brasil <br/>
                    </address>
                </div>
            </div>
            <br/>
        </section>
    );
}

export default Contato;