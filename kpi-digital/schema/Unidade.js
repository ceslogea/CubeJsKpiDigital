cube(`Unidade`, {
  sql: `SELECT * FROM dbo."Unidade"`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, adddate, alterdate]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    nome: {
      sql: `${CUBE}."Nome"`,
      type: `string`
    },
    
    isactive: {
      sql: `isactive`,
      type: `string`
    },
    
    adddate: {
      sql: `adddate`,
      type: `time`
    },
    
    alterdate: {
      sql: `alterdate`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
