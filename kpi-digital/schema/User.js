cube(`User`, {
  sql: `SELECT * FROM dbo."User"`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, username, adddate, alterdate]
    }
  },
  
  dimensions: {
    id: {
      sql: `${CUBE}."Id"`,
      type: `number`,
      primaryKey: true
    },
    
    username: {
      sql: `${CUBE}."Username"`,
      type: `string`
    },
    
    email: {
      sql: `${CUBE}."Email"`,
      type: `string`
    },
    
    password: {
      sql: `${CUBE}."Password"`,
      type: `string`
    },
    
    roles: {
      sql: `${CUBE}."Roles"`,
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
