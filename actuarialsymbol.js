/****************************************************
 *
 *  actuarialsymbol.js
 *  
 *  Implements part of the actuarialsymbol and actuarialangle Packages for LaTeX input.
 *  
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2021 Marc-Andre Devost <https://github.com/MADEV34>.
 * 
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */MathJax.Hub.Register.StartupHook("TeX Jax Ready", function() {
    MathJax.InputJax.TeX.Definitions.Add({
        macros: {

	    endow: ["Macro","{\\require{enclose} {{#1}:\\enclose{actuarial}{#2}}}", 2],
            endowxn: ["Macro","{\\require{enclose} {x:\\enclose{actuarial}{n}}}"],
            
            pureendow: ["Macro","{\\require{enclose} {{#1}:\\overset{1}{\\enclose{actuarial}{#2}}}}", 2],
            pureendowxn: ["Macro","{\\require{enclose} {x:\\overset{1}{\\enclose{actuarial}{n}}}}"],
            
            term : ["Macro","{\\require{enclose} {\\overset{1}{#1}:\\enclose{actuarial}{#2}}}", 2],
            termxn : ["Macro","{\\require{enclose} {\\overset{1}{x}:\\enclose{actuarial}{n}}}"],
            
            angl: ["Macro","{\\require{enclose} \\enclose{actuarial}{#1}}", 1],
            angln: ["Macro","{\\require{enclose} \\enclose{actuarial}{n}}"],
            
            nthtop : ["Macro","\\overset{#1}{#2}", 2],
            
            joint : ["Macro","\\overline{#1}", 1],

            itop : ["Macro","\\overset{1}{#1}", 1],
            iitop : ["Macro","\\overset{2}{#1}", 1],
            iiitop : ["Macro","\\overset{3}{#1}", 1],
            
            ibottom : ["Macro","\\underset{1}{#1}", 1],
            iibottom : ["Macro","\\underset{2}{#1}", 1],
            iiibottom : ["Macro","\\underset{3}{#1}", 1],
            
            
            Ax: ["Macro", "{A^{#1}_{#2}}", 2, ""],
            bAx: ["Macro", "{\\bar{A}^{#1}_{#2}}", 2, ""],
            dAx: ["Macro", "{{\\ddot A}^{#1}_{#2}}", 2, ""],
            tAx: ["Macro", "{{\\tilde A}^{#1}_{#2}}", 2, ""],
            
            ax: ["Macro", "{a^{#1}_{#2}}", 2, ""],
            bax: ["Macro", "{\\bar{a}^{#1}_{#2}}", 2, ""],
            dax: ["Macro", "{\\ddot{a}^{#1}_{#2}}", 2, ""],
            tax: ["Macro", "{\\tilde{a}^{#1}_{#2}}", 2, ""],
            
            Aringx: ["Macro", "{\\mathring{A}^{#1}_{#2}}", 2, ""],
            aringx: ["Macro", "{\\mathring{a}^{#1}_{#2}}", 2, ""],
            
            Eringx: ["Macro", "{\\mathring{E}^{#1}_{#2}}", 2, ""],
            eringx: ["Macro", "{\\mathring{e}^{#1}_{#2}}", 2, ""],
            
            Sringx: ["Macro", "{\\mathring{S}^{#1}_{#2}}", 2, ""],
            sringx: ["Macro", "{\\mathring{s}^{#1}_{#2}}", 2, ""],
            
            dx : ["Macro", "{d^{#1}_{#2}}", 2, ""],
            Dx : ["Macro","{\\mathscr{D}^{#1}_{#2}}", 2, ""],
            
            IA : ["Macro", "(IA)"],
            IbA : ["Macro", "(I\\bar A)"],
            bIbA : ["Macro", "(\\bar I\\bar A)"],
            ImA : ["Macro", "(I^{(m)}A)"],
            ImbA : ["Macro", "(I^{(m)}\\bar A)"],
            bImbA : ["Macro", "(\\bar I^{(m)}\\bar A)"],
            Is : ["Macro", "(Is)"],
            Ibs : ["Macro", "(I \\bar s)"],
            Ids : ["Macro", "(I \\ddot s)"],
            
            Ex : ["Macro","{E^{#1}_{#2}}", 2, ""],
            
            DA : ["Macro", "(DA)"],
            DbA : ["Macro", "(D\\bar A)"],
            bDbA : ["Macro", "(\\bar D\\bar A)"],
            DmA : ["Macro", "(D^{(m)}A)"],
            DmbA : ["Macro", "(D^{(m)}\\bar A)"],
            bDmbA : ["Macro", "(\\bar D^{(m)}\\bar A)"],
            Ds : ["Macro", "(Ds)"],
            Dbs : ["Macro", "(D \\bar s)"],
            Dds : ["Macro", "(D \\ddot s)"],
            
            lx : ["Macro", "{\\ell^{#1}_{#2}}", 2, ""],
            Lx : ["Macro","{\\mathscr{L}^{#1}_{#2}}", 2, ""],
            
            px : ["Macro", "{p^{#1}_{#2}}", 2, ""],
            Px : ["Macro", "{P^{#1}_{#2}}", 2, ""],
            
            premium : ["Macro", "{P^{#1}\ \\left({#2}\\right)}", 2, ""],
            bpremium : ["Macro", "{\\bar{P}^{#1}\\left({#2}\\right)}", 2, ""],
            tpremium : ["Macro", "{\\tilde{P}^{#1}\\left({#2}\\right)}", 2, ""],

            paidup : ["Macro", "{W^{#1}\ \\left({#2}\\right)}", 2, ""],
            bpaidup : ["Macro", "{\\bar{W}^{#1}\\left({#2}\\right)}", 2, ""],
            tpaidup : ["Macro", "{\\tilde{W}^{#1}\\left({#2}\\right)}", 2, ""],


            reserve : ["Macro", "{V^{#1}\ \\left({#2}\\right)}", 2, ""],
            breserve : ["Macro", "{\\bar{V}^{#1}\\left({#2}\\right)}", 2, ""],
            treserve : ["Macro", "{\\tilde{V}^{#1}\\left({#2}\\right)}", 2, ""],

            qx : ["Macro", "{q^{#1}_{#2}}", 2, ""],
            Qx : ["Macro", "{Q^{#1}_{#2}}", 2, ""],

            sx: ["Macro", "{s^{#1}_{#2}}", 2, ""],
            bsx: ["Macro", "{\\bar{s}^{#1}_{#2}}", 2, ""],
            dsx: ["Macro", "{\\ddot{s}^{#1}_{#2}}", 2, ""],

            Vx : ["Macro", "{V^{#1}_{#2}}", 2, ""],
            Wx : ["Macro", "{W^{#1}_{#2}}", 2, ""],

            actsymb : ["Macro","{_{#1}^{#2}{#3}_{#4}^{#5}}", 5]


        }
    });
});

MathJax.Ajax.loadComplete("[Contrib]/actuarialsymbol/unpacked/actuarialsymbol.js");