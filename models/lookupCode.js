module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sys_lookup_codes', {
    	lookup_type: {
    		type: DataTypes.STRING,
        primaryKey: true,
    		allowNull: false,
    		validate: {
    			len: [1, 30]
    		}
    	},
			lookup_code: {
				type: DataTypes.STRING,
				primaryKey: true,
				allowNull: false,
				validate: {
					len: [1, 30]
				}
			},
			sequence: {
				type: DataTypes.INTEGER,
				allowNull: true
			},
			displayed_field: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,100]
        }
      },
			code_description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,255]
        }
      },
			parent_code_1: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,30]
        }
      },
			parent_code_2: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,30]
        }
      },
			enabled: {
        type: DataTypes.STRING,
        allowNull: false,
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
      tableName: 'sys_lookup_codes'
    });
};
