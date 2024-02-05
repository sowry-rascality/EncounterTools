// ==UserScript==
// @name         DnDBeyond Encounter Tools
// @description  Encounter Tools
// @version      0.2.0
// @author       Sowry
// @namespace    Sowry
// @downloadURL  https://raw.githubusercontent.com/sowry-rascality/EncounterTools/main/DnDBeyondEncounterTools.js
// @updateURL    https://raw.githubusercontent.com/sowry-rascality/EncounterTools/main/DnDBeyondEncounterTools.js
// @homepageURL  https://github.com/sowry-rascality/DnDBeyondEncounterTools
// @match        https://www.dndbeyond.com/*
// @run-at       document-end
// @grant        none
// ==/UserScript==
(() => {
    const version = "0.2.0";
    console.log(`Loaded Version ${version}`);

    'use strict';

    let scriptId = 'DnDBeyondEncounterToolsScript'; // you could encode the css path itself to generate id..
    let styleId = 'DnDBeyondEncounterToolsStyle';
    let head = document.getElementsByTagName('head')[0];
    let host = 'https://raw.githubusercontent.com/sowry-rascality/EncounterTools/main/dist'

    document.querySelectorAll('script').forEach((script) => {
        if (script.src.includes('https://media.dndbeyond.com/encounter-builder/static/js')) {
          script.remove();
          // We want to be the only encounter builder script that runs.
        }
    })

    if (!document.getElementById(scriptId)) {
        let script = document.createElement('script');
        script.id = scriptId;
        script.src = `${host}/bundle.js`;
        head.appendChild(script);
    }
    // if (!document.getElementById(styleId)) {
    //     let style = document.createElement('style');
    //     style.id = scriptId;
    //     style.src = `${host}/bundle.css`;
    //     head.appendChild(style);
    // }
})();
