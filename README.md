# 📍 Consulta de CEP - ViaCEP API

<div align="center">
  
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.10-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

Uma aplicação moderna e responsiva para consulta de CEPs brasileiros usando a API ViaCEP.

[🚀 Demo ao Vivo](#) • [📖 Documentação](#funcionalidades) • [💻 Instalação](#instalação)

</div>

---

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como um exercício prático de consumo de APIs externas com React. A aplicação permite que usuários consultem informações detalhadas de endereços brasileiros através do CEP (Código de Endereçamento Postal).

### ✨ Funcionalidades

- 🔍 **Busca de CEP em tempo real** - Digite e pressione Enter ou saia do campo
- ✅ **Validação automática** - Aceita apenas números e valida o formato correto
- 🎨 **Formatação automática** - CEP formatado automaticamente (00000-000)
- ⚡ **Feedback instantâneo** - Loading states e mensagens de erro claras
- 📱 **Design responsivo** - Funciona perfeitamente em mobile, tablet e desktop
- 🎯 **Interface intuitiva** - UX moderna e fácil de usar
- 🚫 **Tratamento de erros** - Mensagens claras para CEPs inválidos ou não encontrados

---


## 🛠️ Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool moderna e rápida
- **CSS3** - Estilização customizada (sem frameworks)
- **ViaCEP API** - API pública para consulta de CEPs brasileiros
- **JavaScript ES6+** - Recursos modernos da linguagem

---

## 📦 Instalação

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passo a passo

1. **Clone o repositório**
```bash
git clone https://github.com/DevAlex-full/consulta-cep.git
```

2. **Entre na pasta do projeto**
```bash
cd consulta-cep
```

3. **Instale as dependências**
```bash
npm install
```

4. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

5. **Acesse no navegador**
```
http://localhost:5173
```

---

## 🚀 Como Usar

1. Digite um CEP válido no campo de entrada (8 dígitos)
2. A formatação automática adiciona o hífen após o 5º dígito
3. Pressione **Enter**, clique no botão **Buscar** ou saia do campo
4. As informações do endereço serão exibidas automaticamente
5. Se o CEP não for encontrado, uma mensagem de erro será mostrada

### Exemplos de CEPs para teste:
- `01310-100` - Av. Paulista, São Paulo/SP
- `20040-020` - Centro, Rio de Janeiro/RJ
- `30130-100` - Centro, Belo Horizonte/MG
- `40020-000` - Centro, Salvador/BA

---

## 📂 Estrutura do Projeto

```
consulta-cep/
├── public/
├── src/
│   ├── App.jsx          # Componente principal da aplicação
│   ├── App.css          # Estilos da aplicação
│   ├── main.jsx         # Arquivo de entrada do React
│   └── index.css        # Estilos globais
├── index.html           # HTML principal
├── package.json         # Dependências e scripts
├── vite.config.js       # Configuração do Vite
└── README.md           # Documentação
```

---

## 🔧 Scripts Disponíveis

```bash
# Inicia o servidor de desenvolvimento
npm run dev

# Cria a build de produção
npm run build

# Visualiza a build de produção localmente
npm run preview
```

---

## 🌐 API Utilizada

Este projeto utiliza a **[ViaCEP API](https://viacep.com.br/)** - uma API pública e gratuita para consulta de CEPs brasileiros.

**Endpoint utilizado:**
```
GET https://viacep.com.br/ws/{cep}/json/
```

**Resposta de exemplo:**
```json
{
  "cep": "01310-100",
  "logradouro": "Avenida Paulista",
  "complemento": "de 612 a 1510 - lado par",
  "bairro": "Bela Vista",
  "localidade": "São Paulo",
  "uf": "SP",
  "estado": "São Paulo",
  "ddd": "11"
}
```

---

## 🎨 Recursos de Design

- **Gradiente moderno** - Background com gradiente roxo/azul
- **Cards elevados** - Sombras suaves para profundidade
- **Animações sutis** - Transições suaves em hover e loading
- **Ícones SVG** - Ícones vetoriais para melhor qualidade
- **Paleta de cores** - Sistema de cores consistente e acessível
- **Tipografia** - Fontes system para melhor performance

---

## 📱 Responsividade

A aplicação é totalmente responsiva e se adapta a diferentes tamanhos de tela:

- 📱 **Mobile** - Layout otimizado para smartphones
- 💻 **Tablet** - Grid adaptativo para tablets
- 🖥️ **Desktop** - Experiência completa em telas grandes

---

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Se você tem alguma sugestão para melhorar este projeto:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## 📝 Melhorias Futuras

- [ ] Adicionar histórico de buscas
- [ ] Implementar busca por endereço (reversa)
- [ ] Adicionar modo escuro (dark mode)
- [ ] Salvar favoritos no localStorage
- [ ] Adicionar testes unitários
- [ ] Implementar PWA (Progressive Web App)
- [ ] Adicionar compartilhamento de endereços

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

**DevAlex**

- GitHub: [@DevAlex-full](https://github.com/DevAlex-full)

---

## 🙏 Agradecimentos

- [ViaCEP](https://viacep.com.br/) - Pela API gratuita e bem documentada
- [React](https://react.dev/) - Pela excelente biblioteca
- [Vite](https://vitejs.dev/) - Pela ferramenta de build rápida

---

<div align="center">

### ⭐ Se este projeto foi útil para você, considere dar uma estrela!

**Feito com ❤️ e React**

</div>