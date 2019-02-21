export class ColorPatch {

    created: Date;
    name: string;
    R: number;
    G: number;
    B: number;
    A: number;
    rgbaColor: string;

    // fromJSON is used to convert an serialized version
    // of the ColorPatch to an instance of the class
    static fromJSON(json: ColorPatchJSON | string): ColorPatch {
        if (typeof json === 'string') {
            // if it's a string, parse it first
            return JSON.parse(json, ColorPatch.reviver);
        } else {
            // create an instance of the ColorPatch class
            const myColorPatch = Object.create(ColorPatch.prototype);
            // copy all the fields from the json object
            return Object.assign(ColorPatch, json, {
                // convert fields that need converting
                created: new Date(json.created),
            });
        }
    }

    // reviver can be passed as the second parameter to JSON.parse
    // to automatically call ColorPatch.fromJSON on the resulting value.
    static reviver(key: string, value: any): any {
        return key === "" ? ColorPatch.fromJSON(value) : value;
    }

    constructor(
        R: number,
        G: number,
        B: number,
        A: number,
        name: String,
        rgbaColor: string
    ) {
        this.created = new Date();
    }

    getName(): string {
        return this.name;
    }
    // toJSON is automatically used by JSON.stringify
    toJSON(): ColorPatchJSON {
        // copy all fields from `this` to an empty object and return in
        return Object.assign({}, this, {
            // convert fields that need converting
            created: this.created.toString()
        });
    }

    generateRandomName() {
        return Math.floor((1 + Math.random()) * 0x10000)
           .toString(16)
           .substring(1);
       }

       generateRgbaColor() {
         this.rgbaColor = `rgba(${this.R},${this.G},${this.B},${this.A / 100})`;
       }
}
// A representation of Colorpatch data that can be converted to
// and from JSON without being altered.
interface ColorPatchJSON {
    name: string;
    created: string;
    R: number;
    G: number;
    B: number;
    A: number;
    rgbaColor: string;
    generateRandomName();
    generateRgbaColor();
    getName();
    toJSON();

}
