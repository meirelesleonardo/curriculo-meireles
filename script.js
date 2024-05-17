document.addEventListener("DOMContentLoaded", function() {
    const terminal = document.getElementById('terminal');

    const content = `
        <h1>Leonardo Lousada de Meireles</h1>
        <p><strong>Cargo:</strong> Defesa Cibernética</p>
        <br>
        <p><strong>Graduação</strong><br>  
        <ul>
            <li>Defesa Cibernética (Outubro 2019 - Julho 2022)</p></li>
        </ul>       
        <br>
        <p><strong>Conhecimentos</strong></p>
        <ul>
            <li>Avançado em Linux (Família Debian)</li>
            <li>Programador e analista de sistema em Python</li>
        </ul>
        <br>
        <p><strong>Experiência Profissional:</strong></p>
        <p>Desde 2017, desenvolvendo soluções inovadoras e eficientes para desafios tecnológicos. Criação de automações em Python, desenvolvimento full-stack em C# .NET Framework, e colaboração em projetos educacionais e operacionais na cidade do Rio de Janeiro usando PHP Laravel, Flutter, Angular, Ionic e Python.</p>
        <br>
        <p><strong>Links:</strong></p>
        <ul>
            <li>
                <a href="https://github.com/meirelesleonardo">
                    <i class="fab fa-github"></i> GitHub
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/leonardo-meireles-402b32109/">
                    <i class="fab fa-linkedin"></i> LinkedIn
                </a>
            </li>
            <li>
                <a href="mailto:meirelesleonardo.ti@gmail.com">
                    <i class="far fa-envelope"></i> meirelesleonardo.ti@gmail.com
                </a>
            </li>
            <br>
            <li>
                <a href="https://meirelesleonardo.github.io/curriculo-meireles/localizacao.html">
                    <i class="far fa-eye"></i> Mais Detalhes
                </a>
            </li> 
        </ul>
    `;

    let i = 0;

    function typeWriter() {
        if (i < content.length) {
            terminal.innerHTML = content.slice(0, i + 1);
            i++;
            setTimeout(typeWriter, 10); // Velocidade de digitação aumentada
        }
    }

    typeWriter();
});
