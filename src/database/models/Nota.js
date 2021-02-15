module.exports = function(sequelize, dataTypes) {
    let alias = "Nota";

    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            notNull: true

        },
        titulo: {
            type: dataTypes.STRING(50),
            notNull: true
        },
        texto: {
            type: dataTypes.STRING(200),
            notNull: true
        },
        deleted_at: {
            type: dataTypes.DATE,
            default: null
        }
        
    };
    
    let config = {
        tableName: 'notas',
        timestamps: true,
        underscored: true     
    }

    const Nota = sequelize.define(alias, cols, config);
    return Nota;
}