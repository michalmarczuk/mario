import BBCodeText from 'phaser3-rex-plugins/plugins/bbcodetext.js';

export default class MarioTextGenerator {
    static colors = [
        '#FCD002',
        '#E71F08',
        '#41B131',
        '#019CDA',
        '#FCD002',
        '#E71F08',
        '#41B131'
    ]

    static add(x, y, text, fontSize, scene) {
        const textCharsArray = text.split('')
        let bbText = ''

        textCharsArray.forEach((char, index) => {
            const color = this.colors[index % this.colors.length]
            char = char === ' ' ? '  ' : char
            bbText += `[color=${color}]${char}[/color]`
        });

        const txt = new BBCodeText(scene, x, y, bbText, { fontFamily: 'supply_center', fontSize: `${fontSize}px` });
        scene.add.existing(txt);
    }
}