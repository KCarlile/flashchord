silktideCookieBannerManager.updateCookieBannerConfig({
    background: {
        showBackground: true
    },
    cookieIcon: {
        position: "bottomLeft"
    },
    cookieTypes: [
        {
        id: "necessary",
        name: "Necessary",
        description: "<p>These cookies are necessary for the website to function properly and cannot be switched off. They help with things like setting your privacy preferences.</p>",
        required: true,
        onAccept: function() {
            console.log('Add logic for the required Necessary here');
        }
        },
        {
        id: "analytical",
        name: "Analytical",
        description: "<p>These cookies help us improve the site by tracking which pages are most popular and how visitors use the site.</p>",
        required: false,
        onAccept: function() {
            gtag('consent', 'update', {
            analytics_storage: 'granted',
            });
            dataLayer.push({
            'event': 'consent_accepted_analytical',
            });
        },
        onReject: function() {
            gtag('consent', 'update', {
            analytics_storage: 'denied',
            });
        }
        }
    ],
    text: {
        banner: {
        description: "<p>We use cookies on our site to enhance your user experience, provide personalized content, and analyze our traffic. <a href=\"https://www.flashchord.com/privacy\" target=\"_blank\">Cookie Policy.</a></p>",
        acceptAllButtonText: "Accept all",
        acceptAllButtonAccessibleLabel: "Accept all cookies",
        rejectNonEssentialButtonText: "Reject non-essential",
        rejectNonEssentialButtonAccessibleLabel: "Reject non-essential",
        preferencesButtonText: "Preferences",
        preferencesButtonAccessibleLabel: "Toggle preferences"
        },
        preferences: {
        title: "Customize your cookie preferences",
        description: "<p>We respect your right to privacy. You can choose not to allow some types of cookies. Your cookie preferences will apply across our website.</p>",
        creditLinkText: "Get this banner for free",
        creditLinkAccessibleLabel: "Get this banner for free"
        }
    },
    position: {
        banner: "bottomCenter"
    }
});
