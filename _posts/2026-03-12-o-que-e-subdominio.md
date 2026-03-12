---
layout: post
title: "O que é um subdomínio? Explicação simples com exemplos"
description: "Entenda o que é um subdomínio, como ele funciona, quando usar e a diferença entre domínio, subdomínio e diretório no seu site."
date: 2026-03-12 12:42:00 -0300
category: "Presença Digital"
read_time: 7
breadcrumbs:
  - name: Blog
    url: /
---

Se você já acessou endereços como `blog.empresa.com.br` ou `loja.empresa.com.br`, estava usando um **subdomínio**. Esse recurso é muito útil para organizar diferentes seções ou projetos dentro de um mesmo domínio.

Neste artigo, vamos explicar de forma simples **o que é um subdomínio**, quando ele é útil e como ele se diferencia do domínio principal.

## O que é subdomínio?

Um **subdomínio** é uma extensão do seu domínio principal que funciona como um **endereço separado** dentro do mesmo domínio. Ele aparece **antes** do nome do domínio, separado por um ponto.

Exemplo:
- Domínio principal: `empresa.com.br`
- Subdomínio: `blog.empresa.com.br`
- Outro subdomínio: `loja.empresa.com.br`

Pense assim: se o domínio é o endereço da sua empresa, o subdomínio é como **departamentos dentro da empresa**. Cada departamento tem seu próprio espaço, mas todos ficam no mesmo "prédio".

## Exemplos reais de subdomínios

Muitas empresas grandes usam subdomínios:

| Domínio principal | Subdomínio | Uso |
|------------------|-----------|-----|
| google.com | maps.google.com | Google Maps |
| google.com | mail.google.com | Gmail |
| microsoft.com | support.microsoft.com | Suporte Microsoft |
| empresa.com.br | blog.empresa.com.br | Blog da empresa |
| empresa.com.br | loja.empresa.com.br | Loja virtual |

## Quando usar subdomínios?

### 1. Blog separado do site principal

Se o blog usa uma tecnologia diferente do site principal, um subdomínio é uma solução prática: `blog.seusite.com.br`.

### 2. Loja virtual separada

Se você quer adicionar uma loja virtual ao site institucional, pode usar: `loja.seusite.com.br`.

### 3. Área do cliente

Para sistemas de login e área restrita: `app.seusite.com.br` ou `cliente.seusite.com.br`.

### 4. Versões em outros idiomas

Para sites multilíngues: `en.seusite.com.br` (inglês), `es.seusite.com.br` (espanhol).

### 5. Ambientes de teste

Desenvolvedores usam subdomínios para testar alterações antes de colocar no ar: `teste.seusite.com.br`.

## Subdomínio vs subdiretório: qual usar?

Essa é uma dúvida muito comum. Veja a diferença:

- **Subdomínio**: `blog.seusite.com.br` — funciona como um site separado
- **Subdiretório**: `seusite.com.br/blog` — é uma pasta dentro do site principal

| Aspecto | Subdomínio | Subdiretório |
|---------|-----------|--------------|
| **Exemplo** | blog.seusite.com.br | seusite.com.br/blog |
| **SEO** | Autoridade separada | Herda autoridade do site |
| **Configuração** | Mais complexa | Mais simples |
| **Quando usar** | Projetos independentes | Conteúdo integrado ao site |

**Para SEO, subdiretórios geralmente são melhores**. Quando o blog está em um subdiretório, ele herda a autoridade do domínio principal. Em um subdomínio, o Google pode tratá-lo como um site separado.

Para a maioria dos negócios pequenos e médios, a recomendação é usar **subdiretórios** (como `seusite.com.br/blog`) em vez de subdomínios.

## Subdomínio precisa de hospedagem separada?

Depende. O subdomínio pode:
- **Apontar para a mesma hospedagem** do domínio principal
- **Apontar para outra hospedagem** completamente diferente

Isso dá flexibilidade. Por exemplo, o site institucional pode estar no Linkfl, enquanto a loja virtual em um subdomínio pode estar em outra plataforma.

## Como criar um subdomínio

Para criar um subdomínio, você precisa:

1. **Acessar o painel de DNS** do seu registrador de domínio (Registro.br) ou da sua hospedagem
2. **Criar um registro DNS** apontando o subdomínio para o servidor desejado
3. **Configurar a hospedagem** para reconhecer o subdomínio

O processo varia conforme o registrador e a hospedagem. Aqui está um exemplo simplificado:

- **Nome**: blog (o que vai antes do domínio)
- **Tipo**: CNAME ou A
- **Destino**: o endereço IP ou domínio do servidor onde o subdomínio será hospedado

Se você usa o Linkfl, o suporte pode te ajudar com a configuração de subdomínios.

## Subdomínio custa alguma coisa?

**Não!** Subdomínios são **gratuitos**. Você pode criar quantos quiser sem custo adicional. O custo existe apenas para o domínio principal e para a hospedagem.

## O famoso "www" é um subdomínio?

Sim! O `www` que aparece em muitos endereços (como `www.google.com.br`) é tecnicamente um **subdomínio**. Antigamente, era obrigatório para acessar sites. Hoje, é opcional — `google.com.br` e `www.google.com.br` levam ao mesmo lugar.

A tendência atual é **não usar o www**, pois o endereço fica mais curto e limpo.

## Exemplo prático

A Universidade Federal usa subdomínios para organizar suas diversas áreas:

- `www.universidade.edu.br` — site principal
- `biblioteca.universidade.edu.br` — sistema da biblioteca
- `portal.universidade.edu.br` — portal do aluno
- `ead.universidade.edu.br` — plataforma de ensino a distância

Cada subdomínio pode ter seu próprio design, tecnologia e servidor, mas todos ficam organizados sob o mesmo domínio principal.

## Perguntas frequentes (FAQ)

### Subdomínio e domínio são a mesma coisa?

Não. O domínio é `empresa.com.br`. O subdomínio é `blog.empresa.com.br`. O subdomínio é uma extensão do domínio principal.

### Posso criar subdomínio de um subdomínio?

Tecnicamente sim (ex: `noticias.blog.empresa.com.br`), mas não é recomendado. URLs muito longas são difíceis de usar e não são boas para SEO.

### Subdomínio ajuda ou prejudica o SEO?

Depende do uso. Para a maioria dos sites, subdiretórios são melhores para SEO. Subdomínios são indicados quando o conteúdo é realmente independente do site principal.

### Preciso de SSL separado para cada subdomínio?

Depende do tipo de certificado SSL. Um **certificado wildcard** (*.seusite.com.br) cobre todos os subdomínios. Um certificado simples cobre apenas o domínio principal.

### Quantos subdomínios posso criar?

Não existe limite técnico. Você pode criar quantos subdomínios quiser, mas use com moderação e apenas quando fizer sentido.

---

Para fechar a seção sobre domínios, aprenda a escolher o nome ideal: [Como escolher o nome da sua empresa na internet](/como-escolher-nome-para-empresa-na-internet)
