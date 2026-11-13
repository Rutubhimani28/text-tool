import Script from "next/script";

// Ad network tags, loaded site-wide after hydration.
// HilltopAds: popunder + in-page push (its banner lives in banner-ads.tsx).
// Adsterra: popunder, social bar and banner (the banner container div is in layout.tsx).
const inpagePushTag = `(function(qvdha){
var d = document,
    s = d.createElement('script'),
    l = d.currentScript || d.scripts[d.scripts.length - 1];
s.settings = qvdha || {};
s.src = "\\/\\/simplistic-walk.com\\/bdXJV.sWdfG\\/l_0cYpW\\/ce\\/yeomh9-u\\/ZPU\\/lBkwPcTpcY2NMKjnIK3_N\\/zwMTtKNdziYNyhMSjJc\\/3yNGwE";
s.async = true;
s.referrerPolicy = 'no-referrer-when-downgrade';
l.parentNode.insertBefore(s, l);
})({})`;

// Container the Adsterra banner script renders into. The id must match the banner key.
export const ADSTERRA_BANNER_CONTAINER_ID = "container-efc2f008c9977918429f7ae0aed6d72c";

// Adsterra smartlink (direct link). Used as a clearly labelled sponsored link in the footer.
export const ADSTERRA_SMARTLINK = "https://araplhn.org/4/619607b3e5e8e058e125fa615e16756c";

export function AdScripts() {
  return (
    <>
      <Script
        id="hilltop-popunder"
        src="https://thoroughgear.com/b.3dVY0vP/3Jp-vabEmfVaJZZeDj0q3PN/j/IFyBNIzcQM5ZL/TDcf2RMOjvI-3/NuTPMk"
        strategy="afterInteractive"
      />
      <Script
        id="hilltop-inpage-push"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: inpagePushTag }}
      />
      <Script
        id="adsterra-popunder"
        src="https://abscloud.org/1/8c59168477c8cc16a9055cf03e7f2cf6"
        data-cfasync="false"
        strategy="afterInteractive"
      />
      <Script
        id="adsterra-social-bar"
        src="https://bauval.org/14/91e71fd8506cd7688dc3bc06513fba42"
        data-cfasync="false"
        strategy="afterInteractive"
      />
      <Script
        id="adsterra-banner"
        src="https://bauval.org/21/efc2f008c9977918429f7ae0aed6d72c"
        data-cfasync="false"
        strategy="afterInteractive"
      />
    </>
  );
}
