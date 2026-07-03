// ==UserScript==
// @name         百度自动登录助手
// @match        https://wappass.baidu.com/*
// ==/UserScript==

(function() {
    'use strict';
    
    // 1. 获取刚才存入的手机号
    const phone = localStorage.getItem('auto_phone');
    
    if (phone) {
        // 2. 自动填入手机号 (定位输入框)
        const input = document.querySelector('input[type="text"], input[name="userName"]');
        if (input) {
            input.value = phone;
            
            // 3. 自动勾选协议（根据 image_3.png 的圆圈图标）
            const checkbox = document.querySelector('input[type="checkbox"]');
            if(checkbox) checkbox.checked = true;

            // 4. 自动点击“下一步”按钮
            const nextBtn = document.querySelector('.pass-button-submit');
            if(nextBtn) nextBtn.click();
        }
    }
})();
