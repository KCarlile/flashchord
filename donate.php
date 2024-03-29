<?php
    require_once("utilities.php");
?>
<!doctype html>
<html lang="en">
<head>
    <?php require 'components/head.php'; ?>
    <title>Donate | Flash Chord</title>
</head>
<body>
    <?php require 'components/header.php'; ?>
    <div class="container">
        <h2>Donate</h2>
    </div>
    <div class="container">
        <div class="row bg-light mb-2 mt-3">
            <div class="col border-top border-bottom">
                <h4 class="text-secondary mt-1 mb-2">Support Flash Chord</h4>
            </div>
        </div>
        <p>Flash Chord is free and it will always be free. It's free to use ("free as in beer") and it's free to use ("free as in freedom"). <a href="https://en.wikipedia.org/wiki/Gratis_versus_libre#%22Free_beer%22_vs_%22freedom_of_speech%22_distinction">What does that mean?</a> It means that you won't ever pay a dime to use Flash Chord <em>and</em> it's an open source tool, so you're free to see what Flash Chord is doing and how it's being done.</p>
        <p>That being said, Flash Chord is not "free" in the sense that it takes time to build and maintain. It also costs actual money to host and renew the domain each year, and while these costs are not a lot, everything adds up.</p>
        <p>If you use Flash Chord, if you find it useful, and if you'd like to help support it, <a href="https://paypal.me/kennycarlile">please consider making a donation</a>.  Any amount would be greatly appreciated. Even if you choose to not make a donation, your use of Flash Chord is still appreciated. :)</p>
        <div class="row justify-content-center mb-2">
            <div class="text-center">
                <p><a href="https://www.paypal.com/donate/?business=QYYKN7YS3CDJN&no_recurring=0&item_name=Support+Flash+Chord+%28FlashChord.com%29&currency_code=USD" class="font-weight-bold">Donate via PayPal</a></p>
                <p>
                    <form action="https://www.paypal.com/donate" method="post" target="_top">
                        <input type="hidden" name="business" value="QYYKN7YS3CDJN" />
                        <input type="hidden" name="no_recurring" value="0" />
                        <input type="hidden" name="item_name" value="Support Flash Chord (FlashChord.com)" />
                        <input type="hidden" name="currency_code" value="USD" />
                        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                        <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                    </form>
                </p>
            </div>
        </div>
        <div class="row bg-light mb-2 mt-5">
            <div class="col border-top border-bottom">
                <h4 class="text-secondary mt-1 mb-2">Why not advertise?</h4>
            </div>
        </div>
        <p>Google AdSense for contextual advertisements wouldn't approve this site for ads due to a couple of factors. First, the functional content is dynamically generated via JavaScript, so Google's screen bots couldn't really interpret what was happening. Second, Google primarily looks for frequent content updates and lots of text from which to pull advertising context. Since Flash Chord is a simple (but significant!) tool, there's not a lot of content here for Google to mine for advertising context.</p>
        <p>If a business would like to help sponsor Flash Chord, it would be greatly appreciated. :)</p>
        <div class="row bg-light mb-2 mt-5">
            <div class="col border-top border-bottom">
                <h4 class="text-secondary mt-1 mb-2">Supporters</h4>
            </div>
        </div>
        <p><strong>Thank you</strong> to the following people their kind and generous support of Flash Chord!</p>
        <div class="row">
            <div>
                <?php
                    require_once("components/supporters.php");
                ?>
            </div>
        </div>
    </div>
    <footer class="pt-4 my-md-5 pt-md-5 border-top">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md">
                    <?php require 'components/copyright.php'; ?>
                </div>
            </div>
        </div>
    </footer>
    <?php require 'components/footer.php'; ?>
</body>
</html>
