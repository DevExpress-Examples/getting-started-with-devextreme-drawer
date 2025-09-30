using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GettingStartedWithDrawer.Controllers {
    public class HomeController : Controller {
        public ActionResult Index() {
            return View();
        }
        public ActionResult Deleted()
        {
            return View();
        }

        public ActionResult Sent()
        {
            return View();
        }

        public ActionResult Spam()
        {
            return View();
        }
    }
}