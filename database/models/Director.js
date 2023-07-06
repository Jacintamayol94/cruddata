module.exports = function(sequelize, dataTypes) {
    
    let alias = "Director";
    
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING
        },
        last_name: {
            type: dataTypes.STRING
        }
    }
    
    let config = {
        tableName: "directores",
        timestamps: false
    }
    
    let Director = sequelize.define(alias, cols, config);

    Director.associate = function(models) {
       Director.hasMany(models.Pelicula, {
            as: "peliculas",
            foreignKey: "director_id"
        })
    }
    
    return Director;
}