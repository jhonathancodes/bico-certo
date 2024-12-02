function DarkMode() {
    
    const body = document.body;
    const iconeLtm = document.getElementById('btnLightMode');
    const iconeDm = document.getElementById('btnDarkMode');
    const logomarcaLt = document.getElementById('logomarca');
    const logomarcaDm = document.getElementById('logomarca-dark-mode');
    const botoesAumentarZoom = document.querySelectorAll('.acessibilidade-mais');
    const botoesAbaixarZoom = document.querySelectorAll('.acessibilidade-menos');
    const buttons = document.querySelectorAll('.botao');
    const acessibilityPanel = document.querySelector('.acessibility-panel');
    

    body.classList.toggle('dark-mode');
    body.style.backgroundColor = '#121212';
    acessibilityPanel.style.backgroundColor = 'rgba(199, 200, 202, 0.090)';
    iconeDm.style.display = 'none';
    iconeLtm.style.display = 'block';
    logomarcaLt.style.display = 'none';
    logomarcaDm.style.display = 'block';
    buttons[0].style.backgroundImage = 'url(./imagens/icone-botoes/right-to-bracket-solid-dm.svg)';
    buttons[1].style.backgroundImage = 'url(./imagens/icone-botoes/user-plus-solid-dm.svg';
    buttons[2].style.backgroundImage = 'url(./imagens/icone-botoes/building-solid-dm.svg)';
    buttons[3].style.backgroundImage = 'url(./imagens/icone-botoes/file-signature-solid-dm.svg)';
    

    const botaoAumentarZoom = botoesAumentarZoom[0];
    const botaoAbaixarZoom = botoesAbaixarZoom[0];

    botaoAumentarZoom.style.display = 'none';
    botaoAbaixarZoom.style.display =  'none';

    const botaoAumentarZoomLt = botoesAumentarZoom[1];
    const botaoAbaixarZoomDm = botoesAbaixarZoom[1];

    botaoAumentarZoomLt.style.display = 'block';
    botaoAbaixarZoomDm.style.display = 'block';

};

function LightMode() {
    
    const body = document.body;
    const iconeLtm = document.getElementById('btnLightMode');
    const iconeDm = document.getElementById('btnDarkMode');
    const logomarcaLt = document.getElementById('logomarca');
    const logomarcaDm = document.getElementById('logomarca-dark-mode');
    const botoesAumentarZoom = document.querySelectorAll('.acessibilidade-mais');
    const botoesAbaixarZoom = document.querySelectorAll('.acessibilidade-menos');
    const buttons = document.querySelectorAll('.botao');
    const acessibilityPanel = document.querySelector('.acessibility-panel');


    body.classList.toggle('dark-mode');
    body.style.backgroundColor = 'white';
    acessibilityPanel.style.backgroundColor = 'rgba(23, 50, 118, 0.11)';
    iconeDm.style.display = 'block';
    iconeLtm.style.display = 'none';
    logomarcaLt.style.display = 'block';
    logomarcaDm.style.display = 'none';
    buttons[0].style.backgroundImage = 'url(./imagens/icone-botoes/right-to-bracket-solid.svg)';
    buttons[1].style.backgroundImage = 'url(./imagens/icone-botoes/user-plus-solid.svg';
    buttons[2].style.backgroundImage = 'url(./imagens/icone-botoes/building-solid.svg)';
    buttons[3].style.backgroundImage = 'url(./imagens/icone-botoes/file-signature-solid.svg)';
    

    const botaoAumentarZoom = botoesAumentarZoom[0];
    const botaoAbaixarZoom = botoesAbaixarZoom[0];

    botaoAumentarZoom.style.display = 'block';
    botaoAbaixarZoom.style.display =  'block';

    const botaoAumentarZoomLt = botoesAumentarZoom[1];
    const botaoAbaixarZoomDm = botoesAbaixarZoom[1];

    botaoAumentarZoomLt.style.display = 'none';
    botaoAbaixarZoomDm.style.display = 'none';

};