module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sys_organizations', {
    	organization_code: {
    		type: DataTypes.STRING,
        primaryKey: true,
    		allowNull: false,
    		validate: {
    			len: [1, 30]
    		}
    	},
      organization_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,100]
        }
      },
      address_line_1: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1,50]
        }
      },
      address_line_2: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1,50]
        }
      },
      address_line_3: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1,50]
        }
      },
      city: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1,30]
        }
      },
      state: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1,30]
        }
      },
      country: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1,30]
        }
      },
      zip_code: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1,10]
        }
      },
      business_area: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1,30]
        }
      },
      enabled: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      business_phone_number: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1,20]
        }
      },
      fax_number: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1,20]
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1,100]
        }
      },
      logo: {
        type: DataTypes.BLOB,
        allowNull: true,
      },
      created_by: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1,30]
        }
      },
      created_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      last_update_by: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1,30]
        }
      },
      last_update_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      version: {
        type: DataTypes.INTEGER,
        allowNull: true,
      }
    },{
      timestamps: false,
      tableName: 'sys_organizations'
	});
};
