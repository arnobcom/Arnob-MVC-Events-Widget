//Makhlaqur Arnob 
using System;
using System.ComponentModel;
using System.Linq;
using System.Web.Mvc;
using Telerik.Sitefinity.Mvc;
using SitefinityWebApp.Mvc.Models;
using Telerik.Sitefinity.Modules.Events;
using Telerik.Sitefinity.Modules.Pages;
using Telerik.Sitefinity.GenericContent.Model;
using Telerik.Sitefinity.Events.Model;
using Telerik.Sitefinity.Pages.Model;
using System.Collections.Generic;
using Telerik.Sitefinity;

namespace SitefinityWebApp.Mvc.Controllers
{
    [ControllerToolboxItem(Name = "ArnobMVCEvents", Title = "ArnobMVCEvents", SectionName = "MvcWidgets"), Telerik.Sitefinity.Web.UI.ControlDesign.ControlDesigner(typeof(SitefinityWebApp.WidgetDesigners.ArnobMVCEvents.ArnobMVCEventsDesigner))]
    public class ArnobMVCEventsController : Controller
    {
        /// <summary>
        /// Gets or sets the GUID of Event.
        /// </summary>
        [Category("Widget Properties")]
        public Guid List { get; set; }
        
        /// <summary>
        /// This is the default Action.
        /// </summary>
        public ActionResult Index()
        {
            var eventManager = new EventsManager();
            var model = new ArnobMVCEventsModel();

            if (List != Guid.Empty)
            {
                model.Events = eventManager.GetEvent(List);
            }
            else
            {
                model.Events = new ArnobMVCEventsModel().Events;
            }

            return View("Default", model);
        }
    }
}