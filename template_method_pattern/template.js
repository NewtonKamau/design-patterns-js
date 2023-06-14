//Abstract class

class HouseBuilder {
    build () {
        this.buildFoundation();
        this.buildWalls();
        this.buildRoof();
        this.decorate();
    }
    buildFoundation () {
        throw new Error("buildingFoundation() must be implemented");
    }
    buildWalls () {
        throw new Error("buildingWalls() must be implemented");
    }
    buildRoof () {
        throw new Error("buildingRoof() must be implemented");
        
    }
    decorate () {
        console.log('decorating...');
    }
}

//concrete subclasses

class WoodenHouseBuilder extends HouseBuilder{
    buildFoundation () {
        console.log('Building wooden foundation');
    }
    buildWalls () {
        console.log("Building wooden walls.")
    }
    buildRoof () {
        console.log("Building a roof with shingles.");
    }
}

class BrickHouseBuilder extends HouseBuilder{
    buildFoundation () {
        console.log('Building brick foundation.');
    }
    buildWalls () {
        console.log("Building red bricks for the house's wall")
    }
    buildRoof () {
        console.log("Building a tiled roof.");
    }
}

module.exports = {
    WoodenHouseBuilder,
    BrickHouseBuilder
}