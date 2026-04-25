import Script from "next/script";

export default function YogoWidgetLoader() {
  return (
    <>
      <Script id="yogo-app-server" strategy="afterInteractive">
        {`
          var YOGO_APP_SERVER = "https://aliyogastudio.yogobooking.com";
        `}
      </Script>

      <Script id="yogo-widget-loader" strategy="afterInteractive">
        {`
          !function(){
            var i = YOGO_APP_SERVER + "/widgets/",
                l = new XMLHttpRequest;

            function appendYogoOverrides() {
              if (document.getElementById("yogo-widget-overrides")) {
                return;
              }

              var e = document.createElement("style");
              e.id = "yogo-widget-overrides";
              e.textContent = \`
                .yogo-calendar,
                .yogo-calendar .yogo-widget,
                .yogo-calendar .yogo--wrapper,
                .yogo-calendar .cd-schedule {
                  width: 100% !important;
                  max-width: none !important;
                }

                .yogo-calendar .yogo--wrapper,
                .yogo-calendar .cd-schedule {
                  margin-left: 0 !important;
                  margin-right: 0 !important;
                }

                .yogo-calendar .cd-schedule {
                  margin-top: 2em !important;
                  margin-bottom: 2em !important;
                }

                .yogo-calendar .widget {
                  padding-left: 0 !important;
                  padding-right: 0 !important;
                }

                .yogo-widget .theme--frame-box,
                .yogo-widget.theme--frame-box {
                  background: rgb(245, 240, 232) !important;
                }

                .cal-top[data-v-2affe1a5] {
                  background: rgb(237, 230, 213) !important;
                }

                .md-list.md-theme-default {
                  background: rgb(245, 240, 232) !important;
                }

                .md-menu-content-container .md-list {
                  font-family: inherit !important;
                }

                .md-field.md-focused label, .md-field.md-has-value label {
                  font-size: 14px !important;}
              \`;
              document.head.appendChild(e);
            }

            l.onloadend = function() {
              if (200 <= l.status && l.status < 300) {
                var e = JSON.parse(l.responseText),
                    t = e.css,
                    s = e.js;

                for (var r = 0; r < t.length; r++) {
                  var n = document.createElement("link");
                  n.rel = "stylesheet";
                  n.setAttribute("type", "text/css");
                  n.href = i + t[r];
                  document.head.appendChild(n);
                }

                for (var a = 0; a < s.length; a++) {
                  var o = document.createElement("script");
                  o.setAttribute("type", "text/javascript");
                  o.src = i + s[a];
                  document.head.appendChild(o);
                }

                appendYogoOverrides();
              } else {
                console.error("YOGO: Failed to get widget file list from app server.");
              }
            };

            l.open("GET", i + "filelist.json?cachebuster=" + Date.now());
            l.send();
          }();
        `}
      </Script>
    </>
  );
}
