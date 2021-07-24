cube(`BaseAbsorcao`, {
  sql: `SELECT * FROM dbo.base_absorcao`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [nomeUnidade, regQualidade]
    }
  },
  
  dimensions: {
    nomeUnidade: {
      sql: `${CUBE}."Nome Unidade"`,
      type: `string`
    },
    
    regQualidade: {
      sql: `${CUBE}."Reg Qualidade"`,
      type: `string`
    },
    
    regOperacao: {
      sql: `${CUBE}."Reg Operacao"`,
      type: `string`
    },
    
    data: {
      sql: `${CUBE}."Data"`,
      type: `string`
    },
    
    turno: {
      sql: `${CUBE}."Turno"`,
      type: `string`
    },
    
    amostragem: {
      sql: `${CUBE}."Amostragem"`,
      type: `string`
    },
    
    numero: {
      sql: `${CUBE}."Numero"`,
      type: `string`
    },
    
    absorcao: {
      sql: `${CUBE}."Absorcao"`,
      type: `string`
    },
    
    mS: {
      sql: `${CUBE}."Mês"`,
      type: `string`,
      title: `Mês`
    },
    
    maior8: {
      sql: `${CUBE}."Maior_8"`,
      type: `string`,
      title: `Maior 8`
    },
    
    chave: {
      sql: `${CUBE}."Chave"`,
      type: `string`
    },
    
    resultado: {
      sql: `${CUBE}."Resultado"`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
