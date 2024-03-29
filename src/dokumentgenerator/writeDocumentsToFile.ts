import { generateDocX } from './docxGenerator';
import { SLIK_SKAPER_DU_GODE_SAMTALER_CONTENT } from '../resources/textContent';
import { generateTxt } from './txtGenerator';
import fs from 'fs';
import { Packer } from 'docx';

async function writeToFile() {
    console.log('WRITING STATIC DOCUMENTS TO FILE');
    console.log('THIS IS DONE SEPERATLY BECAUSE NEXT JS WILL ONLY SERVE ASSETS IN /public THAT ARE THERE AT BUILD TIME');

    // Ensure the folder structure exist before creating the files
    fs.mkdirSync('public/dokumenter/', { recursive: true });

    if (!fs.existsSync('public/dokumenter/Samtalestøtte-Arbeidsgiver.docx')) {
        const doc = generateDocX(SLIK_SKAPER_DU_GODE_SAMTALER_CONTENT);
        const documentBuffer = await Packer.toBuffer(doc);
        fs.writeFileSync('public/dokumenter/Samtalestøtte-Arbeidsgiver.docx', documentBuffer);
    } else {
        console.log('Samtalestøtte-Arbeidsgiver.docx ALLREADY EXISTS, SKIPPING');
    }
    if (!fs.existsSync('public/dokumenter/Samtalestøtte-Arbeidsgiver.txt')) {
        const txt = generateTxt(SLIK_SKAPER_DU_GODE_SAMTALER_CONTENT);
        fs.writeFileSync('public/dokumenter/Samtalestøtte-Arbeidsgiver.txt', txt);
    } else {
        console.log('Samtalestøtte-Arbeidsgiver.txt ALLREADY EXISTS, SKIPPING');
    }
}

writeToFile();
