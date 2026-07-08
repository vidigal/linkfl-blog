---
layout: post
title: "Como configurar DNS no Registro.br: passo a passo para apontar seu domínio"
description: "Aprenda como configurar DNS no Registro.br para apontar seu domínio para um site, email ou hospedagem sem erro. Guia simples e atualizado."
date: 2026-04-10 08:10:00 -0300
category: "Presença Digital"
author: Linkfl
read_time: 9
breadcrumbs:
  - name: Blog
    url: /
---

Registrar o domínio é só metade do caminho. A etapa que costuma travar muita gente vem logo depois: **configurar o DNS no Registro.br** para fazer o endereço abrir o site certo.

Se você chegou até aqui depois de comprar um domínio `.com.br`, respire. O processo não é complicado, mas é importante entender **qual tipo de configuração você realmente precisa fazer**. É justamente aí que acontecem os erros mais comuns.

## O que significa configurar DNS no Registro.br?

Na prática, configurar DNS no Registro.br significa dizer para a internet **para onde o seu domínio deve apontar**.

Exemplo:

- quando alguém digita `seusite.com.br`, o navegador precisa saber em qual servidor esse site está
- quando alguém envia um email para `contato@seusite.com.br`, o sistema precisa saber qual serviço vai receber essa mensagem

O DNS é a ponte entre o nome do domínio e o serviço que vai responder por ele.

## Existem duas formas de fazer isso

Muita gente trata tudo como se fosse a mesma coisa, mas no Registro.br existem dois cenários diferentes.

### 1. Trocar os servidores DNS

Nesse caso, você informa os **nameservers** de outra plataforma, como hospedagem, criador de sites, Cloudflare ou serviço de email.

Os valores costumam ser parecidos com:

- `ns1.exemplo.com`
- `ns2.exemplo.com`

Se a plataforma te passou esse tipo de informação, o que você precisa fazer é **alterar os servidores DNS do domínio**.

### 2. Editar registros DNS

Aqui você continua usando o DNS do próprio Registro.br e edita registros como:

- `A`
- `CNAME`
- `MX`
- `TXT`

Se a sua plataforma te entregou um IP, um `www`, um registro de verificação ou dados de email, provavelmente você vai trabalhar nessa área.

## Como saber qual opção usar

Use esta regra simples:

| O que a plataforma te enviou | O que fazer no Registro.br |
|---|---|
| `ns1`, `ns2`, `ns3` | Trocar os servidores DNS |
| Endereço IP | Criar registro `A` |
| Um domínio de destino para `www` | Criar registro `CNAME` |
| Dados de email | Criar registros `MX` e, às vezes, `TXT` |
| Código de verificação do Google ou Microsoft | Criar registro `TXT` |

Se você usa o Linkfl, a plataforma informa exatamente quais valores usar. Isso evita aquela sensação de estar “mexendo em algo técnico” sem saber se está certo.

## Antes de começar

Separe estas informações:

- login e senha da sua conta no Registro.br
- nome do domínio que será configurado
- instruções da plataforma onde o site está hospedado
- eventuais registros de email que já estejam funcionando

Se o seu domínio já recebe email, faça isso com atenção redobrada. Um ajuste errado em `MX` ou `TXT` pode interromper mensagens.

## Passo a passo: quando você precisa trocar os servidores DNS

Esse é o cenário mais comum quando a plataforma cuida de tudo para você.

### 1. Acesse sua conta no Registro.br

Entre em [registro.br](https://registro.br) e faça login com o CPF ou CNPJ responsável pelo domínio.

### 2. Clique no domínio que deseja configurar

No painel, selecione o domínio correto para abrir a tela de gerenciamento.

### 3. Procure a área de DNS

Dentro do domínio, localize a parte de configuração de DNS. O objetivo aqui é encontrar a opção para **informar servidores DNS externos**.

### 4. Substitua pelos servidores enviados pela sua plataforma

Se o serviço te passou, por exemplo:

- `ns1.plataforma.com`
- `ns2.plataforma.com`

copie exatamente esses valores, sem inventar variações.

### 5. Salve a alteração

Depois de salvar, o domínio começa a propagar a nova configuração.

### 6. Aguarde a propagação

Em muitos casos, o domínio começa a responder em poucas horas. Ainda assim, o prazo completo pode chegar a **48 horas**.

## Passo a passo: quando você precisa editar registros DNS

Esse cenário acontece quando você quer controlar registros específicos ou manter o DNS no próprio Registro.br.

### 1. Entre no domínio dentro do Registro.br

Abra o domínio que será configurado.

### 2. Ative ou acesse a zona DNS

Se o domínio estiver usando o DNS do próprio Registro.br, você verá a área para editar registros.

### 3. Adicione os registros informados pela plataforma

Os casos mais comuns são:

| Tipo | Quando usar | Exemplo |
|---|---|---|
| `A` | Apontar o domínio principal para um IP | `@ -> 185.10.10.10` |
| `CNAME` | Apontar `www` para outro endereço | `www -> sites.exemplo.com` |
| `MX` | Configurar recebimento de emails | `mail.exemplo.com` |
| `TXT` | Verificações e autenticação | SPF, DKIM, Search Console |

### 4. Revise antes de salvar

Esse ponto merece calma. O erro mais comum é apagar um registro importante sem perceber.

### 5. Teste o domínio e o email depois da propagação

Verifique:

- se o site abre com e sem `www`
- se o `https://` está funcionando
- se os emails continuam chegando

## Erros mais comuns ao configurar DNS no Registro.br

### Misturar servidores externos com zona local

Se você apontou o domínio para servidores DNS externos, os registros configurados dentro do Registro.br deixam de ser usados. Muita gente altera os nameservers e depois continua editando a zona local, achando que isso vai surtir efeito.

Não vai.

### Apagar registros de email sem notar

É bem comum acertar o site e quebrar o email. Se o domínio já usa email profissional, confira os registros `MX`, `TXT` e eventuais autenticações antes de qualquer mudança.

### Configurar só o domínio principal e esquecer o `www`

O ideal é que `seusite.com.br` e `www.seusite.com.br` funcionem corretamente, seja abrindo a mesma versão, seja redirecionando.

### Testar cedo demais

Às vezes a configuração está certa, mas você testa 10 minutos depois e conclui que deu errado. DNS precisa de tempo.

## Quanto tempo leva para funcionar?

| Situação | Tempo comum |
|---|---|
| Atualização simples | alguns minutos a poucas horas |
| Propagação completa | até 48 horas |
| SSL ficar estável após apontamento | de minutos a algumas horas |

Se depois de 48 horas nada abrir, vale revisar a configuração inteira.

## Como conferir se deu certo

Um checklist simples:

1. Digite o domínio no navegador.
2. Teste com e sem `www`.
3. Abra no celular usando outra rede.
4. Veja se o cadeado do `https://` aparece.
5. Se usa email, envie uma mensagem de teste.

Se o domínio abre a página certa e o email continua funcionando, a configuração está no caminho certo.

## Quando faz sentido pedir ajuda

Vale chamar suporte quando:

- a plataforma enviou instruções pouco claras
- você usa site e email no mesmo domínio
- o domínio já estava configurado antes e há risco de derrubar algo
- você não sabe se deve trocar nameservers ou editar registros

No Linkfl, esse tipo de orientação costuma ser bem mais simples porque a plataforma já entrega a estrutura pronta e informa exatamente o que deve ser feito.

## Perguntas frequentes (FAQ)

### Posso configurar DNS no Registro.br sem ter hospedagem?

Pode. Você até consegue deixar o domínio registrado, mas para ele abrir um site de verdade precisa apontar para alguma plataforma ou hospedagem.

### Mudar o DNS tira meu site do ar?

Pode tirar, se a mudança for feita com dados errados. Quando a configuração está correta, a troca costuma acontecer sem maiores problemas, apenas com o período normal de propagação.

### O que é melhor: trocar nameservers ou editar registros?

Depende do serviço que você usa. Se a plataforma já cuida de toda a infraestrutura, trocar nameservers costuma ser mais simples. Se você precisa controlar detalhes específicos, editar registros pode fazer mais sentido.

### Posso usar o site em um serviço e o email em outro?

Sim. Isso é comum. Nesse caso, a configuração precisa ser feita com cuidado para que os registros do site e do email convivam sem conflito.

### Como saber se o erro está no DNS ou na plataforma?

Se o domínio não abre, mas a página temporária da plataforma funciona por outro endereço, o problema costuma estar no apontamento. Se o apontamento está certo e mesmo assim a página não carrega, vale olhar a própria plataforma.

---

Se você quer criar seu site profissional sem depender de configuração manual complicada, o Linkfl já entrega a estrutura pronta e orienta a conexão do domínio do começo ao fim. Conheça: https://linkfl.com.br

Veja também:

- [Como registrar um domínio .com.br: passo a passo completo](/como-registrar-um-dominio-com-br/)
- [O que é DNS? Explicação simples para quem não é técnico](/o-que-e-dns/)
