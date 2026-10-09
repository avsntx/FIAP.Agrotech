# Diagrama de Classes - Nativy (Fase 6)

Feito com Mermaid. As classes ficam em `src/models`.

```mermaid
---
title: Diagrama de Classes - Nativy
---
classDiagram
  direction TB

  class Diretorio {
    +participantes: Participante[]
    +adicionar(participante: Participante) void
    +buscar(termo: string, tipo: string) Participante[]
    +filtrarPorTipo(tipo: string) Participante[]
    +buscarPorId(id: number) Participante
    +getLotes() Lote[]
    +buscarLote(codigo: string) Lote
  }

  class Participante {
    +id: number
    +nome: string
    +cidade: string
    +uf: string
    +descricao: string
    +getTipo() string
    +getLocalizacao() string
    +getDestaque() string
    +correspondeABusca(termo: string) boolean
  }

  class Produtor {
    +tipoProducao: string
    +selos: Selo[]
    +lotes: Lote[]
    +getTipo() string
    +getDestaque() string
    +cadastrarLote(produto, quantidade, unidade, dataColheita, validade, codigo) Lote
  }

  class Estabelecimento {
    +segmento: string
    +getTipo() string
    +getDestaque() string
  }

  class ONG {
    +familiasAtendidas: number
    +getTipo() string
    +getDestaque() string
  }

  class Lote {
    +codigo: string
    +produto: string
    +quantidade: number
    +unidade: string
    +dataColheita: string
    +validade: string
    +produtor: Produtor
    +gerarCodigo() string$
    +diasParaVencer() number
    +estaVencido() boolean
    +getStatus() string
    +getQuantidadeFormatada() string
    +getLinkRastreio() string
  }

  class Selo {
    +id: string
    +nome: string
    +descricao: string
    +getDescricaoCompleta() string
  }

  Diretorio "1" o-- "0..*" Participante : agrega
  Participante <|-- Produtor : herança
  Participante <|-- Estabelecimento : herança
  Participante <|-- ONG : herança
  Produtor "1" *-- "0..*" Lote : cadastra
  Produtor "0..*" --> "0..*" Selo : possui
```

## Relacionamentos

- **Herança:** `Produtor`, `Estabelecimento` e `ONG` herdam de `Participante` e sobrescrevem `getTipo()` e `getDestaque()`.
- **Composição:** o `Produtor` cria e guarda os seus `Lote`s pelo método `cadastrarLote()`. O lote não existe sem um produtor.
- **Associação:** o `Produtor` possui `Selo`s de identificação. O mesmo selo pode estar em vários produtores.
- **Agregação:** o `Diretorio` reúne os participantes da rede para buscar e filtrar.
