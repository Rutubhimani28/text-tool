import Script from "next/script";

// HilltopAds tags: popunder and in-page push (the banner lives in banner-ads.tsx).
// Loaded after hydration.
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
    </>
  );
}
