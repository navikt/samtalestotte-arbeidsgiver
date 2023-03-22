import { generateDocX } from '../dokumentgenerator/docxGenerator';
import { SLIK_SKAPER_DU_GODE_SAMTALER_CONTENT } from '../resources/textContent';
import { generateTxt } from '../dokumentgenerator/txtGenerator';
import { Packer } from 'docx';
import fs from 'fs';

const genererDokumenter = async () => {
    const doc = generateDocX(SLIK_SKAPER_DU_GODE_SAMTALER_CONTENT);
    const txt = generateTxt(SLIK_SKAPER_DU_GODE_SAMTALER_CONTENT);
    const documentBuffer = await Packer.toBuffer(doc);
    fs.writeFileSync('public/Samtalestøtte-Arbeidsgiver.docx', documentBuffer);
    fs.writeFileSync('public/Samtalestøtte-Arbeidsgiver.txt', txt);
};

genererDokumenter()
    .catch((reason) => {
        console.error("Greide ikke å generer dokumenter", reason)
        throw reason
    })
