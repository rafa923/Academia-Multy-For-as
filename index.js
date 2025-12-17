const express = require('express');
const app = express();

app.use(express.static('public'));

const estiloGeral = `
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background-color: #050505; color: #ffffff; font-family: 'Segoe UI', sans-serif; line-height: 1.8; }
        header { background: linear-gradient(135deg, #FFD700 0%, #b89b00 100%); padding: 40px 20px; text-align: center; }
        header h1 { color: #000; text-transform: uppercase; font-size: 2.5rem; font-weight: 900; }
        nav { background: #111; padding: 15px; text-align: center; border-bottom: 2px solid #FFD700; position: sticky; top: 0; z-index: 1000; }
        nav a { color: #FFD700; text-decoration: none; margin: 0 20px; font-weight: 700; text-transform: uppercase; }
        .container { max-width: 900px; margin: 40px auto; padding: 30px; background: #0f0f0f; border-radius: 15px; border: 1px solid #222; }
        .destaque { color: #FFD700; font-weight: bold; }
        .foto-banner { width: 100%; max-width: 700px; border-radius: 12px; border: 4px solid #FFD700; margin: 20px auto; display: block; }
        .secao-texto { background: #151515; padding: 25px; border-radius: 10px; margin-bottom: 30px; border-left: 4px solid #FFD700; text-align: justify; }
        .grid-time { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 20px; }
        .card-membro { background: #1a1a1a; padding: 20px; border-radius: 8px; border: 1px solid #333; text-align: center; }
        .btn-insta { display: inline-block; margin-top: 10px; padding: 5px 15px; background: #E1306C; color: white; text-decoration: none; border-radius: 20px; font-size: 0.8rem; font-weight: bold; }
        .btn-acao { display: block; width: fit-content; margin: 40px auto; padding: 18px 40px; background: #FFD700; color: #000; font-weight: 900; text-decoration: none; border-radius: 50px; text-transform: uppercase; }
        ul { margin: 15px 0 15px 25px; }
        h3 { color: #FFD700; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 1px; }
    </style>
`;

app.get('/', (req, res) => {
    res.send(`
        ${estiloGeral}
        <header><h1>Multy Forças</h1></header>
        <nav><a href="/">Início</a><a href="/especialista">O Especialista</a></nav>

        <div class="container">
            <div style="text-align: center;">
                <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000" class="foto-banner" alt="Multy Forças">
                <h2 style="color: #FFD700; margin: 20px 0;">Nossa História e Surgimento</h2>
            </div>

            <div class="secao-texto">
                <p>A <span class="destaque">Multy Forças Academia</span> surgiu no começo da década de 2010, em Sobradinho, com uma proposta simples, mas muito forte: criar um espaço acessível para quem queria mudar de vida através do treino.</p>
                <p style="margin-top:15px;">No início, a estrutura era modesta. Poucos aparelhos, espaço reduzido e muito esforço diário. Como muitas academias que nascem fora dos grandes centros, tudo foi feito no passo a passo, com investimento próprio e muito trabalho direto dos fundadores — desde abrir a academia cedo até fechar à noite.</p>
                <p style="margin-top:15px;">A ideia principal nunca foi luxo, mas sim <strong>resultado</strong>:</p>
                <ul>
                    <li>Ajudar pessoas sedentárias;</li>
                    <li>Apoiar quem queria emagrecer;</li>
                    <li>Fortalecer quem buscava saúde;</li>
                    <li>Acolher alunos que nunca tinham pisado numa academia.</li>
                </ul>
            </div>

            <div class="secao-texto">
                <h3>Desafios e Evolução</h3>
                <p>Como toda academia de bairro, a Multy Forças enfrentou vários desafios ao longo da jornada: concorrência com academias maiores, limitações financeiras e a necessidade de manter equipamentos funcionando para conquistar a confiança da comunidade local.</p>
                <p style="margin-top:15px;">Mesmo assim, a academia foi se firmando no bairro. O boca a boca foi essencial: alunos que tiveram resultados começaram a indicar para amigos, parentes e vizinhos.</p>
                <p style="margin-top:15px;">Com o tempo, novos aparelhos foram chegando, o espaço foi sendo ajustado e o atendimento se tornou nosso diferencial, transformando a Multy Forças em um <strong>ambiente familiar</strong>, onde o aluno é conhecido pelo nome.</p>
            </div>

            <div class="secao-texto">
                <h3>O Significado do Nome</h3>
                <p>O nome “Multy Forças” representa bem a nossa essência: <strong>força física, força mental, disciplina e superação diária.</strong></p>
                <p style="margin-top:15px;">Ela se tornou um local onde pessoas com histórias diferentes treinam juntas: quem já foi obeso, quem já foi muito magro, quem treina por saúde, estética ou qualidade de vida.</p>
            </div>

            <h3 style="text-align: center; margin-top: 40px;">EQUIPE DE ELITE</h3>
            <div class="grid-time">
                <div class="card-membro">
                    <p class="destaque">Maurílio Barbosa</p>
                    <p style="font-size: 0.85rem; color: #aaa;">Nutricionista & Fundador</p>
                    <a href="https://api.whatsapp.com/send?phone=556133876200" class="btn-insta" style="background: #25D366;">WhatsApp</a>
                </div>
                <div class="card-membro">
                    <p class="destaque">Ricardo Sinistro</p>
                    <p style="font-size: 0.85rem; color: #aaa;">Mestre em Musculação</p>
                    <a href="https://www.instagram.com/ricardo_sinistro/" target="_blank" class="btn-insta">Instagram</a>
                </div>
                <div class="card-membro">
                    <p class="destaque">Perycles</p>
                    <p style="font-size: 0.85rem; color: #aaa;">Suporte & Condicionamento</p>
                    <a href="https://www.instagram.com/peryclesbjj/" target="_blank" class="btn-insta">Instagram</a>
                </div>
            </div>

            <div style="background: #111; padding: 25px; border-radius: 10px; margin-top: 40px; border: 1px solid #333; font-size: 0.9rem; text-align: center;">
                <p>📍 <strong>Localização:</strong> Quadra 11, CL 10, Lote 01 - Sobradinho (DF).</p>
                <p>🛡️ <strong>MF ACADEMIA LTDA</strong> | Empresa Ativa desde 31/07/2012</p>
            </div>

            <a href="https://api.whatsapp.com/send?phone=556133876200" class="btn-acao">Quero treinar na Multy Forças</a>
        </div>
    `);
});

app.get('/especialista', (req, res) => {
    res.send(`
        ${estiloGeral}
        <header><h1>O Especialista</h1></header>
        <nav><a href="/">Início</a><a href="/especialista">O Especialista</a></nav>
        <div class="container" style="text-align: center;">
            <h2 class="destaque">Maurílio Barbosa</h2>
            <p>Especialista em unir Nutrição e Treino de Força.</p>
            <a href="/" style="color:#FFD700; display:block; margin-top:40px; text-decoration:none;">← Voltar ao Início</a>
        </div>
    `);
});

app.listen(3000, () => console.log('Site da Multy Forças Online!'));