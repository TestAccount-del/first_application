document.addEventListener('deviceready', onDeviceReady, false);


function onDeviceReady() {

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');

    setTimeout(loadStopCallBack, 5000);

    var url = 'http://site.com';
    var target = '_blank';
    var options = 'location=no,hidden=yes';
    var ref = cordova.InAppBrowser.open(url, target, options);

    ref.addEventListener('exit', exitCallBack);
    ref.addEventListener('loadstop', loadStopCallBack);


    function loadStopCallBack(event) {
        ref.show();
        setTimeout(navigator.splashscreen.hide(), 50);
    }

    function exitCallBack(event) {
        navigator.app.exitApp()
    }   

    window.plugins.OneSignal
        .startInit("4cd36b23-e58f-4201-babd-cfef5a73527b")
        .endInit();

}