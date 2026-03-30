# CountStep

CountStep é uma aplicação web simples para gerar sequências numéricas. Informe o valor inicial, o valor final e o salto desejado — o CountStep exibe a contagem em ordem crescente ou decrescente automaticamente.

## Preview

<p align="center">
  <img src="assets/images/preview-desktop.png" width="600"/>
  <img src="assets/images/preview-mobile.png" width="220"/>
</p>

## Funcionalidades

- Contagem progressiva (crescente) e regressiva (decrescente)
- Definição de valor inicial, valor final e salto entre os números
- Salto padrão de 1 quando não informado ou inválido
- Validação visual dos campos obrigatórios
- Suporte a envio pelo teclado (tecla Enter)
- Layout responsivo para dispositivos móveis

## Tecnologias

- HTML5
- CSS3
- JavaScript (Vanilla)

## Como Usar

1. Informe o valor de **Inicio** (número inicial da contagem)
2. Informe o valor de **Fim** (número final da contagem)
3. *(Opcional)* Informe o valor de **Salto** (intervalo entre os números — padrão: 1)
4. Clique em **Contar** ou pressione **Enter**
5. O resultado aparece na área abaixo do formulário

> Se o valor de início for maior que o valor de fim, a contagem será feita de forma decrescente automaticamente.

## Como Rodar o Projeto

Por ser uma aplicação frontend pura (sem dependências ou build), basta abrir o arquivo diretamente no navegador:

1. Clone o repositório:
   ```
   git clone https://github.com/seu-usuario/countstep.git
   ```

2. Acesse a pasta do projeto:
   ```
   cd countstep
   ```

3. Abra o arquivo `index.html` no navegador

> Recomendado: use a extensão **Live Server** no VS Code para recarregamento automático.

## Estrutura do Projeto

```
countstep/
├── index.html          # Estrutura da página
├── index.js            # Lógica da contagem
├── style.css           # Estilos
├── assets/
│   ├── icons/
│   │   └── contagem.png        # Favicon
│   └── images/
│       ├── preview-desktop.png # Preview desktop
│       └── preview-mobile.png  # Preview mobile
└── README.md
```
