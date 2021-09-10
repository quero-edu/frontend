# CSS Guidelines

Compilado para as boas práticas de desenvolvimento usando dentro da Quero.

## BEM

Nós adotamos o [BEM][1] como base para o nosso workflow. Basicamente BEM é um conjunto de regras para nomeação de classes no CSS. O nome BEM é um acrônimo para Block, Element, Modifier; para nomear uma classe de acordo com o BEM, é preciso seguir o padrão `.block__element--modifier`, no qual o `--modifier` e o `__element` não são obrigatórios.

```css
/* Good */
.page-header {}
.page-header__logo {}
.page-header__buttons {}
.page-header__buttons--for-menu {}

/* Bad */
.page-header {}
.header-logo {}
.buttons {}
.menu-buttons {}
```

### Porque isso é importante?

Padroniza a forma como o código é escrito, o auxiliando no entendimento do código, pois, assim, é possível supor onde o elemento está sendo aplicado, por conta do `__elemento`, e, com base no `--modificador`, caso tenha, qual seria a funcionalidade daquela classe.

 **Exemplo:**
Header de uma página possui um estilo para desktop e outro para mobile.

```css
.page-header--desktop {}
.page-header--mobile {}
```


## Ordenação de propriedades

Todas as propriedades dentro de uma classe devem estar ordenadas alfabeticamente.

```css
/* Good */
.page-header {
  align-items: center;
  display: flex;
  width: 100%;
}

/* Bad */
.page-header {
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(45deg);

  width: 100%;

  display: flex;
  align-items: center;
}
```

### Porque isso é importante?

De modo geral, não há ganhos em performance, mas é importante para garantir uma boa leitura do código e, como consequência, facilitar a manutenção do código.

[1]: http://getbem.com/introduction/

## Guidelines

### Especificidade regra

Mantenha a especificidade da regra a mais baixa que conseguir.

```scss
/* BAD */
.bloco__elemento {
  ...
  &.bloco__elemento--modificador {
    ...
  }
  & .bloco__outro-elemento {
    ...
  }
  & .bloco__mais-outro-elemento {
    ...
  }
}

/* GOOD */
.bloco__elemento {
  ...
}

.bloco__elemento--modificador {
  ...
}

.bloco__outro-elemento {
  ...
}

.bloco__mais-outro-elemento {
  ...
}
```

Isso faz a especificidade do CSS crescer desnecessariamente, deixando o código não escalável
E o próprio BEM cria uma relação clara e tem o propósito de deixar a especificidade o menor possível

### Composição

É muito comum ver a composição de classes BEM com Sass da seguinte forma:

```scss
.accordion {
  &__element {
    color: white;
  }
  &--modifier {
    background-color: red;
  }
}
```

No entanto isso está fora do nosso styleguide. Alguns dos motivos são:
- Hoje já temos uma base de código grande fora desse formato;
- Esse formato pode dificultar a manutenção para devs com menos familiaridade no front-end;
- Pela forma como é feita essa composição, é comum acabar aumentando a especificidade
 erroneamente.

A forma indicada a se fazer nesse caso seria:

```scss
.accordion {}

.accordion__element {
  color: white;
}

.accordion--modifier {
  background-color: red;
}
```
