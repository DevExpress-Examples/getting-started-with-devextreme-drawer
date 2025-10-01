using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ASP_NET_Core.Models;

namespace ASP_NET_Core.Controllers;
public class HomeController: Controller {
    public IActionResult Index() {
        var employee = new Employee
        {
            Id = 1,
            Name = "John Heart",
            Position = "CEO",
            HireDate = new DateTime(1995, 1, 15),
            OfficeNumber = 901,
            Phone = "+1(213) 555-9392",
            Skype = "jheart_DX_skype",
            Email = "jheart@dx-email.com",
            Notes = "John has been in the Audio/Video industry since 1990. He has led DevAV as its CEO since 2003."
        };

        return View(employee);
    }

    [HttpPost]
    public IActionResult Index(Employee employee)
    {
        if (ModelState.IsValid)
        {
            // Process the form submission here
            TempData["Message"] = "Form submitted successfully!";
            return RedirectToAction("Index");
        }

        return View(employee);
    }

    public IActionResult Inbox() {
        return View("Index", GetSampleEmployee());
    }

    public IActionResult Sent() {
        return View("Index", GetSampleEmployee());
    }

    public IActionResult Deleted() {
        return View("Index", GetSampleEmployee());
    }

    public IActionResult Spam() {
        return View("Index", GetSampleEmployee());
    }

    private Employee GetSampleEmployee()
    {
        return new Employee
        {
            Id = 1,
            Name = "John Heart",
            Position = "CEO",
            HireDate = new DateTime(1995, 1, 15),
            OfficeNumber = 901,
            Phone = "+1(213) 555-9392",
            Skype = "jheart_DX_skype",
            Email = "jheart@dx-email.com",
            Notes = "John has been in the Audio/Video industry since 1990. He has led DevAV as its CEO since 2003."
        };
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error() {
        return View();
    }
}
