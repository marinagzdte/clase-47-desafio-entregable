class ColorsDao {
colors: string[];

    constructor() {
        this.colors = []
    }

    addColor = (color: string) : void => {
        if (color === "") throw new Error("Color must be a valid string.");
        this.colors.push(color)
    }

    getColors = () : string[] => {
        return this.colors;
    }
}

export {ColorsDao}