using Domain;
using System.Web.Mvc;

namespace Ui.Web.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
				var getter = TaskGetter.Get();
            return View();
        }
    }
}