import HomePage from "../pages/home.f7";
import AboutPage from "../pages/about.f7";
import FormPage from "../pages/form.f7";
import modulbelajarPage from "../pages/modulbelajar.f7";
import modul1Page from "../pages/modul1.f7";
import modul2Page from "../pages/modul2.f7";
import modul3Page from "../pages/modul3.f7";
import modul4Page from "../pages/modul4.f7";
import modul5Page from "../pages/modul5.f7";
import modul6Page from "../pages/modul6.f7";
import modul7Page from "../pages/modul7.f7";
import modul8Page from "../pages/modul8.f7";
import modul9Page from "../pages/modul9.f7";
import soalPage from "../pages/soal.f7";
import latihan1Page from "../pages/latihan1.f7";
import latihan2Page from "../pages/latihan2.f7";
import latihan3Page from "../pages/latihan3.f7";
import latihan4Page from "../pages/latihan4.f7";
import latihan5Page from "../pages/latihan5.f7";
import latihan6Page from "../pages/latihan6.f7";
import kuncijawabanPage from "../pages/kuncijawaban.f7";
import jawaban1Page from "../pages/jawaban1.f7";
import jawaban2Page from "../pages/jawaban2.f7";
import jawaban3Page from "../pages/jawaban3.f7";
import jawaban4Page from "../pages/jawaban4.f7";
import jawaban5Page from "../pages/jawaban5.f7";
import jawaban6Page from "../pages/jawaban6.f7";
import tipsandtrickPage from "../pages/tipsandtrick.f7";
import profilePage from "../pages/profile.f7";
import aboutappPage from "../pages/aboutapp.f7";
import profile1Page from "../pages/profile1.f7";
import profile2Page from "../pages/profile2.f7";
import profile3Page from "../pages/profile3.f7";
import profile4Page from "../pages/profile4.f7";
import profile5Page from "../pages/profile5.f7";
import profile6Page from "../pages/profile6.f7";
import pdfpage from "../pages/pdf.f7";

import DynamicRoutePage from "../pages/dynamic-route.f7";
import RequestAndLoad from "../pages/request-and-load.f7";
import NotFoundPage from "../pages/404.f7";

var routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/about/",
    component: AboutPage,
  },
  {
    path: "/form/",
    component: FormPage,
  },
  {
    path: "/modulbelajar/",
    component: modulbelajarPage,
  },
  {
    path: "/modul1/",
    component: modul1Page,
  },
  {
    path: "/modul2/",
    component: modul2Page,
  },
  {
    path: "/modul3/",
    component: modul3Page,
  },
  {
    path: "/modul4/",
    component: modul4Page,
  },
  {
    path: "/modul5/",
    component: modul5Page,
  },
  {
    path: "/modul6/",
    component: modul6Page,
  },
  {
    path: "/modul7/",
    component: modul7Page,
  },
  {
    path: "/modul8/",
    component: modul8Page,
  },
  {
    path: "/modul9/",
    component: modul9Page,
  },
  {
    path: "/soal/",
    component: soalPage,
  },
  {
    path: "/latihan1/",
    component: latihan1Page,
  },
  {
    path: "/latihan2/",
    component: latihan2Page,
  },
  {
    path: "/latihan3/",
    component: latihan3Page,
  },
  {
    path: "/latihan4/",
    component: latihan4Page,
  },
  {
    path: "/latihan5/",
    component: latihan5Page,
  },
  {
    path: "/latihan6/",
    component: latihan6Page,
  },
  {
    path: "/kuncijawaban/",
    component: kuncijawabanPage,
  },
  {
    path: "/jawaban1/",
    component: jawaban1Page,
  },
  {
    path: "/jawaban2/",
    component: jawaban2Page,
  },
  {
    path: "/jawaban3/",
    component: jawaban3Page,
  },
  {
    path: "/jawaban4/",
    component: jawaban4Page,
  },
  {
    path: "/jawaban5/",
    component: jawaban5Page,
  },
  {
    path: "/jawaban6/",
    component: jawaban6Page,
  },
  {
    path: "/tipsandtrick/",
    component: tipsandtrickPage,
  },
  {
    path: "/profile/",
    component: profilePage,
  },
  {
    path: "/aboutapp/",
    component: aboutappPage,
  },
  {
    path: "/profile1/",
    component: profile1Page,
  },
  {
    path: "/profile2/",
    component: profile2Page,
  },
  {
    path: "/profile3/",
    component: profile3Page,
  },
  {
    path: "/profile4/",
    component: profile4Page,
  },
  {
    path: "/profile5/",
    component: profile5Page,
  },
  {
    path: "/profile6/",
    component: profile6Page,
  },
  {
    path: "/pdf/",
    component: pdfpage,
  },
  {
    path: "/dynamic-route/blog/:blogId/post/:postId/",
    component: DynamicRoutePage,
  },
  {
    path: "/request-and-load/user/:userId/",
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: "Vladimir",
          lastName: "Kharlampidi",
          about: "Hello, i am creator of Framework7! Hope you like it!",
          links: [
            {
              title: "Framework7 Website",
              url: "http://framework7.io",
            },
            {
              title: "Framework7 Forum",
              url: "http://forum.framework7.io",
            },
          ],
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            },
          }
        );
      }, 1000);
    },
  },
  {
    path: "(.*)",
    component: NotFoundPage,
  },
];

export default routes;
