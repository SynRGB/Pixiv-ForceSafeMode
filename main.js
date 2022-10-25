// ==UserScript==
// @name                Pixiv-ForceSafeMode
// @name:zh-CN          Pixiv-一键强制和谐
// @name:ja             Pixiv-ワンタッチセキュリティモード
// @namespace           https://github.com/TitanRGB
// @version             1.2
// @description         While writing the last Pixiv user script, I realized that the official (Safe/R-18) filter didn't cover all the scenes. So I made this script to filter all bad information with one click.
// @description:zh-CN   开发上一个 Pixiv 插件时，意识到官方的 (全年龄/R-18) 过滤器并不能覆盖所有场景，容易使我的身体吃不消。因此需要更强大的强制过滤插件来一键过滤所有不良信息。
// @description:ja      前回のPixivユーザースクリプトを作成している最中、公式の（セーフ/ R-18）フィルターがすべてのシーンをカバーしていないことに気づきました。 したがって、1つのクリックですべての不適切な情報をフィルタリングするより強力な強制フィルタリングスクリプトが必要です。
// @author              https://github.com/TitanRGB
// @icon                data:image/png;base64,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
// @match               http*://*.pixiv.net/
// @connect             i.pximg.net
// @connect             i-f.pximg.net
// @connect             i-cf.pximg.net
// @license             MPL-2.0
// @license^            Mozilla Public License 2.0
// @grant               GM_setValue
// @grant               GM_getValue
// @grant               unsafeWindow
// @homepageURL         https://github.com/SynRGB/Pixiv-ForceSafeMode
// @contributionURL     https://github.com/SynRGB/Pixiv-ForceSafeMode
// @updateURL           https://github.com/SynRGB/Pixiv-ForceSafeMode/releases/new
// @copyright           Copyright © 2022-PRESENT, TitanRGB (https://github.com/TitanRGB)
// @charset             UTF-8
// @run-at              document-end
// ==/UserScript==

if (GM_getValue('pixiv-quick-safemode') === undefined) {
    GM_setValue('pixiv-quick-safemode', false);
}

let last_run_time = new Date().getTime();

let delete_r18 = function () {
    let new_div = document.createElement('div');
    new_div.setAttribute('id', 'Pixiv-QuickSafeMode-Deleted');
    new_div.setAttribute('style', `
        width: 136px;
        height: 136px;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 50px;
        color: #999;
    `);
    new_div.innerText = '🔞';
    if (GM_getValue('pixiv-quick-safemode', false)) {
        let div = document.querySelectorAll('div[type="illust"]');
        for (let i = 0; i < div.length; i++) {
            let divs = div[i].querySelectorAll('div');
            for (let j = 0; j < divs.length; j++) {
                // if contains 'R-18' or 'R-18G' in a div
                if (divs[j].innerText.includes('R-18') || divs[j].innerText.includes('R-18G')) {
                    let parent3 = div[i].parentNode.parentNode.parentNode;
                    let parent2 = div[i].parentNode.parentNode;
                    if ((parent2.querySelectorAll('div[type="illust"]').length === 1 && parent2.tagName === 'LI') || parent3.tagName === 'UL') {
                        parent2.remove();
                        // console.log('2');
                    } else {
                        new_div.style.width = new_div.style.height = div[i].offsetWidth + 'px';
                        div[i].parentNode.replaceChild(new_div, div[i]);
                        // console.log('1');
                    }
                }
            }
        }
        let li = document.querySelectorAll('li[offset="0"]');
        for (let i = 0; i < li.length; i++) {
            let divs = li[i].querySelectorAll('div');
            for (let j = 0; j < divs.length; j++) {
                // if contains 'R-18' or 'R-18G' in a div
                if (divs[j].innerText.includes('R-18') || divs[j].innerText.includes('R-18G')) {
                    if (li[i].parentNode.tagName === 'UL') {
                        li[i].remove();
                    }
                }
            }
        }
        last_run_time = new Date().getTime();
    }
}

let button = function (style) {
    let div = document.createElement('div');
    div.style.display = 'flex';
    let span = document.createElement('span');
    if (style === 'nav') {
        span.setAttribute('style', `
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            height: 46px;
            padding-left: 24px;
            padding-right: 24px;
            font-weight: bold;
            font-size: 16px;
            line-height: 24px;
            text-decoration: none;
            border-top: 4px solid transparent;
            transition: color 0.2s ease 0s;
            cursor: pointer;
            box-sizing: border-box;
            white-space: nowrap;
            background-color: transparent;
            color: #0096FA;
            cursor: default;
        `);
        div.setAttribute('style', `
            display: flex;
        `);
    } else if (style === 'artwork') {
        span.setAttribute('style', `
            display: flex;
            align-items: center;
            width: -webkit-fill-available;
            display: inline-grid;
            align-items: center;
            -webkit-box-align: center;
            -webkit-box-pack: center;
            justify-content: center;
            cursor: pointer;
            user-select: none;
            white-space: nowrap;
            font-size: 14px;
            line-height: 22px;
            font-weight: bold;
            padding-right: 16px;
            padding-left: 16px;
            border-radius: 999999px;
            box-sizing: border-box
            transition: color 0.2s ease 0s, background-color 0.2s ease 0s, box-shadow 0.2s ease 0s;
            height: 32px;
            background-color: transparent;
            color: #0096FA;
            position: relative;
            top: -7px;
        `);
        div.setAttribute('style', `
            display: block;
        `);
    }
    span.innerText = 'R-18';
    if (GM_getValue('pixiv-quick-safemode', false)) {
        span.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
        span.style.color = 'rgb(255, 64, 96)';
    }
    span.addEventListener('click', function () {
        if (GM_getValue('pixiv-quick-safemode', false)) {
            GM_setValue('pixiv-quick-safemode', false);
            span.style.backgroundColor = 'transparent';
            span.style.color = '#0096FA';
        } else {
            GM_setValue('pixiv-quick-safemode', true);
            span.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
            span.style.color = 'rgb(255, 64, 96)';
        }
    }, false);
    div.appendChild(span);
    div.setAttribute('class', 'Pixiv-QuickSafeMode');
    return div;
}

let main = function () {
    let nav = document.querySelectorAll('nav');
    let figcaption = document.querySelectorAll('figcaption');
    let section = document.querySelectorAll('section');
    // 确定为作品页面 (作品页面没有顶部 <nav> 菜单栏)
    if (section.length > 4 && figcaption.length === 1 && nav[0].parentNode.childNodes.length === 1) {
        if (section[3].parentNode === section[4].parentNode) {
            section[3].appendChild(button("artwork"));
        }
    }
    // 通过顶部 <nav> 菜单栏定位按钮
    else if (nav.length > 0 && figcaption.length === 0) {
        let div_nav = document.querySelector('nav');
        div_nav.appendChild(button("nav"));
    }
    delete_r18();
    last_run_time = new Date().getTime();
}

let MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
let observer = new MutationObserver(function (mutations) {
    mutations.forEach(function () {
        if (new Date().getTime() - last_run_time > 20) {
            setTimeout(function () {
                // 主函数-添加交互按钮
                if (document.querySelectorAll('div[class="Pixiv-QuickSafeMode"]').length === 0) {
                    main();
                    delete_r18();
                }
                // 删除R-18
                else {
                    delete_r18();
                }
            }, 100);
        }
    });
});
observer.observe(document.body, {
    childList: true,
    subtree: true
});

console.log("JS script Pixiv-ForceSafeMode (Pixiv-一键强制和谐) loaded. See more details at https://github.com/SynRGB/Pixiv-QuickSafeMode");