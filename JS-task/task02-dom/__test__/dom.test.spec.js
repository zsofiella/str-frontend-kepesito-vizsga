describe('Dom manipuláció tesztelése', () => {
    const template =
        ` <nav id="link-list">
            <a href="https://html.com/">HTML-link</a>
            <a href="https://css-tricks.com/">CSS-link</a>
            <a href="https://www.javascript.com/">JS-outer-link</a>
            <a href="https://getbootstrap.com/">Bootsrape-link</a>
            <a href="https://angular.io/">Angular-outer-link</a>
        </nav>`;

    beforeEach(() => {
        document.body.innerHTML = template;
        const aElements = document.getElementsByTagName('a');

        aElements[0].innerText = 'HTML-links';
        aElements[1].innerText = 'CSS-link';
        aElements[2].innerText = 'JS-outer-link';
        aElements[3].innerText = 'Bootsrape-link';
        aElements[4].innerText = 'Angular-outer-link';
    });


    test('_blank attributum megjelenik a megfelelő linkben', () => {
        const { changeOuterLinks } = require('../dom');
        changeOuterLinks();
        const aElements = document.getElementsByTagName('a');

        const firstOuterLinkTarget = aElements[2].target;
        const secondOuterLinkTarget = aElements[4].target;

        expect(firstOuterLinkTarget).toBe('_blank');
        expect(secondOuterLinkTarget).toBe('_blank');
    });

    test('linkek száma nem változik meg, többszöri hívásnál sem', () => {
        const { changeOuterLinks } = require('../dom');
        changeOuterLinks();

        const aElements = document.getElementsByTagName('a');
        expect(aElements.length).toBe(5);
    })

    test('Csak a megfelelő linkben jelenik meg az új target attributum', () => {
        const { changeOuterLinks } = require('../dom');
        changeOuterLinks();
        const aElementList = document.getElementsByTagName('a');

        const firstOuterLinkTarget = aElementList[2].target;
        const secondOuterLinkTarget = aElementList[4].target;

        const firstInnerLinkTarget = aElementList[0].target;
        const secondInnerLinkTarget = aElementList[1].target;
        const thirdInnerLinkTarget = aElementList[3].target;

        expect(aElementList.length).toBe(5);

        expect(firstInnerLinkTarget).toBe('');
        expect(secondInnerLinkTarget).toBe('');
        expect(thirdInnerLinkTarget).toBe('');

        expect(firstOuterLinkTarget).toBe('_blank');
        expect(secondOuterLinkTarget).toBe('_blank');
    });


    test('Vastag betűvel kiemelt a link a STRONG elem segítségével', () => {
        const { changeOuterLinks } = require('../dom');
        changeOuterLinks();
        const aElementList = document.getElementsByTagName('a');

        const firstOuterLinkTarget = aElementList[2];
        const secondOuterLinkTarget = aElementList[4];

        expect(firstOuterLinkTarget.innerHTML).toBe('<strong>JS-outer-link</strong>');
        expect(secondOuterLinkTarget.innerHTML).toBe('<strong>Angular-outer-link</strong>')

    });

    test('Stílus jegyek NAV elemben történő megjelenésének tesztelése', () => {
        const { changeOuterLinks } = require('../dom');
        changeOuterLinks();

        const navElement = document.getElementsByTagName('nav')[0];

        expect(navElement.style.display).toBe('flex');
        expect(navElement.style.flexDirection).toBe('column');
        expect(navElement.style.margin).toBe('0px auto');
        expect(navElement.style.width).toBe('30%');
        expect(navElement.style.border).toBe('1px solid blue');
        expect(navElement.style.padding).toBe('16px');
    })


})