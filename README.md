# Nativy - Agrotech (FIAP, Fase 5)

Site da Nativy, uma rede que conecta pequenos produtores rurais, estabelecimentos com excedente alimentar e ONGs de distribuicao para reduzir o desperdicio de alimentos.

Projeto desenvolvido para o PBL Agrotech da FIAP. Na Fase 5 o site da Fase 4 foi reconstruido em React e ganhou uma nova funcionalidade: o Diretorio, com busca em tempo real por nome, tipo e localizacao.

## Links

- Deploy (Vercel): https://fiap-agrotech-eight.vercel.app
- Pitch Video: https://www.youtube.com/watch?v=FfcAUoAydCg

## Tecnologias

- React 19
- Vite
- Bootstrap 5

## Estrutura

```
src/
  App.jsx            monta o site e controla qual pagina esta ativa (useState)
  components/        Navbar, Footer e os modais de Criar conta, Entrar e Fale conosco
  pages/             Home, Sobre e Diretorio
  styles/            variaveis de cor
  index.css          estilos gerais
```

## Como rodar

```
npm install
npm run dev
```

Para gerar a versao de producao:

```
npm run build
```
