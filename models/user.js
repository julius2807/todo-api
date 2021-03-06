module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sys_users', {
			user_code: {
				type: DataTypes.STRING,
				primaryKey: true,
				allowNull: false,
				validate: {
					len: [1, 30]
				}
			},
    	organization_code: {
    		type: DataTypes.STRING,
    		allowNull: false,
    		validate: {
    			len: [1, 30]
    		}
    	},
      default_branch_code: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,30]
        }
      },
			password_user: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,30]
        }
      },
			first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,50]
        }
      },
			middle_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,50]
        }
      },
			last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,50]
        }
      },
			born_place: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,15]
        }
      },
			born_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
			gender: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
			blood_type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
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
			zip_code: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1,10]
        }
      },
      business_phone_number: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1,20]
        }
      },
      home_phone_number: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1,20]
        }
      },
			cell_phone_number: {
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
			enabled: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      date_start: {
        type: DataTypes.DATE,
        allowNull: true,
      },
			date_end: {
        type: DataTypes.DATE,
        allowNull: true,
      },
			password_expired_date: {
        type: DataTypes.DATE,
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
      tableName: 'sys_users'
	});
};
