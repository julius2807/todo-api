module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sys_curencies', {
    	currency_code: {
    		type: DataTypes.STRING,
        primaryKey: true,
    		allowNull: false,
    		validate: {
    			len: [1, 3]
    		}
    	},
			currency_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,100]
        }
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1,255]
        }
      },
      symbol: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1,5]
        }
      },
      enabled: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1]
        }
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
      tableName: 'sys_currencies'
	});
};
