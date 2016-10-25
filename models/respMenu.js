module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sys_resp_menus', {
    	responsibility_code: {
    		type: DataTypes.STRING,
        primaryKey: true,
    		allowNull: false,
    		validate: {
    			len: [1, 30]
    		}
    	},
			menu_code: {
        type: DataTypes.STRING,
				primaryKey: true,
        allowNull: false,
        validate: {
          len: [1,30]
        }
      },
      privilege: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1,10]
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
      tableName: 'sys_resp_menus'
	});
};
