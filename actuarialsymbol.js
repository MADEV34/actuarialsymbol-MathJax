/****************************************************
 *
 *  actuarialsymbol.js
 *  
 *  Implements the actuarialsymbol and actuarialangle Packages for LaTeX input.
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
            quantity: [ "Macro", "{\\left\\{ #1 \\right\\}}", 1 ],
            endowxn: [ "Macro", "{\\require{enclose} {x:\\enclose{actuarial}{n}}}"],
            angln: [ "Macro", "{\\require{enclose} \\enclose{actuarial}{n}}"],
            Ax: [ "Macro", "{A_{#1}}", 1 ],
            bAx: [ "Macro", "{\\bar{A}_{#1}}", 1 ],
            dAx: [ "Macro", "{{\\ddot A}_{#1}}", 1 ],
            ax: [ "Macro", "{a_{#1}}", 1 ],
            bax: [ "Macro", "{\\bar{a}_{#1}}", 1 ],
            dax: [ "Macro", "{{\\ddot a}_{#1}}", 1 ],
            actsymb : [ "Macro", "{_{#1}^{#2}{#3}_{#4}^{#5}}", 5],
        }
    });
});

MathJax.Ajax.loadComplete("[Contrib]/actuarialsymbol/unpacked/actuarialsymbol.js");