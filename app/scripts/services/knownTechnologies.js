'use strict';

angular.module('wcagReporter')
.constant('knownTech', [
    {title: 'HTML5', specs: 'http://www.w3.org/TR/html5/'},
    {title: 'CSS', specs: 'http://www.w3.org/Style/CSS/specs/'},
    {title: 'HTML 4.01', specs: 'http://www.w3.org/TR/html401/'},
    {title: 'WAI-ARIA', spec: 'http://www.w3.org/TR/wai-aria/'},
    {title: 'XHTML 1.0', spec: 'http://www.w3.org/TR/xhtml1/'},
    {title: 'ECMAScript 3', spec: ''},
    {title: 'ECMAScript 4', spec: ''},
    {title: 'ECMAScript 5', spec: ''},
    {title: 'DOM level 1', spec: ''},
    {title: 'DOM level 2', spec: ''},
    {title: 'DOM level 3', spec: ''},
    {title: 'Silverlight', spec: ''},
    {title: 'PDF/A', spec: ''},
    {title: 'PDF/UA', spec: ''},
    {title: 'DOCX', spec: ''},
    {title: 'ODF', spec: ''},
    {title: 'SMIL', spec: ''}
]);