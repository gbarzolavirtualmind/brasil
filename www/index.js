(function() {
    "use strict";    
    var MyApp = window.MyApp = { };
    MyApp.repo = new WindowsAzure.MobileServiceClient("https://prode.azure-mobile.net/", "exIZTEvtGMIyXACgjvBqHJZVQUrkpj90");
    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });

    $(function() {
        MyApp.app = new DevExpress.framework.html.HtmlApplication({
            namespace: MyApp,
            
            navigationType: "simple",
            navigation: [
              {
                title: "Home",
                action: "#home",
                icon: "home"
              },
              {
                title: "About",
                action: "#about",
                icon: "info"
              }
            ]
        });
        
        MyApp.app.router.register(":view", { view: "home" });
        MyApp.app.navigate();
    });
    
})();