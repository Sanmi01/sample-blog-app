module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define('Customer', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        full_name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              notEmpty: true,
              isAlpha: true,
          }
        },
        email: {
              type: DataTypes.STRING,
              allowNull: false,
              validate: {
                  isEmail: true,
              }
          },
        billing_address: {
              type: DataTypes.STRING,
              allowNull: false,
              validate: {
                  notEmpty: true,
              }
          },
        default_shipping_address: {
              type: DataTypes.STRING,
              allowNull: false,
              validate: {
                  notEmpty: true,
              }
          },
        phone: {
              type: DataTypes.INTEGER,
              allowNull: false,
              validate: {
                  notEmpty: true,
                  isNumeric: true
              }
          },
        // created_dt: {
        //   type: DataTypes.DATE,
        //   allowNull: false,
        //   defaultValue: sequelize.literal('NOW()'),
        // },
        // last_modified_dt: {
        //   type: DataTypes.DATE,
        //   allowNull: false,
        //   defaultValue: sequelize.literal('NOW()'),
        // },
    })
    
    return Customer
};  