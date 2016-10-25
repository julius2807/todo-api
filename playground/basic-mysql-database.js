var Sequelize = require('sequelize');
var sequelize = new Sequelize('act', 'root', 'Password#1604', {
	'dialect': 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

var organization = sequelize.define('sys_organizations', {
	organization_code: {
		type: Sequelize.STRING,
    primaryKey: true,
		allowNull: false,
		validate: {
			len: [1, 30]
		}
	},
  organization_name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [1,100]
    }
  },
  address_line_1: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      len: [1,50]
    }
  },
  address_line_2: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      len: [1,50]
    }
  },
  address_line_3: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      len: [1,50]
    }
  },
  city: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      len: [1,30]
    }
  },
  state: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      len: [1,30]
    }
  },
  country: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      len: [1,30]
    }
  },
  zip_code: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      len: [1,10]
    }
  },
  business_area: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      len: [1,30]
    }
  },
  enabled: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      len: [1]
    }
  },
  business_phone_number: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      len: [1,20]
    }
  },
  fax_number: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      len: [1,20]
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      len: [1,100]
    }
  },
  logo: {
    type: Sequelize.BLOB,
    allowNull: true,
  },
  created_by: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      len: [1,30]
    }
  },
  created_date: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  last_update_by: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      len: [1,30]
    }
  },
  last_update_date: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  version: {
    type: Sequelize.INTEGER,
    allowNull: true,
  }
},{
  timestamps: false,
  tableName: 'sys_organizations'
});


sequelize.sync({
	// force: true
}).then(function() {
	console.log('Everything is synced');

  organization.findAll().then(function (organizations){
    organizations.forEach(function (organization) {
      console.log(organization.toJSON());
    },function (err){
      console.log('error found : ' + err);
    });
  });

});
